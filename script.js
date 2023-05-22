function palindrome(str) {
    // Convert the input string to lowercase
    str = str.toLowerCase();

    // Remove any non-alphanumeric characters from the string
    str = str.replace(/[^a-z0-9]/g, '');

    const len = str.length;
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;