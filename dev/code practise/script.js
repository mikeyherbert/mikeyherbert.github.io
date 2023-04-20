var imageList = ['"./assets/images/hero.png"', '"./assets/images/hero2.jpg"'];

var selectedHeroImage = 0;

function heroBack(){
    if (selectedHeroImage == 0) {
        console.log('url('+(imageList[imageList.length-1])+')');
        document.getElementById("hero").style.backgroundImage = "url("+(imageList[imageList.length-1])+")";
        selectedHeroImage = imageList.length - 1;
        console.log(selectedHeroImage);
    }
    else {
        document.getElementById("hero").style.backgroundImage = "url("+(imageList[selectedHeroImage-1])+")";
        selectedHeroImage -= 1;
        console.log(selectedHeroImage);
    }
};

function heroForward(){
    if (selectedHeroImage == imageList.length-1) {
        console.log('url('+(imageList[0])+')');
        document.getElementById("hero").style.backgroundImage = "url("+(imageList[0])+")";
        selectedHeroImage = 0;
        console.log(selectedHeroImage);
    }
    else {
        document.getElementById("hero").style.backgroundImage = "url("+(imageList[selectedHeroImage+1])+")";
        selectedHeroImage += 1;
        console.log(selectedHeroImage);
    }
};