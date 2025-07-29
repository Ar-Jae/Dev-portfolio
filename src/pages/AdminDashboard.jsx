import React, { useState } from 'react';
import { motion } from 'framer-motion';


const AdminDashboard = ({ projects, setProjects }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [filterTech, setFilterTech] = useState('');
  const [auth, setAuth] = useState(false);
  const [log, setLog] = useState([]);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkUrls, setBulkUrls] = useState('');
  const [bulkLoading, setBulkLoading] = useState(false);
  const [bulkError, setBulkError] = useState('');
  const [activeTab, setActiveTab] = useState('add');

  const parseRepo = url => {
    const match = url.match(/github.com\/(.+?)\/(.+?)(?:\.git)?$/);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
  };

  // Admin authentication (simple password)
  const ADMIN_PASS = 'devpass';
  const handleAuth = e => {
    e.preventDefault();
    if (e.target.password.value === ADMIN_PASS) setAuth(true);
    else setError('Incorrect password');
  };

  // Image upload handler
  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  // Preview with repo info
  const handlePreview = async () => {
    setError('');
    setPreview(null);
    const parsed = parseRepo(repoUrl);
    if (!parsed) {
      setError('Invalid GitHub URL');
      return;
    }
    try {
      const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`);
      if (!res.ok) throw new Error('Repo not found');
      const data = await res.json();
      setPreview({
        title: data.name,
        description: data.description || 'No description provided.',
        image: imageFile ? URL.createObjectURL(imageFile) : '/src/assets/cover.jpg',
        github: data.html_url,
        live: data.homepage || '',
        stars: data.stargazers_count,
        forks: data.forks_count,
        updated: data.updated_at,
        owner: data.owner?.login,
        avatar: data.owner?.avatar_url,
      });
    } catch {
      setError('Could not fetch repo info.');
    }
  };

  // Add project (with image)
  const handleAddProject = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const parsed = parseRepo(repoUrl);
    if (!parsed) {
      setError('Invalid GitHub URL');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`);
      if (!res.ok) throw new Error('Repo not found');
      const data = await res.json();
      const newProject = {
        title: data.name,
        description: data.description || 'No description provided.',
        image: imageFile ? URL.createObjectURL(imageFile) : '/src/assets/cover.jpg',
        github: data.html_url,
        live: data.homepage || '',
        stars: data.stargazers_count,
        forks: data.forks_count,
        updated: data.updated_at,
        owner: data.owner?.login,
        avatar: data.owner?.avatar_url,
      };
      setProjects([newProject, ...projects]);
      setLog([{ action: 'add', project: newProject, time: new Date().toLocaleString() }, ...log]);
      setRepoUrl('');
      setPreview(null);
      setImageFile(null);
    } catch {
      setError('Could not fetch repo info.');
    }
    setLoading(false);
  };

  // Edit project
  const handleEditProject = idx => {
    const project = projects[idx];
    setPreview(project);
    setRepoUrl(project.github);
    setImageFile(null);
  };

  // Delete project
  const handleDeleteProject = idx => {
    const updated = projects.filter((_, i) => i !== idx);
    setProjects(updated);
    setLog([{ action: 'delete', project: projects[idx], time: new Date().toLocaleString() }, ...log]);
  };

  // Bulk add
  const handleBulkAdd = async e => {
    e.preventDefault();
    setBulkError('');
    setBulkLoading(true);
    const urls = bulkUrls.split(/\r?\n/).map(u => u.trim()).filter(Boolean);
    let added = 0;
    for (const url of urls) {
      const parsed = parseRepo(url);
      if (!parsed) {
        setBulkError(`Invalid GitHub URL: ${url}`);
        continue;
      }
      try {
        const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`);
        if (!res.ok) throw new Error('Repo not found');
        const data = await res.json();
        const newProject = {
          title: data.name,
          description: data.description || 'No description provided.',
          image: '/src/assets/cover.jpg',
          github: data.html_url,
          live: data.homepage || '',
          stars: data.stargazers_count,
          forks: data.forks_count,
          updated: data.updated_at,
          owner: data.owner?.login,
          avatar: data.owner?.avatar_url,
        };
        setProjects(prev => [newProject, ...prev]);
        setLog(prev => [{ action: 'bulk-add', project: newProject, time: new Date().toLocaleString() }, ...prev]);
        added++;
      } catch {
        setBulkError(`Could not fetch repo info for: ${url}`);
      }
    }
    setBulkLoading(false);
    setBulkUrls('');
    setShowBulkModal(false);
    if (added > 0) setError(`${added} projects added via bulk.`);
  };

  // Sort/filter projects
  let displayedProjects = [...projects];
  if (filterTech) displayedProjects = displayedProjects.filter(p => p.description?.toLowerCase().includes(filterTech.toLowerCase()));
  if (sortBy === 'name') displayedProjects.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === 'date') displayedProjects.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  if (sortBy === 'stars') displayedProjects.sort((a, b) => (b.stars || 0) - (a.stars || 0));

  if (!auth) {
    return (
      <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="admin-card">
          <h2 className="admin-title">Admin Login</h2>
          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
            <input type="password" name="password" placeholder="Enter admin password" className="project-add-input" required />
            <button type="submit" className="project-add-btn">Login</button>
          </form>
          {error && <motion.div className="project-add-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="admin-card">
        <h2 className="admin-title">Admin Dashboard</h2>
        <nav style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className={`project-add-btn${activeTab === 'add' ? ' active' : ''}`} style={{ background: activeTab === 'add' ? '#6366f1' : '#232136' }} onClick={() => setActiveTab('add')}>Add Project</button>
          <button className={`project-add-btn${activeTab === 'bulk' ? ' active' : ''}`} style={{ background: activeTab === 'bulk' ? '#a78bfa' : '#232136' }} onClick={() => setActiveTab('bulk')}>Bulk Add</button>
          <button className={`project-add-btn${activeTab === 'list' ? ' active' : ''}`} style={{ background: activeTab === 'list' ? '#6366f1' : '#232136' }} onClick={() => setActiveTab('list')}>Projects List</button>
          <button className={`project-add-btn${activeTab === 'log' ? ' active' : ''}`} style={{ background: activeTab === 'log' ? '#a78bfa' : '#232136' }} onClick={() => setActiveTab('log')}>Activity Log</button>
        </nav>
        {activeTab === 'add' && (
          <form className="project-add-form" onSubmit={handleAddProject} style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <input
              type="text"
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)}
              placeholder="Paste GitHub repo URL..."
              className="project-add-input"
              required
              style={{ minWidth: '220px' }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="project-add-input"
              style={{ minWidth: '220px' }}
            />
            <button type="button" className="project-add-btn" style={{ background: '#6366f1' }} onClick={handlePreview} disabled={loading || !repoUrl}>
              Preview
            </button>
            <button type="submit" className="project-add-btn" disabled={loading || !preview}>
              {loading ? 'Adding...' : 'Add Project'}
            </button>
            {error && <motion.div className="project-add-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
            {preview && (
              <motion.div className="project-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ margin: '2rem auto', maxWidth: '400px' }}>
                {preview.avatar && <img src={preview.avatar} alt="Owner avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', marginBottom: '1rem' }} />}
                <img src={preview.image} alt="Project cover" className="project-img" />
                <h3 className="project-title" style={{ marginBottom: '0.7rem' }}>{preview.title}</h3>
                <p className="project-desc">{preview.description}</p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.7rem', flexWrap: 'wrap' }}>
                  <span style={{ color: '#a78bfa', fontWeight: 600 }}>⭐ {preview.stars}</span>
                  <span style={{ color: '#6366f1', fontWeight: 600 }}>🍴 {preview.forks}</span>
                  <span style={{ color: '#e5e7eb', fontWeight: 500 }}>Last updated: {new Date(preview.updated).toLocaleDateString()}</span>
                </div>
                <div className="project-links-navbar">
                  <a href={preview.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  {preview.live && <a href={preview.live} className="project-link" target="_blank" rel="noopener noreferrer">Live</a>}
                </div>
              </motion.div>
            )}
          </form>
        )}
        {activeTab === 'bulk' && (
          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <h3 style={{ color: '#a78bfa', fontWeight: 700, marginBottom: '1rem' }}>Bulk Add Projects</h3>
            <form onSubmit={handleBulkAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <textarea
                value={bulkUrls}
                onChange={e => setBulkUrls(e.target.value)}
                placeholder="Paste one GitHub repo URL per line"
                rows={6}
                style={{ borderRadius: '0.7rem', padding: '0.7rem', fontSize: '1rem', background: '#232136', color: '#fff', border: '1px solid #312e81' }}
                required
              />
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="submit" className="project-add-btn" disabled={bulkLoading}>{bulkLoading ? 'Adding...' : 'Add All'}</button>
              </div>
              {bulkError && <div className="project-add-error" style={{ color: '#f87171' }}>{bulkError}</div>}
            </form>
          </div>
        )}
        {activeTab === 'list' && (
          <>
            <h3 className="projects-title" style={{ fontSize: '1.3rem', margin: '2rem 0 1rem 0' }}>Your Projects</h3>
            <div className="projects-grid">
              {displayedProjects.map((project, idx) => (
                <motion.div key={idx} className="project-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  {project.avatar && <img src={project.avatar} alt="Owner avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', marginBottom: '0.7rem' }} />}
                  <img src={project.image} alt="Project cover" className="project-img" />
                  <h3 className="project-title" style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.7rem', marginBottom: '0.7rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#a78bfa', fontWeight: 600 }}>⭐ {project.stars}</span>
                    <span style={{ color: '#6366f1', fontWeight: 600 }}>🍴 {project.forks}</span>
                    <span style={{ color: '#e5e7eb', fontWeight: 500 }}>Last updated: {project.updated ? new Date(project.updated).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="project-links-navbar">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.live && <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live</a>}
                  </div>
                  <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
                    <button className="project-add-btn" style={{ background: '#a78bfa', padding: '0.4rem 1rem', fontSize: '0.95rem' }} onClick={() => handleEditProject(idx)}>Edit</button>
                    <button className="project-add-btn" style={{ background: '#f87171', padding: '0.4rem 1rem', fontSize: '0.95rem' }} onClick={() => handleDeleteProject(idx)}>Delete</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        {activeTab === 'log' && (
          <>
            <h3 className="projects-title" style={{ fontSize: '1.1rem', margin: '2rem 0 1rem 0' }}>Activity Log</h3>
            <div style={{ maxHeight: '180px', overflowY: 'auto', background: 'rgba(31,41,55,0.7)', borderRadius: '0.7rem', padding: '1rem', fontSize: '0.95rem', color: '#e5e7eb' }}>
              {log.length === 0 ? <span>No recent activity.</span> : log.map((entry, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <span style={{ color: entry.action === 'add' || entry.action === 'bulk-add' ? '#a78bfa' : '#f87171', fontWeight: 600 }}>{entry.action.toUpperCase()}</span> - {entry.project.title} at {entry.time}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default AdminDashboard;
