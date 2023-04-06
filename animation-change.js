var CharacterArrray = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9"
]

var x = document.getElementById("text-zone");
var i = 0;

setInterval(
    function(){
        if (i < CharacterArrray.length){
            x.innerHTML = CharacterArrray[i];
            i++;
        }else{
            x.innerHTML = CharacterArrray[0];
            i = 0;
        }
        
    },1500
)