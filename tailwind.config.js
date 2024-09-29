module.exports = {
    content: ['./*.html'],  // Scans all HTML files in the root directory
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
      },
    },
    darkMode: 'class', // Enable dark mode
    plugins: [],
  }
  