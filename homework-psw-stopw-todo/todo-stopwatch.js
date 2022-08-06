//UI

const timer = document.querySelector('.time');
const startbtn = document.querySelector('.start');
const resetbtn = document.querySelector('.reset');
const colckbtn = document.querySelector('.clock');
const stopwatch = document.querySelector('.stop-watch');
const timesicon = document.querySelector('.fa-times');

// const starticon = document.querySelector('.fa-play');
// const pauseicon = document.querySelector('.fa-pause');

colckbtn.addEventListener('click',()=>{

	stopwatch.style.display = "block";
});

timesicon.addEventListener('click',()=>{
	stopwatch.style.display = "none";
});


let [milliseconds,seconds,minutes,hours] = [0,0,0,0];




startbtn.addEventListener('click',()=>{
	starttimer();
	updateicon();
});

resetbtn.addEventListener('click',resettimer);


let time;

function starttimer(){

	if(time != null){
		clearInterval(time);
	}

	time = setInterval(displaytimer,10);

	// console.log(starticon);

	

	
}


function pausetimer(){
	clearInterval(time);

	// pauseicon.classList.replace('fa-pause','fa-play');
}


function resettimer(){
	clearInterval(time);
	[milliseconds,seconds,minutes,hours] = [0,0,0,0];
	timer.textContent = "00 : 00 : 00 : 000";

}


function updateicon(){
	if(startbtn.querySelector('i.fas').classList.contains('fa-play')){

		startbtn.querySelector('i.fas').classList.replace('fa-play','fa-pause');
		
	}else{
		startbtn.querySelector('i.fas').classList.replace('fa-pause','fa-play');
		pausetimer();
	}
}












function displaytimer(){
	milliseconds += 10;

	if(milliseconds === 1000){
		milliseconds = 0;
		seconds++;


		if(seconds === 60){
			seconds = 0;
			minutes++;


			if(minutes === 60){
				minutes = 0;
				hours++;
			}

		}
	}


	let h = hours < 10? "0"+hours : hours;
	let m = minutes < 10?"0"+minutes : minutes;
	let s = seconds < 10? "0"+seconds : seconds;
	let milli = milliseconds < 10? "00" + milliseconds : milliseconds < 100? "0" + milliseconds : milliseconds;

	timer.innerText = `${h} : ${m} : ${s} : ${milli}`;



}




//Todo list
//UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);

if(todos){
	todos.forEach(todo => addtodo(todo));

}



formel.addEventListener('submit',(e)=>{
	// console.log('hay');

	addtodo();

	e.preventDefault();
});


function addtodo(todo){
	// console.log('i am working...');

	let todotext = inputel.value;
	// console.log(todotext);


	if(todo){
		todotext = todo.text;

	}


	if(todotext){

		const li = document.createElement('li');

		if(todo && todo.complete){
			// add class
			li.classList.add('completed');
		}




		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		todoul.appendChild(li);

		updatelocalstorage();
		inputel.value = '';


		// remove by left click
		li.addEventListener('click',()=>{
			li.classList.toggle('completed');

			updatelocalstorage();
		});

		// remove by right click
		li.addEventListener('contextmenu',(e)=>{
			// console.log('i am working');
			li.remove();

			updatelocalstorage();

			e.preventDefault();//right click khauk yin box ma paw chin loh
		});

	}else{
		window.alert('Enter your todo');
	}
}


function updatelocalstorage(){
	// console.log('storage is ready');

	let todolis = document.querySelectorAll('li');
	// console.log(todolis);

	let todos = [];

	todolis.forEach(todoli=>{
		// console.log(todoli);
		// console.log(todoli.innerText);

		todos.push({
			text:todoli.innerText,
			complete:todoli.classList.contains('completed')
		});


	});

	// console.log(todos);
	localStorage.setItem('todos',JSON.stringify(todos));

}


// Hover Container
const leftcontainer = document.querySelector('.todocontainer');
const rightcontainer = document.querySelector('.container');
// console.log(leftcontainer);

leftcontainer.addEventListener('mouseenter',()=>{

	leftcontainer.classList.add('hover-left');
});

leftcontainer.addEventListener('mouseleave',()=>{

	leftcontainer.classList.remove('hover-left');
});


rightcontainer.addEventListener('mouseenter',()=>{

	rightcontainer.classList.add('hover-right');

});

rightcontainer.addEventListener('mouseleave',()=>{
	rightcontainer.classList.remove('hover-right');
});
