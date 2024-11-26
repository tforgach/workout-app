const sqlite3 = require('sqlite3').verbose();

// Create or open the database
const db = new sqlite3.Database('workout_app.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Export the database for use in other files
module.exports = db;
