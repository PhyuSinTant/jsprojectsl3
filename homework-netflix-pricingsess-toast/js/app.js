//UI
const bars = document.querySelector('.bars');
const navs = document.querySelectorAll('.nav');

const crossicon = document.querySelector('.fa-times');

bars.addEventListener('click',()=>{
	navs.forEach((nav)=>{
		nav.classList.add('visible');

	})

});



crossicon.addEventListener('click',()=>{
	navs.forEach((nav)=>{
		nav.classList.remove('visible');
	})
})


//Men and Women
const check = document.querySelector('.check');
const labelcheck = document.querySelector('.label');

// const imgs = document.querySelectorAll('img');
const mendiv = document.querySelector('.men'),
		womendiv = document.querySelector('.women');


labelcheck.addEventListener('click',()=>{

	if(!check.checked){

		document.querySelector('.label .fas').classList.replace('fa-toggle-off','fa-toggle-on');
		// document.querySelector('.box').classList.add('men');
		mendiv.style.display = "none";
		womendiv.style.display = "block";
		
	

	}else{
		document.querySelector('.label .fas').classList.replace('fa-toggle-on','fa-toggle-off');
		// document.querySelector('.box').classList.add('women');
		womendiv.style.display = "none";
		mendiv.style.display = "block";
		

	}
})


// toast noti

const imgs = document.querySelectorAll('img');
const divs = document.querySelectorAll('.div');
// console.log(imgs);
function spaneffect(){

divs.forEach((div)=>{
	const img = div.lastElementChild;
	// console.log(img);


	const value = div.lastElementChild.getAttribute('data-target');
	// console.log(value);
	const span = document.createElement('span');
	span.innerText = value;
	console.log(span);

	div.appendChild(span);


	img.addEventListener('click',()=>{
		
		// span.style.display ="inline-block";
		span.classList.add('active');
		
	})


});
}


spaneffect();


//UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Welcome to Our Shopping Website";
// console.log(pgh.length);//string is character array in js so length ko use loh ya

let idx = 1;
let speed = 70;//setTimeout or setInterval use mhar moh // aut mha setInterval htae  htae ll ya tl

function autotext(){
	// console.log('hay');

	textel.innerText = pgh.slice(0,idx);//string moh slice


	//idx += 1;
	idx++;

	if(idx > pgh.length){
		idx = 1;
	}

	setTimeout(autotext,speed);
	
}

autotext();


//Event Listener
// speedel.addEventListener('input',()=>{

// 	// console.log('hay');
// 	// console.log(speedel.value);

// 	speed = 100 / speedel.value;
// });






