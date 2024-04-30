let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Function to check access level based on the role
function checkAccess(role) {
    // Using if-else statements to determine access based on the role
    if (role === 'Employee') {
        // Employees have full access to Dietary Services
        console.log('You are authorized to have access to "Dietary Services".');
    } else if (role === 'Enrolled Member') {
        // Enrolled Members have full access plus additional privileges
        console.log('You are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.');
    } else if (role === 'Subscriber') {
        // Subscribers have partial access
        console.log('You are authorized to have partial access to "Dietary Services".');
    } else if (role === 'Non-Subscriber') {
        // Non-Subscribers are prompted to subscribe or enroll
        console.log('You need to enroll or at least subscribe first to avail this facility.');
    } else {
        // Handle invalid or undefined roles
        console.log('Invalid role specified.');
    }
}

// Test cases to demonstrate the function's behavior with different roles
checkAccess('Employee');          // Expected: Full access message for Employee
checkAccess('Enrolled Member');   // Expected: Full access with dietician interaction for Enrolled Member
checkAccess('Subscriber');        // Expected: Partial access message for Subscriber
checkAccess('Non-Subscriber');    // Expected: Message prompting to enroll or subscribe for Non-Subscriber
checkAccess('Other');             // Expected: Invalid role message for any other input

// This function helps determine what type of dietary services are available to a person based on their role within the organization.
// It is useful in scenarios where different levels of access to services are granted based on the user's status or membership type.


















