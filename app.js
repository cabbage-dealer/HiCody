function post() {
	var userInput=document.getElementById("userInput").value;
		console.log(userInput);

	var node=document.createElement("p");
	var textnode=document.createTextNode(userInput);
	node.appendChild(textnode);
	document.getElementById("divider").appendChild(node);

	document.getElementById("form").reset();
}