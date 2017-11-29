

var messagesRef=firebase.database().ref().child("messages"); //create new ref to a location folder named messages

messagesRef.on("child_added", snap => {
	
	var data = snap.val(); //sets the value of the messages into variable data
	$("#divider").append("<p class='para'>"+data+"</p>"); 
	
});

function post() {
  
	var userInput1=document.getElementById("userInput").value; //gets value of user's input

	if (/\S/.test(userInput1)) {
	
		messagesRef.push().set(userInput1); //create a new message in my firebase
	}
	
	document.getElementById("form").reset();
}


