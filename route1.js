import express from 'express';

const router = express.Router();

// Route for "/packages"
router.get('/packages', (req, res) => {
    try {
        res.status(200).json({
            message: "You can now get the requested packages for your request"
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message || "An error occurred while fetching packages"
        });
    }
});

// Route for "/bookpackage"
router.post('/bookpackage', (req, res) => {
    try {
        res.status(201).json({
            message: "New booking added for the POST request"
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message || "An error occurred while fetching packages"
        });
    }
});

export default router;

