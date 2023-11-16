const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
let counter = 0;
let countermoves = 0;
let timerOn =null;
let timestop =null;
let time =null;
let gameOver=true

function buildTile(color) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");
	
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
		if(!timerOn){
		 startTimer()
		timerOn =1}
		
		document.querySelector("#win").innerHTML = counter 
		document.querySelector("#movs").innerHTML =  countermoves;

		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		// Reveal this color
		element.className="bc"
		element.style.backgroundColor = color;

		if (!activeTile) {
			activeTile = element;
			countermoves+=1;
			return;
		}

		const colorToMatch = activeTile.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeTile.setAttribute("data-revealed", "true");

			activeTile = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
			// countermoves=0
			counter+=1
			document.querySelector("#win").innerHTML = counter 
			document.querySelector("#movs").innerHTML =  countermoves;

			
			if (revealedCount === tileCount) {
				document.querySelector("#timer").innerHTML = time
				timestop=1
				document.querySelector("#gameover").className="item-result"
				document.querySelector("#gameover").innerHTML = 
				" You finish the game in " + countermoves + " movs <br> in " + time + "<br>"
				"Refresh to start again."
				document.querySelector("#win").innerHTML = "win"
				document.querySelector("#timer").innerHTML = "00:00"
				gameOver=false

			}

			return;
			
		}

		awaitingEndOfMove = true;

		setTimeout(() => {
			activeTile.className ="tile"
			element.className ="tile"
			// activeTile.style.backgroundColor = null;
			// element.style.backgroundColor = null;

			awaitingEndOfMove = false;
			activeTile = null;
		}, 1000);
	});

	return element;
}

// Build up tiles
for (let i = 0; i < tileCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const tile = buildTile(color);

	colorsPicklist.splice(randomIndex, 1);
	tilesContainer.appendChild(tile);
}

var timer=0;
var min=0;
var sec=0;
function startTimer() {
min=parseInt(timer/60);
sec=parseInt(timer%60);





 min = (min < 10) ? "0" + min : min
 sec = (sec < 10) ? "0" + sec : sec

 if(gameOver){

 time = document.querySelector("#timer").innerHTML = `${min.toString()} : ${sec.toString()}`;
     
 timer++;}
 if(!timestop){
     
  setTimeout(startTimer,1000)};
  return time };


//   function writeTime() {

// 	// get a date object
// 	var today = new Date();
	
// 	// ask the object for some information
// 	var hours = today.getHours();
// 	var minutes = today.getMinutes();
// 	var seconds = today.getSeconds();
	
// 	// fixTime makes the minutes and seconds look right
// 	// it just sticks a zero in front of numbers less than 10
// 	minutes = fixTime(minutes);
// 	seconds = fixTime(seconds);
	
// 	// put together the time string and write it out
// 	var the_time = hours + ":" + minutes + ":" + seconds;
// 	window.document.the_form.the_text.value = the_time;
	
// 	// run this function again in half a second
// 	the_timeout= setTimeout('writeTime();',500);
	
// 	}
	
// 	function fixTime(the_time) {
	
// 	  if (the_time < 10)
// 	  {
// 		the_time = "0" + the_time;
// 	  }
// 	  return the_time;
// 	} 

// 	 const tima = new Date().get time()