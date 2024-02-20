var theTwoPI = (Math.PI);

var theContext = document.getElementById('canvas').getContext('2d');


var theWidth = (1000);
var theHeight = (700);


var theRadius = (300);
var theDots = (100);

var theAngle = theTwoPI / theDots;
var theCoef = 2;


theContext.strokeStyle = 'rgb(255, 0, 0)'

var typeCoord = (
    (theDotNum) => {
        var theX = Math.cos( theAngle * theDotNum) * theRadius
        var theY = Math.sin( theAngle * theDotNum) * theRadius
        return (theX, theY);
    }
)

theContext.translate(300, 300);

theContext.beginPath();
theContext.arc(0, 0, 300, 0, theTwoPI);
theContext.stroke();




var doFrame = (
    () => {
        theContext.clearRect(-300, 300, theWidth, theHeight);
        theContext.beginPath();

        for (var theI = 0; theI < theDots; theI++ ){

            var theDotX = theI;
            var theDotY = theDotX * theCoef;

            var {theX: startX, theY: startY } = typeCoord( theDotX );
            var {theX: endX, theY: endY } = typeCoord( theDotY );

            theContext.moveTo( startX, startY );
            theContext.lineTo( endX, endY);
        }

        theContext.stroke();
        theCoef += 0.1;
        requestAnimationFrame( doFrame );


    }

);
doFrame();