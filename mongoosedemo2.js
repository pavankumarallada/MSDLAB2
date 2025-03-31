
import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/employeeDb';

let emp; // Define emp outside the connect block so it can be exported

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB (from mongoosedemo2.js)');

    // Define the studentsSchema with validators and defaults
    const employeesSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, 'Name is required'], // Required validator
        trim: true, // Trim whitespace from the beginning and end
        minlength: [2, 'Name must be at least 2 characters'], // Minimum length validator
        maxlength: [50, 'Name cannot exceed 50 characters']  // Maximum length validator
      },
      id: {
        type: Number,
        required: [true, 'ID is required'],
        unique: true, // Ensure ID numbers are unique
        min: [1, 'ID number cannot be less than 1'], // Minimum value validator
        max: [1000, 'ID number cannot exceed 1000'] // Maximum value validator
      },
      age: {
        type: Number,
        default: 18, // Default value for age
        min: [15, 'Age must be at least 15'],
        max: [30, 'Age cannot exceed 30']
      },
      grade: {
        type: String,
        enum: { // Enum validator for allowed grades
          values: ['A', 'B', 'C', 'D', 'F'],
          message: '{VALUE} is not a valid grade'
        },
        default: 'C'
      },
      isEnrolled: {
        type: Boolean,
        default: true // Default value for enrollment status
      },
      enrollmentDate: {
        type: Date,
        default: Date.now // Default value to the current date and time
      }
      // You can add more fields here
    });

    // Create the Mongoose model
    emp = mongoose.model("employee", employeesSchema);
  })
  .catch(err => {
    console.error('Error connecting to MongoDB (from mongoosedemo2.js):', err);
  });

export { emp};