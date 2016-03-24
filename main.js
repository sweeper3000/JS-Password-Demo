// attach event listener to buttton
document.getElementById.addEventListener("click", getIn);
// start function
function getIn() {
	var pass = prompt("Enter password");
	if (pass == "password"); {
		document.getElementById("show").style.display = "block";
	}
	else {
		alert("Incorrect");
	}
}