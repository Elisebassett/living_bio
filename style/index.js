var modal = document.getElementById('modal');

setTimeout(function() {
	modal.style.display = "block";

}, 10000);


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}