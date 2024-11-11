module.exports = {
  branches: ['main'],  // The branch to monitor for releases
  plugins: [
    '@semantic-release/commit-analyzer',   // Analyzes commit messages to decide version bump
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Updates the changelog
    '@semantic-release/git', // Commits changes (version, changelog)
  ],
};
