import React, { useState, useEffect } from 'react';
import { Github, Link, Save, Trash2, Plus, Terminal, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fetchedProject, setFetchedProject] = useState(null);
  const [existingProjects, setExistingProjects] = useState([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const navigate = useNavigate();

  // Removed Firebase auth check
  useEffect(() => {
    // Check if user was previously logged in (mock persistence)
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Removed Firebase fetch
  const fetchExistingProjects = async () => {
    // No database to fetch from
    setExistingProjects([]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mock login
    if (password === 'admin123') {
      const mockUser = { email: 'admin@portfolio.com' };
      setUser(mockUser);
      localStorage.setItem('adminUser', JSON.stringify(mockUser));
      setLoading(false);
    } else {
      setError('Invalid password');
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  const parseGithubUrl = (url) => {
    try {
      let cleanUrl = url.trim();
      // Handle SSH format: git@github.com:owner/repo.git
      if (cleanUrl.startsWith('git@')) {
        cleanUrl = cleanUrl.replace(':', '/').replace('git@', 'https://');
      }
      // Remove .git extension
      if (cleanUrl.endsWith('.git')) {
        cleanUrl = cleanUrl.slice(0, -4);
      }
      
      const urlObj = new URL(cleanUrl);
      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      
      if (pathParts.length >= 2) {
        return { owner: pathParts[0], repo: pathParts[1] };
      }
      throw new Error('Invalid GitHub URL');
    } catch (err) {
      return null;
    }
  };

  const fetchRepoDetails = async () => {
    setLoading(true);
    setError('');
    setFetchedProject(null);

    const repoInfo = parseGithubUrl(repoUrl);
    
    if (!repoInfo) {
      setError('Invalid GitHub URL. Please use HTTPS or SSH format.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}`);
      
      if (!response.ok) {
        throw new Error('Repository not found or private');
      }

      const data = await response.json();
      
      // Transform GitHub data to portfolio project format
      const projectData = {
        title: data.name.replace(/-/g, ' ').replace(/_/g, ' '), // Format title
        description: data.description || 'No description available',
        stack: data.language ? [data.language] : [], // We might want to fetch languages endpoint for more
        github: data.html_url,
        demo: data.homepage || '#',
        stars: data.stargazers_count,
        forks: data.forks_count
      };

      setFetchedProject(projectData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    if (!fetchedProject) return;
    
    setLoading(true);
    
    // Generate code snippet for manual addition
    const codeSnippet = `
  {
    title: "${fetchedProject.title}",
    description: "${fetchedProject.description}",
    stack: ${JSON.stringify(fetchedProject.stack)},
    github: "${fetchedProject.github}",
    demo: "${fetchedProject.demo}"
  },`;
    
    setGeneratedCode(codeSnippet);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard! Now paste it into src/data/portfolioData.js');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      alert('To delete a project, you must remove it from src/data/portfolioData.js');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Admin Dashboard</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Project Manager</h1>
          <button 
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Import Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Github size={24} />
            Import from GitHub
          </h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="Paste GitHub URL (HTTPS or SSH)..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={fetchRepoDetails}
              disabled={loading || !repoUrl}
              className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? 'Fetching...' : 'Fetch'}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Preview Section */}
        {fetchedProject && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Preview & Edit</h2>
            
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Project Title</label>
                <input
                  type="text"
                  value={fetchedProject.title}
                  onChange={(e) => setFetchedProject({...fetchedProject, title: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Description</label>
                <textarea
                  value={fetchedProject.description}
                  onChange={(e) => setFetchedProject({...fetchedProject, description: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    value={fetchedProject.stack.join(', ')}
                    onChange={(e) => setFetchedProject({...fetchedProject, stack: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Demo URL</label>
                  <input
                    type="text"
                    value={fetchedProject.demo}
                    onChange={(e) => setFetchedProject({...fetchedProject, demo: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setFetchedProject(null)}
                  className="px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePublish}
                  disabled={loading}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  <Terminal size={20} />
                  {loading ? 'Generating...' : 'Generate Code'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Generated Code Section */}
        {generatedCode && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Terminal size={24} />
              Generated Code
            </h2>
            <p className="text-slate-600 mb-4">
              To make this project <strong>permanent on the website</strong> (visible to everyone), you must add it to the code.
              <br />
              1. Copy the code below.
              <br />
              2. Open <code>src/data/portfolioData.js</code>.
              <br />
              3. Paste it into the <code>projects</code> array.
            </p>
            <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm">
                {generatedCode}
              </pre>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setGeneratedCode('')}
                className="px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={copyToClipboard}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Save size={20} />
                Copy Code
              </button>
            </div>
          </div>
        )}

        {/* Existing Projects List */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Published Projects</h2>
          <div className="grid gap-4">
            {existingProjects.length === 0 ? (
              <p className="text-slate-500 italic">No projects published yet.</p>
            ) : (
              existingProjects.map((project) => (
                <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-slate-800">{project.title}</h3>
                    <p className="text-sm text-slate-500 truncate max-w-md">{project.description}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
