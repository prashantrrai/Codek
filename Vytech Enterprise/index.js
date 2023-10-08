function showMessage() {
    let paragraph = document.getElementById('para').value
    // console.log(paragraph)

    const result = findLongestAndShortestWords(paragraph);
    // console.log(result)
    const rev_result = reverseWords(result)

    console.log("Longest Word:", result.longest, "Longest Reverse:", rev_result.reverseL1 );
    console.log("Shortest Word:", result.shortest, "Shortest Reverse:", rev_result.reverseS1 );

    document.getElementById('longestWord').textContent = result.longest;
    document.getElementById('reversedLongestWord').textContent = rev_result.reverseL1;

    document.getElementById('shortestWord').textContent = result.shortest;
    document.getElementById('reversedShortestWord').textContent = rev_result.reverseS1;
}

function findLongestAndShortestWords(paragraph) {
    const words = paragraph.split(' ');

    let longestWord = '';
    let shortestWord = '';

    for (const word of words){
        const cleanedWord  = word.replace(/[.,!?\s]/g, '');
        // console.log(cleanedWord, cleanedWord.length)
        if(cleanedWord.length > longestWord.length){
            longestWord = cleanedWord;
        }

        if(shortestWord === '' || cleanedWord.length < shortestWord.length){
            shortestWord = cleanedWord;
        }
    }
    
    return { longest: longestWord, shortest: shortestWord };
}

function reverseWords(result){
    const longestReverse = result.longest.split('').reverse().join('')
    const shortestReverse = result.shortest.split('').reverse().join('')
    return { reverseL1: longestReverse, reverseS1: shortestReverse}
}




document.addEventListener('DOMContentLoaded', function() {

    var myButton = document.getElementById('submitBtn');
    myButton.addEventListener('click', function(event) {
        event.preventDefault();
        showMessage();
    }); 
});

