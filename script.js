// complete the given function

function palindrome(str){
	const len=str.length;
	for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== string[len - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}
const str = prompt("");
const value = palindrome(str);

module.exports = palindrome
