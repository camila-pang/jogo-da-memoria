(function(){
    var images = [];

    for(var i = 0; i < 16; i++){
        var img = {
            src: "img/" + i + ".jpg", 
            id: i%8
        }

        images.push(img);
    }
    startGame();

    function startGame(){

        images = randomSort(images);
        var frontFaces = document.getElementsByClassName("front");

        for(var i = 0; i < 16; i++){
            var card = document.querySelector("#card" + i);
            card.style.left = (i % 8 === 0) ? 5 + "px" : (i % 8) * 165 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener("click", flipCard, false);

            frontFaces[i].style.background = "url('"+images[i].src+"')";
			frontFaces[i].setAttribute("id",images[i].id);
        }
    }

    function randomSort(oldArray){
        var newArray = [];

        while(newArray.length !== oldArray.length){
            var i = Math.floor(Math.random() *16);

            if(newArray.indexOf(oldArray[i]) < 0)
            {
                newArray.push(oldArray[i]);
            }
            
        }

        return newArray;
    }

    function flipCard(){
        var faces = this.getElementsByClassName("face");

        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");
    }
}());