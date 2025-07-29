import React, { useState } from 'react';
import { motion } from 'framer-motion';


const AdminDashboard = ({ projects, setProjects }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);

  const parseRepo = url => {
    const match = url.match(/github.com\/(.+?)\/(.+?)(?:\.git)?$/);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
  };

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
        image: '/src/assets/cover.jpg',
        github: data.html_url,
        live: data.homepage || '',
      });
    } catch {
      setError('Could not fetch repo info.');
    }
  };

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
      setProjects([
        {
          title: data.name,
          description: data.description || 'No description provided.',
          image: '/src/assets/cover.jpg',
          github: data.html_url,
          live: data.homepage || '',
        },
        ...projects,
      ]);
      setRepoUrl('');
      setPreview(null);
    } catch {
      setError('Could not fetch repo info.');
    }
    setLoading(false);
  };

  return (
    <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="admin-card">
        <h2 className="admin-title">Admin Dashboard</h2>
        <form className="project-add-form" onSubmit={handleAddProject}>
          <input
            type="text"
            value={repoUrl}
            onChange={e => setRepoUrl(e.target.value)}
            placeholder="Paste GitHub repo URL..."
            className="project-add-input"
            required
          />
          <button type="button" className="project-add-btn" style={{ background: '#6366f1' }} onClick={handlePreview} disabled={loading || !repoUrl}>
            Preview
          </button>
          <button type="submit" className="project-add-btn" disabled={loading || !preview}>
            {loading ? 'Adding...' : 'Add Project'}
          </button>
        </form>
        {error && <motion.div className="project-add-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
        {preview && (
          <motion.div className="project-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ margin: '2rem auto', maxWidth: '400px' }}>
            <img src={preview.image} alt="Project cover" className="project-img" />
            <h3 className="project-title" style={{ marginBottom: '0.7rem' }}>{preview.title}</h3>
            <p className="project-desc">{preview.description}</p>
            <div className="project-links-navbar">
              <a href={preview.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              {preview.live && <a href={preview.live} className="project-link" target="_blank" rel="noopener noreferrer">Live</a>}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AdminDashboard;
