**IMPORTANT**

This is a Script for HASHING passwords that require the older Version "$2a$", instead of the most recent $2b$ format with BCRYPT


**HOW TO RUN**

**Verify Your Environment**

1. Check TypeScript Installation:

- cmd: "tsc -v"

2. If not installed, run:
- cmd: "npm install -g typescript"

Ensure Node.js is Installed:

- cmd: "node -v"


-------------------------------------------------//-------------------------------------------


**INSTALL BCRYPT**

- Install bcrypt using npm. Run this command in your terminal:

- bash: "npm install bcrypt"


**Recompile the File**

- Run the TypeScript compiler again:

cmd: "npx tsc hash-passwords.ts"


**Run the Compiled JavaScript:**

- Execute the generated hash-passwords.js file with Node.js:

cmd: "node hash-passwords.js


**Notes**

- Feel free to insert the passwords you want to get the Hash for in the const:

// List of plain text passwords
const passwords = [
  "insert password here",
];