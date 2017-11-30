

var messagesRef=firebase.database().ref().child("messages"); //create new ref to a location folder named messages

messagesRef.on("child_added", snap => { //goes to the children of where ref is and snaps
	
	var data = snap.val(); //sets the value of the messages into variable data
	$("#divider").prepend("<p class='para'>"+data+"</p>"); //puts the val from data into <div>
	
});

function post() {
  
	var userInput1=document.getElementById("userInput").value; //gets value of user's input

	if (/\S/.test(userInput1)) { //if just empty space it wont do this)
	
		messagesRef.push().set(userInput1); //create a new message in my firebase
	}

	document.getElementById("form").reset(); //rests user input
}


