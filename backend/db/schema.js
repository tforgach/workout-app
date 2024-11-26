const db = require('./database');

// Function to initialize the schema
const initializeSchema = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS Users (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Workouts (
                workout_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                workout_date DATE NOT NULL,
                duration INTEGER,
                FOREIGN KEY (user_id) REFERENCES Users(user_id)
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Exercises (
                exercise_id INTEGER PRIMARY KEY AUTOINCREMENT,
                workout_id INTEGER,
                exercise_name TEXT NOT NULL,
                sets INTEGER,
                reps INTEGER,
                rir INTEGER
                FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id)
            )
        `);

        console.log('Database schema initialized.');
    });
};

// Export schema initialization
module.exports = initializeSchema;
