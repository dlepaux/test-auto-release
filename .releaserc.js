module.exports = {
  branches: ['main'],  // The branch to monitor for releases
  plugins: [
    '@semantic-release/commit-analyzer',   // Analyzes commit messages to decide version bump
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/npm'  // Update the package.json file
    // Updates the changelog
    ["@semantic-release/changelog", {
      "changelogFile": "changelog.md"
    }],
    // Commits changes (version, changelog)
    ["@semantic-release/git", {
      "assets": ["changelog.md", "docs", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
  ],
};
