// Bonus: When player wins Tic Tac No, set either:
// 1. all winning boxes, 
// 2. all boxes regardless of winning boxes, or
// 3. entire board to picture of grumpy cat, in honor of her visit to SF.

var turn = "X"; // contains X or O, starts off with X
var boardRa = ["","","","","","","","",""]; // array will be populated with X && O  
var eachBox = document.querySelectorAll(".box"); // grab table!

for(var i = 0; i < eachBox.length; i++) { 
	eachBox[i].addEventListener("click", function() { /*call back, when click on box*/ 
		var nameIndex = this.getAttribute("name"); // selects boardRa index name

		if (boardRa[nameIndex] != "") { // if string is used already, do nothing.
			console.log("You can't play here!")

		} else {
			boardRa[nameIndex] = turn; // boardRa is populated with turn's variable.
			this.textContent = turn; // set text in each box to turn's variable
			if (turn === "X") { 
				this.classList.add("xcolor");
				turn = "O";
			} else {
				this.classList.add("ocolor");
				turn = "X";
			}
			console.log(boardRa);
		};
		/*
			upon click, box knows it was selected, function then asks box to ID itself, when box ID'd, turn = X displays. Then, if X, then turn is O. 

			save click data to determine who clicked on which box. it should populate boardRa.
		*/
	})
}
var resetB = document.querySelector("#resetButton")
resetB.addEventListener("click", function() { //resets board and sets turn back to X.
	boardRa = ["","","","","","","","",""];
	turn = "X";
	for(var i =0; i < eachBox.length; i++) {
		eachBox[i].classList.remove("xcolor");
		eachBox[i].classList.remove("ocolor");
		eachBox[i].textContent = "";
	}
})













