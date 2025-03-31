// adding employees 
import { emp } from './mongoosedemo2.js'; // Import the emp model

import mongoose from 'mongoose';


// Wait for the database connection to be established before adding students
let dbReady = false;
mongoose.connection.once('open', () => {
  console.log('Database connection ready in employeedata.js');
  dbReady = true;
  addMoreEmployees();
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error in addEmployees.js:', err);
});

function addMoreEmployees() {
  if (!dbReady) {
    console.log('Database not ready yet in addEmployees.js, delaying...');
    setTimeout(addMoreEmployees, 100); // Try again after a short delay
    return;
  }

  // Add multiple students
  const employeesToAdd = [
    { name: "Lakshmi", id: 254 },
    { name: "Venkatesh", id: 255 },
    { name: "Priya", id: 256 },
    { name: "Arjun", id: 257 },
    // Add more employee objects here
  ];

  emp.insertMany(employeesToAdd)
    .then(savedEmployees => {
      console.log('Multiple employees saved successfully (from employeedata.js):', savedEmployees);
      mongoose.connection.close(); // Close the connection after adding data
    })
    .catch(err => {
      console.error('Error saving multiple employees (from from employeedata.js):', err);
      mongoose.connection.close(); // Close the connection even if there's an error
    });
}