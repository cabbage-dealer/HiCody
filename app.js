

var messagesRef=firebase.database().ref().child("messages"); //create new ref to a location folder named messages

messagesRef.on("child_added", snap => {
	
	var data = snap.val(); //sets the value of the messages into variable data
	$("#divider").append("<p class='para'>"+data+"</p>"); 
	
});

function post() {
	var userInput=document.getElementById("userInput").value; //gets value of user's input
		

	messagesRef.push().set(userInput); //create a new message in my firebase

	//var node=document.createElement("p");
	//var textnode=document.createTextNode(userInput);
	//node.appendChild(textnode);
	//document.getElementById("divider").appendChild(node);

	document.getElementById("form").reset();
}


