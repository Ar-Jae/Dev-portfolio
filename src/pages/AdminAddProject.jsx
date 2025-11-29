import React from 'react';
import { m as M } from 'framer-motion';

const AdminAddProject = ({
  repoUrl,
  setRepoUrl,
  handleImageUpload,
  handlePreview,
  loading,
  preview,
  handleAddProject,
  error
}) => (
  <div className="max-w-md mx-auto">
    <h3 className="text-indigo-500 font-bold mb-4 text-lg">Add Project</h3>
    <form onSubmit={handleAddProject} className="flex flex-col gap-4">
      <input
        type="text"
        value={repoUrl}
        onChange={e => setRepoUrl(e.target.value)}
        placeholder="GitHub repo URL"
        className="project-add-input"
        required
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button type="button" className="project-add-btn" onClick={handlePreview} disabled={loading}>
        Preview
      </button>
      {loading && (
        <M.div className="flex justify-center items-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <svg className="animate-spin h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        </M.div>
      )}
      {preview && (
        <M.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-800 p-4 rounded-xl mt-2">
          <h4 className="text-indigo-400 font-semibold">{preview.title}</h4>
          <p className="text-gray-300 text-sm">{preview.description}</p>
          <img src={preview.image} alt="Preview" className="max-w-full mt-2 rounded-xl" />
        </M.div>
      )}
      <button type="submit" className="project-add-btn" disabled={loading}>
        {loading ? 'Adding...' : 'Add Project'}
      </button>
      {error && <M.div className="project-add-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</M.div>}
    </form>
  </div>
);

export default AdminAddProject;
