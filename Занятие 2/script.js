
var button = document.getElementById("check");

button.addEventListener("click", function(){
    var split, dictionary = [];
    var textarea = document.getElementById("sandbox"),
    text = textarea.value;
    //split = text.split("."); text = split.join(" ");
    //split = text.split(","); text = split.join(" ");
    //split = text.split('"'); text = split.join(" ");
    //split = text.split("-"); text = split.join(" ");
    //split = text.split("!"); text = split.join(" ");
    //split = text.split("?"); text = split.join(" ");
    //split = text.split(":"); text = split.join(" ");
    //split = text.split(";"); text = split.join(" ");
    //split = text.split("]"); text = split.join(" ");
    //split = text.split("["); text = split.join(" ");
    //split = text.split(")"); text = split.join(" ");
    //split = text.split("("); text = split.join(" ");
    //split = text.split("}"); text = split.join(" ");
    //split = text.split("{"); text = split.join(" ");
    //split = text.split("-"); text = split.join(" ");
    //split = text.split("—"); text = split.join(" ");
    //split = text.split("–"); text = split.join(" ");
    //split = text.split("_"); text = split.join(" ");
    //split = text.split("1"); text = split.join(" ");
    //split = text.split("2"); text = split.join(" ");
    //split = text.split("3"); text = split.join(" ");
    //split = text.split("4"); text = split.join(" ");
    //split = text.split("5"); text = split.join(" ");
    //split = text.split("6"); text = split.join(" ");
    //split = text.split("7"); text = split.join(" ");
    //split = text.split("8"); text = split.join(" ");
    //split = text.split("9"); text = split.join(" ");
    //split = text.split("0"); text = split.join(" ");
    //split = text.split("↵"); text = split.join(" ");
    //split = text.split("\n"); text = split.join(" ");
    //text = text.toLowerCase();
    //console.log(text);
    
    var tag = ['.', ',', '"','-' , '!', '&', ':', ';', '[', ']', '(', ')', '{', '}', '_', '—', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ,'\n', '↵', '?']
    var n=tag.length;
    for(var i=0; i<n; i++){
        split=text.split(tag[i]); text = split.join(" ");
    }
    text = text.toLowerCase();
    console.log(text);
    
    var words = text.split(" ");
    for(var i=0; i<words.length;++i){
        if(words[i].length>=4){
            addWord(dictionary,words[i]);
        }
    }
    console.log(dictionary);
    var max=0,slovo;
    for(var i=0; i<words.length;++i){
        if(dictionary[words[i]]>max){
            max=dictionary[words[i]];
            slovo = words[i];
        }
    }
    console.log(slovo);
})

function addWord(dictionary,word){
    if(!(word in dictionary)){
        dictionary[word] = 0;
    }
    dictionary[word]+=1;
}