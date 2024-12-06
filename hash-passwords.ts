import * as bcrypt from 'bcrypt';

// List of plain text passwords
const passwords = [
  "password1",
  "password2",
  "password3",
  "password4",
  "password5",
  "password6",
  "password7",
  "password8",
  "12345678",
];

// Function to hash passwords with enforced $2a$ prefix
const hashPasswords = async (passwords: string[]) => {
  const hashedPasswords: string[] = [];
  const saltRounds = 10; // Cost factor

  for (const password of passwords) {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);
    // Replace $2b$ with $2a$ in the salt
    const saltWith2a = salt.replace("$2b$", "$2a$");
    // Hash the password with the modified salt
    const hashedPassword = await bcrypt.hash(password, saltWith2a);
    hashedPasswords.push(hashedPassword);
  }

  return hashedPasswords;
};

// Main execution
(async () => {
  const hashedPasswords = await hashPasswords(passwords);

  hashedPasswords.forEach((hash, index) => {
    console.log(`User ${index + 1}: ${hash}`);
  });
})();