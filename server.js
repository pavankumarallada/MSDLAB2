import express from 'express';
import packageRoutes from './route1.js';

const app = express();
const PORT = 3000;

// Middleware to use the package routes
app.use('/api', packageRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
