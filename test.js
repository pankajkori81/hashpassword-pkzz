
import { hashPassword  , verifyPassword } from "../hashpassword/hashpassword.js";


 const testPassword = async () => {
  const password = 'mySecretPassword';

  // Hash the password
  const hashedPassword = await hashPassword(password);
  console.log('Hashed Password:', hashedPassword);

  // Compare the password
  const isMatch = await verifyPassword(password, hashedPassword);
  console.log('Passwords match:', isMatch);
};

testPassword();




