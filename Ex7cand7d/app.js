import connectDB from "./db.js";
import User from "./userModel.js";

await connectDB(); // Ensure database is connected

const createUser = async () => {
    try {
        const user = new User({
            name: "pavan",
            email: "pavankumar@example.com",
            age: 40
        });

        const result = await user.save();
        console.log("User saved:", result);
    } catch (err) {
        console.error("Error saving user:", err.message);
    }
};

createUser();
