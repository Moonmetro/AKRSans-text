var CharacterArrray = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9",
"?",",","@","!","#","%","*",";","&"
]

var x = document.getElementById("text-zone");
var i = 0;
var j = 0;
var k = 0;
var minus = false;
var textWeightArray = [100,900];
var textItalicArray = [0,10,-6];

function changeText(){
    if (i < CharacterArrray.length){
        x.innerHTML = CharacterArrray[i];
        i++;
    }else{
        x.innerHTML = CharacterArrray[0];
        i = 0;
    }

    j++;
    if(j == textWeightArray.length) j=0;

    if (k == 2) minus = true;
    if (k == 0) minus = false;
    k = minus ? --k : ++k;

    x.style.fontVariationSettings = "\"wght\" " + textWeightArray[j] + ", \"ital\" " + textItalicArray[k];
}

setInterval(changeText, 1600);
