//Display numbers 1 through 20
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=1; i<=20; i++) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d1".
var destination = document.getElementById("k1");
destination.appendChild(newElement);


// Displays even numbers 1 through 20
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=2; i<=20; i+=2) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d2".
var destination = document.getElementById("k2");
destination.appendChild(newElement);


// Display the odd numbers from 1 to 20
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=1; i<20; i+=2) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d3".
var destination = document.getElementById("k3");
destination.appendChild(newElement);


// Display the multiples of 5 up to 100
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=5; i<=100; i+=5) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d4".
var destination = document.getElementById("k4");
destination.appendChild(newElement);


// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
var newElement = document.createElement("p");
newElement.className = "ans";
var square=1;
for(i=1; square<=100; i++) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${square} `);
    newElement.appendChild(newText);
    square=(i+1)*(i+1)
}
// Put the new div on the page inside the existing element "d5".
var destination = document.getElementById("k5");
destination.appendChild(newElement);


//Display numbers 20 through 1
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=20; i>=1; i--) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d6".
var destination = document.getElementById("k6");
destination.appendChild(newElement);

//Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=20; i>=2; i-=2) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d7".
var destination = document.getElementById("k7");
destination.appendChild(newElement);


//Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=19; i>=1; i-=2) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d8".
var destination = document.getElementById("k8");
destination.appendChild(newElement);


//Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
var newElement = document.createElement("p");
newElement.className = "ans";
for(i=100; i>=5; i-=5) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${i} `);
    newElement.appendChild(newText);
}
// Put the new div on the page inside the existing element "d9".
var destination = document.getElementById("k9");
destination.appendChild(newElement);


// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
var newElement = document.createElement("p");
newElement.className = "ans";
var square=100;
for(i=10; square>=1; i--) {
    // Place a text label inside the new div.
    var newText = document.createTextNode(`${square} `);
    newElement.appendChild(newText);
    square=(i-1)*(i-1)
}
// Put the new div on the page inside the existing element "d10".
var destination = document.getElementById("k10");
destination.appendChild(newElement);


//function that generates and returns random array
function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}


// generates random array called sampleArray
var sampleArray = randomArray(20, 1000)
//Display the 20 elements of sampleArray. 
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
sampleArray.forEach (x => {
    var newText = document.createTextNode(`${x} `);
    newElement.appendChild(newText);
});
// Put the new div on the page inside the existing element "d11".
var destination = document.getElementById("k11");
destination.appendChild(newElement);


//Display all the even numbers contained in sampleArray. 
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
sampleArray.forEach (x => {
    if (x%2===0) {
        var newText = document.createTextNode(`${x} `);
        newElement.appendChild(newText);
    }
});
// Put the new div on the page inside the existing element "d12".
var destination = document.getElementById("k12");
destination.appendChild(newElement);


//Display all the odd numbers contained in sampleArray. 
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
sampleArray.forEach (x => {
    if (x%2!=0) {
        var newText = document.createTextNode(`${x} `);
        newElement.appendChild(newText);
    }
});
// Put the new div on the page inside the existing element "d13".
var destination = document.getElementById("k13");
destination.appendChild(newElement);


//Display all the even numbers contained in sampleArray. 
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
sampleArray.forEach (x => {
    if (x%2!=0) {
        var newText = document.createTextNode(`${x*x} `);
        newElement.appendChild(newText);
    }
});
// Put the new div on the page inside the existing element "d14".
var destination = document.getElementById("k14");
destination.appendChild(newElement);


// Display the sum of all the numbers from 1 to 20
var newElement = document.createElement("p");
newElement.className = "ans";
var sum=0;
for(i=1; i<=20; i++) {
    // Place a text label inside the new div.
    sum+=i
}
var newText = document.createTextNode(`Sum = ${sum}`);
newElement.appendChild(newText);
// Put the new div on the page inside the existing element "d15".
var destination = document.getElementById("k15");
destination.appendChild(newElement);


