function goThroughWritingPromptsRight() {
	
		//const promptsLink = [];
		const dateList = ["July 27th, 2022", "July 28th, 2022", "July 29th, 2022", "August 1st, 2022", "August 2nd, 2022", "August 3rd, 2022", "August 4th, 2022", "August 5th, 2022", "August 9th, 2022", "August 10th, 2022", "August 11th, 2022", "August 12th, 2022", "August 15th, 2022", "August 16th, 2022", "August 17th, 2022", "August 18th, 2022", "August 19th, 2022", "August 22th, 2022", "August 23th, 2022", "August 24th, 2022", "August 25th, 2022", "August 26th, 2022", "August 29th, 2022", "August 30th, 2022", "August 31th, 2022", "September 1st, 2022", "September 2nd, 2022", "September 5th, 2022", "September 6th, 2022", "September 7th,2022", "september 8th, 2022"];
		
		//create a variable that will keep track of which prompt the page is currently showing"
		let promptTracker = document.getElementById("prompt");
		//promptNumberIndex makes it so that even if the start of the source changes 
		let promptNumberIndex = promptTracker.src.indexOf("prompt");
		let promptNumber = promptTracker.src[promptNumberIndex + 6]
		console.log(promptTracker.src.length)
		if (promptTracker.src.length > promptTracker.src.length - 1){
			
			promptNumber = promptNumber + promptTracker.src[promptNumberIndex + 7];	
		}
		let date = document.getElementById("date");
		console.log(promptNumber);
		console.log(promptTracker.src);
		if ((parseInt(promptNumber)) > -1 && (parseInt(promptNumber)) < 30) {
			promptTracker.src = "https://github.com/TheWritersWand/website/blob/cfa43cde9deed3e413d6b7bfe63bc4130e4401c2/prompt" + String(parseInt(promptNumber)+1) + ".png";
			promptTracker.alt = "prompt" + String(parseInt(promptNumber)+1);
			//change the date 
			date.innerHTML = dateList[parseInt(promptNumber)];
			console.log(date);
			console.log(dateList[parseInt(promptNumber)]);
		}
		else
		{
			promptTracker = promptTracker;
			date = date;
		}
	}
	
	//button to go left (decreasing order)
	function goThroughWritingPromptsLeft() {
		//const promptsLink = [];
		const dateList = ["July 27th, 2022", "July 28th, 2022", "July 29th, 2022", "August 1st, 2022", "August 2nd, 2022", "August 3rd, 2022", "August 4th, 2022", "August 5th, 2022", "August 9th, 2022", "August 10th, 2022", "August 11th, 2022", "August 12th, 2022", "August 15th, 2022", "August 16th, 2022", "August 17th, 2022", "August 18th, 2022", "August 19th, 2022", "August 22th, 2022", "August 23th, 2022", "August 24th, 2022", "August 25th, 2022", "August 26th, 2022", "August 29th, 2022", "August 30th, 2022", "August 31th, 2022", "September 1st, 2022", "September 2nd, 2022", "September 5th, 2022", "September 6th, 2022", "September 7th, 2022", "September 8th, 2022"];

		//create a variable that will keep track of which prompt the page is currently showing"
		let promptTracker = document.getElementById("prompt");
		//promptNumberIndex makes it so that even if the start of the source changes 
		let promptNumberIndex = promptTracker.src.indexOf("prompt");
		let promptNumber = promptTracker.src[promptNumberIndex + 6]
		console.log(promptTracker.src.length);
		let date = document.getElementById("date");
		let promptNumberInt = parseInt(promptNumber);
		//console.log(promptTracker);
		if (promptTracker.src.length > promptTracker.src.length - 1){
			
			promptNumber = promptNumber + promptTracker.src[promptNumberIndex + 7];		
		}
		console.log(promptNumber);
		if (parseInt(promptNumber) < 31 && parseInt(promptNumber) > 1) {
			promptTracker.src = "https://github.com/TheWritersWand/website/blob/cfa43cde9deed3e413d6b7bfe63bc4130e4401c2/prompt" + String(parseInt(promptNumber)-1) + ".png";
			promptTracker.alt = "prompt" + String(parseInt(promptNumber)-1);
			date.innerHTML = dateList[parseInt(promptNumber)-2];
			console.log(date);
		}
		else
		{
			promptTracker = promptTracker;
			date = date;
		}
	}
function alphabet_menu(){	
	const alphabet = [];
	for (let char = 64; char < 91; char++){
		var alph = String.fromCharCode(char);
		alphabet.push("alph");
		
}
}
