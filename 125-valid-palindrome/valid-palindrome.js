/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const convertedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const palindrome = convertedString.split('').reverse('').join('');
    return convertedString === palindrome
};