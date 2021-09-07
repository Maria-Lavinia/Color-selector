"use strict";

let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
// let rgbInput = document.querySelector("#rgb");

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  hexInput.value = color;

  document.querySelector("h1").style.color = color;

  splitcolor(color2);
});

const color2 = document.querySelector("#hex").value;
splitcolor(color2);

function splitcolor(color2) {
  let array = color2.split("");
  let splitColors = getletters(array);
  splitColorInRGB(splitColors);
}
function getletters(array) {
  let red = array[1] + array[2];
  //   console.log(first);
  let green = array[3] + array[4];
  //   console.log(second);
  let blue = array[5] + array[6];
  //   console.log(third);
  return { red, green, blue };
}

function splitColorInRGB(splitColors) {
  let red = parseInt(splitColors.red, 16);
  // console.log("Red hex is: " + red);

  let green = parseInt(splitColors.green, 16);
  // console.log("Green hex is: " + green);

  let blue = parseInt(splitColors.blue, 16);
  // console.log("Blue hex is: " + blue);

  const object = {
    r: `${red}`,
    g: `${green}`,
    b: `${blue}`,
  };
  console.log(object);
  displayRGB(object);
  //   displayHSL(r, g, b);
}
function displayRGB(object) {
  document.querySelector("#rgb").textContent = `${object.r}, ${object.g}, ${object.b}`;
  // let rgbInput = document.querySelector("#rgb");
  // let colors = object.r + " " + object.g + " " + object.b;
  // rgbInput.value = colors;
  // displayHSL(r, g, b);
}
// function displayHSL(r, g, b) {
//   r /= 255;
//   g /= 255;
//   b /= 255;

//   let h, s, l;

//   const min = Math.min(r, g, b);
//   const max = Math.max(r, g, b);

//   if (max === min) {
//     h = 0;
//   } else if (max === r) {
//     h = 60 * (0 + (g - b) / (max - min));
//   } else if (max === g) {
//     h = 60 * (2 + (b - r) / (max - min));
//   } else if (max === b) {
//     h = 60 * (4 + (r - g) / (max - min));
//   }

//   if (h < 0) {
//     h = h + 360;
//   }

//   l = (min + max) / 2;

//   if (max === 0 || min === 1) {
//     s = 0;
//   } else {
//     s = (max - l) / Math.min(l, 1 - l);
//   }
//   // multiply s and l by 100 to get the value in percent, rather than [0,1]
//   s *= 100;
//   l *= 100;

//   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
//   showHSL(h, s, l);
// }

// function showHSL(h, s, l) {
//   const hsl = document.getElementById("hsl");
//   hsl.textContent = `H: ${h} S: ${s} L: ${l}`;
// }
