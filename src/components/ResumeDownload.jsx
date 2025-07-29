import React from 'react';

const ResumeDownload = () => (
  <a
    href="/assets/resume.pdf"
    download
    className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
    aria-label="Download Resume PDF"
  >
    Download Resume
  </a>
);

export default ResumeDownload;
