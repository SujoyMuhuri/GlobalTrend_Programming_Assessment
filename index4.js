// Write a function that checks if two given strings are anagrams of each other.

function areAnagrams(str1, str2) {
    function normalizeAndSort(str) {
        return str
            .replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }

    const normalizedStr1 = normalizeAndSort(str1);
    const normalizedStr2 = normalizeAndSort(str2);

    return normalizedStr1 === normalizedStr2;
}

// Example :
console.log(areAnagrams("Listen", "Silent")); 
console.log(areAnagrams("Hello", "World"));   