//<link rel="stylesheet" type="text/css" href="./style.css"/>

var messagesRef=firebase.database().ref().child("messages"); //create new ref to a location folder named messages

messagesRef.on("child_added", snap => {
	
	var data = snap.val();

	$("#divider").append("<p>"+data+"</p>");
	
});

function post() {
	var userInput=document.getElementById("userInput").value;
		

	messagesRef.push().set(userInput); //create a new message in my firebase

	//var node=document.createElement("p");
	//var textnode=document.createTextNode(userInput);
	//node.appendChild(textnode);
	//document.getElementById("divider").appendChild(node);

	document.getElementById("form").reset();
}


