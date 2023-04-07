var CharacterArrray = [
    
    "A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h",
    "I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p",
    "Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x",
    "Y","y","Z","z",  
    "0","1","2","3","4","5","6","7","8","9",
    "?",",","@","!","#","%","*",";","&","á","ü","æ","ø","®","¶","¼","€"

]

var x = document.getElementById("text-zone");
var i = 0;
var j = 0;
var k = 0;
var minus = false;
var textWeightArray = [100,900];
var textItalicArray = [10,-6];

function changeText(){
    if (i < CharacterArrray.length){
        x.innerHTML = CharacterArrray[i];
        i++;
    }else{
        x.innerHTML = CharacterArrray[0];
        i = 0;
    }

    j++;k++;
    if(j == textWeightArray.length) j=0;
    if(k == textItalicArray.length) k=0;

    x.style.fontVariationSettings = "\"wght\" " + textWeightArray[j] + ", \"ital\" " + textItalicArray[k];
}

setInterval(changeText, 1600);
