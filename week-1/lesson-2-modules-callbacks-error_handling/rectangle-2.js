/**
 * Created by christos on 11/6/2016.
 */
module.exports = function(x,y,callback) {
    try {
        if (x < 0 || y < 0) {
            throw new Error("Rectangle dimensions should be greater than zero: l = "
            + x + ", and b = " + y);
        }
        else
            // the first parameter in the callback is the error message
            callback(null, {
                perimeter: function () {
                    return (2*(x+y));
                },
                area:function () {
                    return (x*y);
                }
            });
    }
    catch (error) {
        callback(error,null);
    }
}