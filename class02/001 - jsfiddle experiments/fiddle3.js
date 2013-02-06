/* try adding a class like this to your CSS:

#box.bananas {
	background:red;
}

*/

var box = document.getElementById("box");
box.className = "bananas"; 

box.style.paddingLeft = "10px";

console.log(box);