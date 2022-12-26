// select all elements 
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input"); 

allSpans.forEach(span => {
	
	span.addEventListener("click" , (e) => {
		if (e.target.classList.contains("Check-Item")) {
			checkItem();
		}
		if (e.target.classList.contains("add-Item")) {
			addkItem();
		}
		if (e.target.classList.contains("delete-Item")) {
			deleteItem();
		}
		if (e.target.classList.contains("show-Item")) {
			showItem();
		}
	})
})

function showMsg() {
		results.innerHTML = "Input Can Not Be Empty";

}


function checkItem() {
	if (theInput.value !== '') {
		if (localStorage.getItem(theInput.value)) {
			results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
		} else {
			results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
		}
	} else {
		showMsg();
	} 
}
function addkItem() {
		if (theInput.value !== '') {
		localStorage.setItem(theInput.value, "Test"); 
		results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added `
		theInput.value = '';
	} else {
		showMsg();
	} 
}
function deleteItem() {
		if (theInput.value !== '') {
		if (localStorage.getItem(theInput.value)) {
			localStorage.removeItem(theInput.value)
			results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`;
		theInput.value = '';

		} else {
			results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
		}
	} else {
		showMsg();
	}
}
function showItem() {
	if (localStorage.length) {
		// console.log(`Found Element ${localStorage.length}`)
		results.innerHTML = '';
		for (let [key,value] of Object.entries(localStorage)) {
			results.innerHTML += `<span class="Keys"> ${key} </span>`
		}
	} else {
		results.innerHTML = `Local Storage Is Empty`
	}
}