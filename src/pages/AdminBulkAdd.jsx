import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';

const AdminBulkAdd = ({
  bulkUrls,
  setBulkUrls,
  handleBulkPreview,
  bulkPreviewLoading,
  bulkPreviewError,
  bulkPreview,
  handleBulkAdd,
  bulkLoading,
  bulkError
}) => (
  <div style={{ maxWidth: '420px', margin: '0 auto' }}>
    <h3 style={{ color: '#6366f1', fontWeight: 700, marginBottom: '1rem' }}>Bulk Add Projects</h3>
    <div className="flex flex-col gap-4">
      <textarea
        className="project-add-input min-h-[120px]"
        value={bulkUrls}
        onChange={e => setBulkUrls(e.target.value)}
        placeholder="Paste GitHub repo URLs, one per line"
      />
      <button
        className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleBulkPreview}
        disabled={bulkPreviewLoading}
      >{bulkPreviewLoading ? 'Previewing...' : 'Preview Projects'}</button>
      {bulkPreviewError && <div className="project-add-error">{bulkPreviewError}</div>}
      {bulkPreview.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
          <h4 className="text-indigo-400 font-bold mb-2">Preview</h4>
          <ul className="space-y-3">
            {bulkPreview.map((p, idx) => (
              <motion.li
                key={p.github || p.url || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className={`bg-gray-800 rounded-lg p-4 flex flex-col gap-1 shadow ${p.error ? 'border border-red-500' : ''}`}
              >
                {p.error ? (
                  <div className="text-red-400 text-sm">{p.url}: {p.error}</div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <img src={p.avatar} alt={p.owner ? `${p.owner} avatar` : "Owner avatar"} className="w-8 h-8 rounded-full border border-gray-700" />
                      <span className="font-semibold text-indigo-300">{p.title}</span>
                      <span className="text-xs text-gray-400">{p.owner}</span>
                    </div>
                    <div className="text-gray-300 text-xs mb-1">{p.description}</div>
                    <div className="flex gap-2 text-xs text-gray-400">
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">GitHub</a>}
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Live</a>}
                    </div>
                  </>
                )}
              </motion.li>
            ))}
          </ul>
          <button
            className="project-add-btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4"
            onClick={handleBulkAdd}
            disabled={bulkLoading}
          >{bulkLoading ? 'Adding...' : 'Add All Valid Projects'}</button>
          {bulkError && <div className="project-add-error mt-2">{bulkError}</div>}
        </motion.div>
      )}
    </div>
  </div>
);

export default AdminBulkAdd;
