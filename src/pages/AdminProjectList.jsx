import React from 'react';
import { motion } from 'framer-motion';

const AdminProjectList = ({
  projects,
  filterText,
  setFilterText,
  filterTech,
  setFilterTech,
  sortBy,
  setSortBy,
  setPreviewProject,
  setShowPreviewModal,
  setEditIdx,
  setEditFields,
  setShowEditModal,
  setDeleteIdx,
  setShowDeleteModal
}) => {
  let filtered = projects.filter(p =>
    (!filterText || p.title.toLowerCase().includes(filterText.toLowerCase())) &&
    (!filterTech || (p.description && p.description.toLowerCase().includes(filterTech.toLowerCase())))
  );
  if (sortBy === 'stars') filtered = [...filtered].sort((a, b) => (b.stars || 0) - (a.stars || 0));
  else filtered = [...filtered].sort((a, b) => new Date(b.updated) - new Date(a.updated));

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-indigo-400 font-bold mb-4 text-lg">Project List</h3>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="bg-gray-900 rounded-lg px-4 py-2 text-indigo-300 font-semibold shadow text-center">
          Total: <span className="text-white">{projects.length}</span>
        </div>
        <div className="bg-gray-900 rounded-lg px-4 py-2 text-green-300 font-semibold shadow text-center">
          Stars: <span className="text-white">{projects.reduce((sum, p) => sum + (p.stars || 0), 0)}</span>
        </div>
        <div className="bg-gray-900 rounded-lg px-4 py-2 text-yellow-300 font-semibold shadow text-center">
          Forks: <span className="text-white">{projects.reduce((sum, p) => sum + (p.forks || 0), 0)}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mb-6 items-center justify-between">
        <input
          className="project-add-input w-full md:w-1/3"
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Search by title..."
        />
        <input
          className="project-add-input w-full md:w-1/3"
          type="text"
          value={filterTech}
          onChange={e => setFilterTech(e.target.value)}
          placeholder="Filter by tech..."
        />
        <select
          className="project-add-input w-full md:w-1/4"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="stars">Sort by Stars</option>
        </select>
      </div>
      {filtered.length === 0 ? (
        <div className="text-gray-400">No projects found.</div>
      ) : (
        <ul className="space-y-4">
          {filtered.map((project, idx) => (
            <motion.li
              key={project.github || idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4 shadow"
            >
              <img
                src={project.image || '/src/assets/cover.jpg'}
                alt={project.title ? `${project.title} screenshot` : "Project screenshot"}
                className="w-20 h-20 object-cover rounded-lg border border-gray-700 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => { setPreviewProject(project); setShowPreviewModal(true); }}
                title="Quick Preview"
              />
              <div className="flex-1">
                <h4 className="text-indigo-300 font-semibold text-base">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                <div className="flex gap-2 text-xs text-gray-400">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">GitHub</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Live</a>}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:ml-4">
                <button
                  className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setEditIdx(projects.indexOf(project));
                    setEditFields({
                      title: project.title,
                      description: project.description,
                      github: project.github,
                      live: project.live,
                      image: project.image,
                      avatar: project.avatar
                    });
                    setShowEditModal(true);
                  }}
                  aria-label={`Edit ${project.title}`}
                  tabIndex={0}
                >Edit</button>
                <button
                  className="project-add-btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setDeleteIdx(projects.indexOf(project));
                    setShowDeleteModal(true);
                  }}
                  aria-label={`Delete ${project.title}`}
                  tabIndex={0}
                >Delete</button>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminProjectList;
