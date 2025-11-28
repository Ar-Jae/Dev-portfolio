import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import GitHubImport from "../components/GitHubImport";

const dashboardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AdminDashboard = ({ projects, setProjects }) => {
    const handleProjectImported = (projectData) => {
        const newProject = {
            ...projectData,
            id: Date.now(),
            dateAdded: new Date().toISOString(),
        };
        
        setProjects(prev => [newProject, ...prev]);
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
                        Total Projects: {projects?.length || 0}
                    </span>
                </header>
                
                <GitHubImport onProjectImported={handleProjectImported} />
                
                <div className="mt-6 p-4 bg-gray-900/40 rounded-lg border border-gray-800">
                    <p className="text-gray-300 text-sm">
                        ℹ️ Imported projects will appear on the <a href="/projects" className="text-indigo-400 hover:underline font-semibold">Projects page</a>.
                    </p>
                </div>
            </motion.div>
        </LazyMotion>
    );
};

export default AdminDashboard;