// Display the sum of all the elements in sampleArray
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
var sum= 0;
sampleArray.forEach (x => {
    sum+=x
});
var newText = document.createTextNode(`Sum = ${sum}`);
newElement.appendChild(newText);
// Put the new div on the page inside the existing element "d16".
var destination = document.getElementById("k16");
destination.appendChild(newElement);


// Display the smallest element in sampleArray
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
var min = 2000;
sampleArray.forEach (x => {
    if (x<min) {
        min=x;
    }
});
var newText = document.createTextNode(`Smallest element: ${min}`);
newElement.appendChild(newText);
// Put the new div on the page inside the existing element "d17".
var destination = document.getElementById("k17");
destination.appendChild(newElement);


// Display the smallest element in sampleArray
var newElement = document.createElement("p");
newElement.className = "ans";
//loops through array
var max = 0;
sampleArray.forEach (x => {
    if (x>max) {
        max=x;
    }
});
var newText = document.createTextNode(`Largest element: ${max}`);
newElement.appendChild(newText);
// Put the new div on the page inside the existing element "d18".
var destination = document.getElementById("k18");
destination.appendChild(newElement);


// Display 20 solid gray rectangles, each 20px high and 100px wide
var newElement = document.createElement("div");
newElement.className = "ans";
for(i=1; i<=20; i++) {
    // Place a text label inside the new div.
    var box = document.createElement("div");
    box.style.width="100px"
    box.style.height="20px"
    box.style.backgroundColor="grey"
    box.style.border="1px solid black"
    newElement.appendChild(box)
}
// Put the new div on the page inside the existing element "d19".
var destination = document.getElementById("k19");
destination.appendChild(newElement);


// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above)
var newElement = document.createElement("div");
newElement.className = "ans";
for(i=1; i<=20; i++) {
    // Place a text label inside the new div.
    var box = document.createElement("div");
    if (i%2===0) box.style.width="200px"
    else box.style.width="105px"
    box.style.height="20px"
    box.style.backgroundColor="grey"
    box.style.border="1px solid black"
    newElement.appendChild(box)
}
// Put the new div on the page inside the existing element "d20".
var destination = document.getElementById("k20");
destination.appendChild(newElement);


// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray
var newElement = document.createElement("div");
newElement.className = "ans";
sampleArray.forEach (x => {
    // Place a text label inside the new div.
    var box = document.createElement("div");
    box.style.width= x + "px"
    box.style.height="20px"
    box.style.backgroundColor="grey"
    box.style.border="1px solid black"
    newElement.appendChild(box)
});
// Put the new div on the page inside the existing element "d21".
var destination = document.getElementById("k21");
destination.appendChild(newElement);

// As in #21, but color the rectangles with even widths red
var newElement = document.createElement("div");
newElement.className = "ans";
sampleArray.forEach (x => {
    // Place a text label inside the new div.
    var box = document.createElement("div");
    box.style.width= x + "px"
    box.style.height="20px"
    if (sampleArray.indexOf(x)%2 === 0) box.style.backgroundColor="grey"
    else box.style.backgroundColor="red"
    box.style.border="1px solid black"
    newElement.appendChild(box)
});
// Put the new div on the page inside the existing element "d22".
var destination = document.getElementById("k22");
destination.appendChild(newElement);


// As in #21, but color the rectangles with even widths red
var newElement = document.createElement("div");
newElement.className = "ans";
sampleArray.forEach (x => {
    // Place a text label inside the new div.
    var box = document.createElement("div");
    box.style.width= x + "px"
    box.style.height="20px"
    if (x%2 === 0) box.style.backgroundColor="red"
    else box.style.backgroundColor="grey"
    box.style.border="1px solid black"
    newElement.appendChild(box)
});
// Put the new div on the page inside the existing element "d23".
var destination = document.getElementById("k23");
destination.appendChild(newElement);