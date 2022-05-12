//FACTORY FUNCTIONS
// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(34, 33, 250);

//CONSTRUCTOR FUNCTIONS
//NEW creates a blank, plain Javascript object;
// Links(sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the THIS context;
// Returns THIS if the function doesnt return its own object.

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };
// new Color(255, 30, 100);

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r},${g},${b},${a})`;
// };

// const color1 = new Color(23, 54, 234);
// const color2 = new Color(255, 34, 0);

// document.body.style.backgroundColor = color2.rgba(0.5);

class Color{
    //constructor executes immediately when a new color is created
    constructor(r,g,b,name){
        console.log("inside constructor");
        console.log(r,g,b,name);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        return `hello from ${this.name}`;
    }
    innerRGB(){
        const{r,g,b} =  this;
        return `${r},${g},${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a =1.0){
        return `rgba(${this.innerRGB()},${a})`;
     }
    hex(){
        const {r,g,b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
   
}
const pandaPink = new Color(255, 34, 0, 'pandaPink');
const white = new Color(255,255,255, 'white');
document.body.style.backgroundColor = pandaPink.rgba(.5);