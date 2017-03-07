var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData){
    var dinosaursString = "";
    var currentDinosaur;

	for (var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];

		dinosaursString +=  `<div class="col-sm-6 col-md-4">`;
		dinosaursString +=  `<div class="thumbnail">`;
		dinosaursString +=  `<img src="${currentDinosaur.url}" alt="${currentDinosaur.url}">`;
		dinosaursString +=  `<div class="caption">`;
		dinosaursString +=  `<h3>${currentDinosaur.name}</h3>`;
		dinosaursString +=  `<p>Is a ${currentDinosaur.type}</p>`;
		dinosaursString +=  `<p>like to eat ${currentDinosaur.food}</p>`;
		dinosaursString +=  `</div>`;
		dinosaursString += `</div>`;
		dinosaursString +=  `</div>`;

		dinoContainer.innerHTML = dinosaursString;
	}
}

function executeThisCodeAfterFileLoad(){
	var data = JSON.parse(this.responseText);
	// console.log("It worked !!", this.responseText);
	makeDom(data); 
}

function executeThisCodeAfterFileFails(){
	console.log("boooo");
}

var myRequest = new XMLHttpRequest();  //make request
myRequest.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dinosaurs.json")  //get from dinosaurs.json , change dinisaurs.json to http for home work
myRequest.send();  //execute request
// console.log("myRequest", myRequest);