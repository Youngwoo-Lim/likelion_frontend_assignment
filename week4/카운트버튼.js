let count = 0;

function increaseCount() {
	count++;
	document.getElementById("count-display").innerHTML = count;
	}

function resetCount() {
	count = 0;
	document.getElementById("count-display").innerHTML = count;
    }