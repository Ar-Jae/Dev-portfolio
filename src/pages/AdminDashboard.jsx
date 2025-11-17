import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

import AdminProjectList from "./AdminProjectList";
import AdminLog from "./AdminLog";
import AdminSettings from "./AdminSettings";
import GitHubImport from "../components/GitHubImport";

const dashboardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = React.useState('projects');
    const [projects, setProjects] = React.useState([]);
    const [log, setLog] = React.useState([]);

    const handleProjectImported = (projectData) => {
        const newProject = {
            ...projectData,
            id: Date.now(),
            dateAdded: new Date().toISOString(),
        };
        
        setProjects(prev => [newProject, ...prev]);
        
        // Add to log
        const logEntry = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            action: 'Project Imported',
            details: `Imported ${projectData.title} from GitHub`,
        };
        setLog(prev => [logEntry, ...prev]);
    };

    return (
        <LazyMotion features={domAnimation}>
            <motion.div
                className="homepage-bg admin-card"
                initial="hidden"
                animate="visible"
                variants={dashboardVariants}
            >
                <header className="mb-8 flex flex-col md:flex-row items-center justify-between w-full">
                    <h1 className="admin-title">Admin Dashboard</h1>
                    <span className="mt-2 md:mt-0 text-sm text-indigo-300">
                        Welcome, Admin!
                    </span>
                </header>

                {/* Navigation Tabs */}
                <nav className="flex gap-2 md:gap-4 mb-8 justify-center flex-wrap">
                    {['projects', 'log', 'settings'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`project-add-btn px-4 py-2 rounded-lg font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 shadow-sm
                                ${activeTab === tab ? 'bg-indigo-600 text-white scale-105' : 'bg-gray-900 text-indigo-300 hover:bg-indigo-700 hover:text-white'}
                            `}
                            aria-current={activeTab === tab ? 'page' : undefined}
                            tabIndex={0}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </nav>

                {/* Tab Content */}
                <div className="mt-10">
                    {activeTab === 'projects' && (
                        <>
                            <GitHubImport onProjectImported={handleProjectImported} />
                            <AdminProjectList
                                projects={projects}
                                filterText={""}
                                setFilterText={() => {}}
                                filterTech={""}
                                setFilterTech={() => {}}
                                sortBy={"date"}
                                setSortBy={() => {}}
                                setPreviewProject={() => {}}
                                setShowPreviewModal={() => {}}
                                setEditIdx={() => {}}
                                setEditFields={() => {}}
                                setShowEditModal={() => {}}
                                setDeleteIdx={() => {}}
                                setShowDeleteModal={() => {}}
                            />
                        </>
                    )}
                    {activeTab === 'log' && (
                        <AdminLog log={log} />
                    )}
                    {activeTab === 'settings' && (
                        <AdminSettings
                            newPass={""}
                            setNewPass={() => {}}
                            passMsg={""}
                            setPassMsg={() => {}}
                            darkMode={false}
                            setDarkMode={() => {}}
                            handleExportProjects={() => {}}
                            handleImportProjects={() => {}}
                        />
                    )}
                </div>
            </motion.div>
        </LazyMotion>
    );
};

export default AdminDashboard;
