// [1,2,3,4]

// [r,e,f, ,]

// {[1,2,3]: false}

function hasDuplicate(arr){
    new Set(arr);
    if (Set.length = arr.length){
        return true;
    }
    else {
        return false;
    }
}

const hasDuplicate = (arr) => Array.from(new Set(arr)).length == arr.length ? false : true 

const vowels = "aeiou"
function vowelCount(str){
const map = new Map();
let lowerCase = str.toLowerCase();
for (let letter of lowerCase){
    if (vowels.includes(letter)){
        if(map.has(letter)){
            map.set(letter, map.get(letter)+1);
        }
        else{
            map.set(letter, 1);
        }
    }

}
return map;
}