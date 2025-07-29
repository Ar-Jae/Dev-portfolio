import React from 'react';

const AdminSettings = ({
  newPass,
  setNewPass,
  passMsg,
  setPassMsg,
  darkMode,
  setDarkMode,
  handleExportProjects,
  handleImportProjects
}) => (
  <div className="max-w-md mx-auto">
    <h3 className="text-indigo-500 font-bold mb-4">Settings</h3>
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-purple-400 font-medium block mb-1">Change Admin Password</label>
        <input
          type="password"
          value={newPass}
          onChange={e => setNewPass(e.target.value)}
          placeholder="New password"
          className="project-add-input mb-2"
        />
        <button className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded" onClick={() => setPassMsg('Password changed! (demo only)')}>Change</button>
        {passMsg && <div className="project-add-error mt-2">{passMsg}</div>}
      </div>
      <div className="flex items-center gap-2">
        <label className="text-purple-400 font-medium">Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={e => setDarkMode(e.target.checked)}
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
      </div>
      <div>
        <label className="text-purple-400 font-medium block mb-1">Export Projects</label>
        <button className="project-add-btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={handleExportProjects}>Export</button>
      </div>
      <div>
        <label className="text-purple-400 font-medium block mb-1">Import Projects</label>
        <input type="file" accept="application/json" onChange={handleImportProjects} className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
      </div>
    </div>
  </div>
);

export default AdminSettings;
