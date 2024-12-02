# hashpassword-pkzz

# Installation
You can install hashpassword via npm:

npm install hashpassword

# Importing the Library
const { hashPassword, verifyPassword } = require('hashpassword');

# Hashing a Password & testing

 const testPassword = async () => {
  const password = 'mySecretPassword';

  // Hash the password
  const hashedPassword = await hashPassword(password);
  console.log('Hashed Password:', hashedPassword);

#  Compare the password
  // Compare the password
  const isMatch = await verifyPassword(password, hashedPassword);
  console.log('Passwords match:', isMatch);
};

testPassword();






