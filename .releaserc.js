module.exports = {
  branches: ['main'],  // The branch to monitor for releases
  plugins: [
    '@semantic-release/commit-analyzer',   // Analyzes commit messages to decide version bump
    '@semantic-release/release-notes-generator', // Generates release notes
    // Updates the changelog
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "changelog.md"
      }
    ],
    '@semantic-release/npm'  // Update the package.json file
    // Commits changes (version, changelog)
    [ 
      "@semantic-release/git",
      {
        "assets": ["changelog.md"]
      }
    ],
  ],
};
