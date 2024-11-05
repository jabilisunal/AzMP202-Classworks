// // Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun.
// // 2. Daxil edilən cümlədə ən uzun sözü tapın.


// let longestWordFinder = (sentence) =>{
//     let word = sentence.split(' ')
//     let longest = ''
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longest.length) {
//             longest=word[i]
//         }
        
//     }
//     return longest
// }

// console.log(longestWordFinder("Hello my name is Nihaad"));

// function checkanograma(word1,word2) {
    
//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();

//     sortedword1 = word1.split("").sort().join();
//     sortedword2 = word2.split("").sort().join();

//     if (sortedword1 === sortedword2) {
//         return "duzdur";
//     }
//     else{
//         return "sehvdir";
//     }
// }

// console.log(checkanograma("salam","malas"));
// console.log(checkanograma("salam","malasn"));


// let array = [12,56,96,47,65,15,20,5,101];

// let sorted= array.sort((a,b)=>b-a);
// console.log(sorted);
