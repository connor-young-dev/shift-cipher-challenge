class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
    encryptionMethod(string, type) {
      // Set string to uppercase.  
      string = string.toUpperCase();
      let arr = [];
  
      // Loop through each char in string.
      [...string].forEach(c => {
        // Get char code.
        c = c.charCodeAt();
  
        // Check if not a letter (char not between 90 and 65).
        // If not a letter then push unchanged.
        // Else is a letter and run code to change it.
        if (c > 90 || c < 65) {
          arr.push(c);
        } else {
          // If type of encryption is 'encrypt', add shift value.
          // Else if type of encryption is 'decrypt' take away shift value.
          // Else catch incorrect value error.
          if (type === 'encrypt') {
            c += this.shift;
          } else if (type === 'decrypt') {
            c -= this.shift;
          } else {
            throw Error('Incorrect encryption value');
          }
  
          // If changed value is above 90, then loop to start of alphabet by subtracting 26 and push new char to arr.
          // Else if value is less then 65, loop to end of alphabet by adding 26 and push new char to arr.
          // Else push changed value to arr.
          if (c > 90) {
            arr.push(c - 26);
          } else if (c < 65) {
            arr.push(c + 26);
          } else {
            arr.push(c);
          }
        }
      });
  
      // Convert array of Char Code's to new string.
      return String.fromCharCode(...arr);
    }
  
    encrypt(string) {
      // Get encryptedString using encryptionMethod and passing in string and 'decrypt' type.
      const encryptedString = this.encryptionMethod(string, 'encrypt');
  
      // Return encrypted string. (already uppercase).
      return encryptedString;
    }
  
  
    decrypt(string) {
      // Get decryptedString using encryptionMethod and passing in string and 'decrypt' type.
      const decryptedString = this.encryptionMethod(string, 'decrypt');
  
      // Return decrypted string in lowercase.
      return decryptedString.toLowerCase();
    }
  }
  
  // Test class.
  const cipher = new ShiftCipher(2);
  cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
  cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
  console.log(cipher.decrypt('K <3 OA RWRRA'));