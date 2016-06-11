/**
 * Created by christos on 11/6/2016.
 */
var rect = require('./rectangle-2');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
    + l + " and b = " + b);
    rect(l,b, function(error,rectangle) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("The area of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rectangle.perimeter());
        }
    });
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);