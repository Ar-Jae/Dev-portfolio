import React, { useState } from 'react';
import { LazyMotion, domAnimation, m} from 'framer-motion';

const GitHubImport = ({ onProjectImported }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);

  const parseGitHubUrl = (url) => {
    // Handle SSH format: git@github.com:owner/repo.git
    const sshMatch = url.match(/git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/);
    if (sshMatch) {
      return { owner: sshMatch[1], repo: sshMatch[2] };
    }

    // Handle HTTPS format: https://github.com/owner/repo
    const httpsMatch = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?$/);
    if (httpsMatch) {
      return { owner: httpsMatch[1], repo: httpsMatch[2] };
    }

    // Handle owner/repo format
    const simpleMatch = url.match(/^([^/]+)\/([^/]+)$/);
    if (simpleMatch) {
      return { owner: simpleMatch[1], repo: simpleMatch[2] };
    }

    return null;
  };

  const fetchGitHubRepo = async (owner, repo) => {
    const headers = {
      Accept: 'application/vnd.github.v3+json',
    };

    if (githubToken) {
      headers.Authorization = `token ${githubToken}`;
    }

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Repository "${owner}/${repo}" not found. It may be private or the URL is incorrect.`);
      } else if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Try adding a Personal Access Token.');
      } else {
        throw new Error(`GitHub API error: ${response.status}`);
      }
    }

    const data = await response.json();

    return {
      title: data.name,
      description: data.description || 'No description provided',
      github: data.html_url,
      live: data.homepage || '',
      image: data.owner?.avatar_url || '/src/assets/cover.jpg',
      avatar: data.owner?.avatar_url || '',
      tech: data.topics || [],
      stars: data.stargazers_count || 0,
      language: data.language || 'Unknown',
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  };

  const handleImport = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const parsed = parseGitHubUrl(repoUrl.trim());
      if (!parsed) {
        throw new Error(
          'Invalid GitHub URL format. Use: git@github.com:owner/repo.git, https://github.com/owner/repo, or owner/repo'
        );
      }

      const projectData = await fetchGitHubRepo(parsed.owner, parsed.repo);

      if (onProjectImported) {
        onProjectImported(projectData);
      }

      setSuccess(`✅ Successfully imported "${projectData.title}"!`);
      setRepoUrl('');

      setTimeout(() => setSuccess(''), 4000);
    } catch (err) {
      setError(err.message || 'Something went wrong while importing the repo.');
    } finally {
      setLoading(false);
    }
  };

  const handleManualEntry = () => {
    const parsed = parseGitHubUrl(repoUrl.trim());
    if (!parsed) {
      setError('Invalid GitHub URL format');
      return;
    }

    setError('');
    setSuccess('');

    const manualProject = {
      title: parsed.repo,
      description: 'Manually added project',
      github: `https://github.com/${parsed.owner}/${parsed.repo}`,
      live: '',
      image: '/src/assets/cover.jpg',
      avatar: '',
      tech: [],
      stars: 0,
      language: 'Unknown',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (onProjectImported) {
      onProjectImported(manualProject);
    }

    setSuccess(`✅ Manually added "${manualProject.title}"!`);
    setRepoUrl('');
    setTimeout(() => setSuccess(''), 4000);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-xl p-6 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-indigo-400">
            🚀 Import from GitHub
          </h3>
          <button
            type="button"
            onClick={() => setShowTokenInput(!showTokenInput)}
            className="text-xs text-gray-400 hover:text-indigo-400 transition-colors"
          >
            {showTokenInput ? '🔒 Hide Token' : '🔑 Add Token'}
          </button>
        </div>

        {showTokenInput && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-4"
          >
            <label
              htmlFor="github-token"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              GitHub Personal Access Token (Optional)
            </label>
            <input
              id="github-token"
              type="password"
              value={githubToken}
              onChange={(e) => setGithubToken(e.target.value)}
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              className="project-add-input w-full text-sm"
              disabled={loading}
            />
            <p className="text-xs text-gray-400 mt-1">
              Required for private repos or to avoid rate limits.{' '}
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Generate token
              </a>
            </p>
          </m.div>
        )}

        <form onSubmit={handleImport} className="space-y-4">
          <div>
            <label
              htmlFor="github-url"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              GitHub Repository URL
            </label>
            <input
              id="github-url"
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="git@github.com:Ar-Jae/Dev-portfolio.git"
              className="project-add-input w-full"
              disabled={loading}
            />
            <p className="text-xs text-gray-400 mt-1">
              Supports:{' '}
              <code className="text-indigo-300">git@github.com:owner/repo.git</code>,{' '}
              <code className="text-indigo-300">https://github.com/owner/repo</code>, or{' '}
              <code className="text-indigo-300">owner/repo</code>
            </p>
          </div>

          {error && (
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg text-sm"
            >
              <p className="font-semibold">❌ {error}</p>
              <button
                type="button"
                onClick={handleManualEntry}
                className="mt-2 text-xs underline hover:text-red-100"
              >
                Add manually instead
              </button>
            </m.div>
          )}

          {success && (
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/50 border border-green-600 text-green-200 px-4 py-3 rounded-lg"
            >
              {success}
            </m.div>
          )}

          <div className="flex gap-2 flex-wrap">
            <button
              type="submit"
              disabled={loading || !repoUrl.trim()}
              className="project-add-btn bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-initial"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Fetching...
                </span>
              ) : (
                '🔍 Fetch & Import'
              )}
            </button>
            <button
              type="button"
              onClick={handleManualEntry}
              disabled={loading || !repoUrl.trim()}
              className="project-add-btn bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ➕ Add Manually
            </button>
          </div>
        </form>
      </m.div>
    </LazyMotion>
  );
};

export default GitHubImport;
