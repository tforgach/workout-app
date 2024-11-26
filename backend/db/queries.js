const db = require('./database');

// Add a new user
const addUser = (username, email) => {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO Users (username, email) VALUES (?, ?)`,
            [username, email],
            function (err) {
                if (err) reject(err);
                else resolve({ userId: this.lastID });
            }
        );
    });
};

// Get all users
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM Users`, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

// Export the functions
module.exports = { addUser, getAllUsers };
