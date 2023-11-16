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

function buildTile(color) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");
	
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
		
		document.querySelector("#movs").innerHTML = counter +"<br>"+ countermoves;

		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		// Reveal this color
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
			document.querySelector("#movs").innerHTML = counter	+"<br>"+ countermoves;
			
			if (revealedCount === tileCount) {
				document.querySelector("#movs").innerHTML = 
				"You finish the game in " + countermoves +" movs <br> Refresh to start again."
			}

			return;
			
		}

		awaitingEndOfMove = true;

		setTimeout(() => {
			activeTile.style.backgroundColor = null;
			element.style.backgroundColor = null;

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

 