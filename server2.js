import express from 'express';

const app = express();
const PORT = 3000;
let notes = []; // Temporary storage for notes

// 🛠️ Built-in Middleware: Parse JSON Requests
app.use(express.json());

// 📝 Logging Middleware: Logs each request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Move to the next middleware
});

// ✅ Validation Middleware: Ensure POST request has title & content
const validateNote = (req, res, next) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        const error = new Error("Title and Content are required fields.");
        error.status = 400;
        return next(error); // Pass to error handler
    }
    
    next(); // Move to the next handler
};

// 📌 POST /api/notes - Add a new note
app.post('/api/notes', validateNote, (req, res) => {
    const { title, content } = req.body;
    const newNote = { id: notes.length + 1, title, content };
    notes.push(newNote);

    res.status(201).json({
        message: "Note added successfully",
        note: newNote
    });
});

// 📌 GET /api/notes - Retrieve all notes
app.get('/api/notes', (req, res) => {
    res.status(200).json({ notes });
});

// ❌ Error-Handling Middleware: Customized error responses
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({
        status: "fail",
        message: err.message || "Internal Server Error"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
