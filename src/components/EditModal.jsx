import React, { useEffect, useRef } from 'react';
import { LazyMotion, domAnimation} from 'framer-motion';

const EditModal = ({ editFields, setEditFields, onSave, onCancel }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  useEffect(() => {
    if (modalRef.current) modalRef.current.focus();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-xl"
          tabIndex={-1}
          ref={modalRef}
          aria-modal="true"
          role="dialog"
        >
          <h4 className="text-indigo-400 font-bold mb-4">Edit Project</h4>
          <form className="flex flex-col gap-3" onSubmit={onSave}>
            <input className="project-add-input" type="text" value={editFields.title} onChange={e => setEditFields(f => ({ ...f, title: e.target.value }))} placeholder="Title" required />
            <textarea className="project-add-input" value={editFields.description} onChange={e => setEditFields(f => ({ ...f, description: e.target.value }))} placeholder="Description" required />
            <input className="project-add-input" type="text" value={editFields.github} onChange={e => setEditFields(f => ({ ...f, github: e.target.value }))} placeholder="GitHub URL" />
            <input className="project-add-input" type="text" value={editFields.live} onChange={e => setEditFields(f => ({ ...f, live: e.target.value }))} placeholder="Live URL" />
            <input className="project-add-input" type="text" value={editFields.image} onChange={e => setEditFields(f => ({ ...f, image: e.target.value }))} placeholder="Image URL" />
            <input className="project-add-input" type="text" value={editFields.avatar} onChange={e => setEditFields(f => ({ ...f, avatar: e.target.value }))} placeholder="Owner Avatar URL" />
            <div className="flex gap-2 mt-4">
              <button type="submit" className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
              <button type="button" className="project-add-btn bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
};

export default EditModal;
