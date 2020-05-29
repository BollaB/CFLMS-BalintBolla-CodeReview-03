
document.getElementById("button").addEventListener("click",calculateInsurance);

function calculateInsurance() {
	userName = document.getElementById("names").value;
	userAge = parseInt(document.getElementById("age").value);
	userHP = parseInt(document.getElementById("hp").value);
	userCountry = document.getElementById("country").value;


	if (userCountry === "Austria") {
		insurance = Math.floor(userHP * 100 / userAge + 50);
	}
	else if (userCountry === "Hungary") {
		insurance = Math.floor(userHP * 120 / userAge + 100);
	}
	else {
		insurance = Math.floor(userHP * 150 / (userAge + 3) + 50);
	}

	document.getElementById("price").innerHTML = userName + ", your insurance costs " + insurance + " \u20AC"
	
}
