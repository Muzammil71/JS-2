let arr2 = ["apple","banana","cherry","orange"];
let caparr = arr2.map(word=> {
    let firstlett = word.charAt(0).toUpperCase();
    let restlett = word.slice(1).toLowerCase();
    
    return firstlett + restlett;
});
document.getElementById("result").innerHTML=`The new array with Capitalized first word:  [ ${caparr} ]`;