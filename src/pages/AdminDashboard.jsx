import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = ({ projects, setProjects }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const parseRepo = url => {
    const match = url.match(/github.com\/(.+?)\/(.+?)(?:\.git)?$/);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
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
          <button type="submit" className="project-add-btn" disabled={loading}>{loading ? 'Adding...' : 'Add Project'}</button>
        </form>
        {error && <div className="project-add-error">{error}</div>}
      </div>
    </motion.section>
  );
};

export default AdminDashboard;
