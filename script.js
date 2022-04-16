//var Flag = document.getElementById("LoadingBackground");
const Yellow = document.getElementById("YellowBox");
const White = document.getElementById("WhiteBox");
const Purple = document.getElementById("PurpleBox");
const Black = document.getElementById("BlackBox");

// Code for Chrome, Safari and Opera
Yellow.addEventListener("webkitAnimationEnd", myEndFunction);
White.addEventListener("webkitAnimationEnd", myEndFunction);
Purple.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
Yellow.addEventListener("animationend", myEndFunction);
White.addEventListener("webkitAnimationEnd", myEndFunction);
Purple.addEventListener("webkitAnimationEnd", myEndFunction);

let StripeCounter = 0;

function myEndFunction() {
    this.style.left = "0";
    StripeCounter++;
    if (StripeCounter === 4)
    {
        Yellow.remove();
        White.remove();
        Purple.remove();
        Black.remove();
        document.body.style.overflow = "visible";
    }
}
