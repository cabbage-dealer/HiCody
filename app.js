var messagesRef=firebase.database().ref().child("messages"); //create new ref to a location folder named messages

messagesRef.on("child_added", snap => {
	//alert(snap.val());
	var data = snap.child("messages").val();

	$("#divider").append("<p>" + data + "</p>");
	console.log($("#divider").append("<p>" + data + "</p>"));
});

function post() {
	var userInput=document.getElementById("userInput").value;
		console.log(userInput);

	messagesRef.push().set(userInput); //create a new message in my firebase

	var node=document.createElement("p");
	var textnode=document.createTextNode(userInput);
	node.appendChild(textnode);
	document.getElementById("divider").appendChild(node);

	document.getElementById("form").reset();
}


