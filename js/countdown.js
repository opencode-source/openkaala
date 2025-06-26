// Using the existing launch date from your code
const launchDate = new Date(2025, 12, 30  , 0, 0, 0); // YYYY, MM (0-based), DD, HH, MM, SS
const countdownElement = document.querySelector(".countdown-blocks");

// Your existing createBlock function
const createBlock = (label, value) => {
	const block = document.createElement("div");
	block.className = "time-block";

	const valueEl = document.createElement("span");
	valueEl.className = "time-value";
	// Add leading zeros for single-digit values
	valueEl.textContent = value < 10 ? `0${value}` : value;

	const labelEl = document.createElement("p");
	labelEl.className = "time-label";

	// Add pulsing animation to seconds block
	if (label === "Seconds") {
		valueEl.style.animation = "pulse 1s infinite";
	}

	block.appendChild(valueEl);
	block.appendChild(labelEl);
	return block;
};

// Modified updateCountdown function
const updateCountdown = () => {
	const now = new Date();
	const difference = launchDate - now;

	if (difference > 0) {
		const timeLeft = {
			Seconds: Math.floor((difference / 1000) % 60),
            Minutes: Math.floor((difference / 1000 / 60) % 60),
			Hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
		};

		countdownElement.innerHTML = "";
		for (const [label, value] of Object.entries(timeLeft)) {
			countdownElement.appendChild(createBlock(label, value));
		}
	} else {
		// Handle countdown expiration
		countdownElement.innerHTML = "";
		document.querySelector(".countdown-title").textContent = "Launch Day!";
		document.querySelector(".countdown-description").textContent =
			"The day has arrived!";

		const messageBlock = document.createElement("div");
		messageBlock.className = "time-block expired-message";
		messageBlock.style.gridColumn = "1 / -1";
		messageBlock.style.padding = "2rem";
		messageBlock.textContent = "We're live now!";

		countdownElement.appendChild(messageBlock);
		clearInterval(timer);
	}
};

// Initialize and set the interval
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
