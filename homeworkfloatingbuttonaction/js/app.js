// UI
const container = document.querySelector('.container');
const bg = document.querySelector('.bg');

console.log(container);
console.log(bg);


container.addEventListener('mouseover',()=>{
	container.classList.add('showscroll');
	
});


container.addEventListener('mouseleave',()=>{
	container.classList.remove('showscroll');
});


// For reaction
const foatreactions = document.querySelector('.foatreactions');
const reacts = document.querySelectorAll('.react');

const reacttext = document.querySelector('.react-text'),
		goodicon = document.querySelector('.goodicon');



const footerreaction = document.querySelector('.footer-reaction');


// const count = document.querySelector('#count');
//  c = 1;

document.querySelector('.like').addEventListener('click',()=>{
	document.querySelector('.like').classList.add('show');
	reaction();

});

function reaction(){
	document.querySelector('.like').addEventListener('click',(e)=>{

	// console.log(e.target);
	// let icon = e.target.getAttribute('src');
	// let text = e.target.alt;

	// console.log(goodicon.getAttribute('src'));

	document.querySelector('.like').classList.add('show');
	// setTimeout(()=>{

	foatreactions.addEventListener('click',()=>{
		let valicon = e.target.getAttribute('src');
	const valtext = e.target.getAttribute('alt');

		goodicon.setAttribute('src',valicon);
		
		
		reacttext.innerText = valtext;
		
		
		
		console.log(valicon);

		setTimeout(()=>{
		document.querySelector('.like').classList.remove('show');
		goodicon.setAttribute('src',valicon);

		goodicon.style.animation = "myani 0.4s ease-in 1";
	},500);
	
	})

});

}





// function reaction(e){
// 	document.querySelector('.like').addEventListener('click',(e)=>{

// 	// console.log(e.target);
// 	let icon = e.target.getAttribute('src');
// 	let text = e.target.alt;

// 	// console.log(goodicon.getAttribute('src'));

// 	document.querySelector('.like').classList.add('show');
// 	setTimeout(()=>{

// 	const valicon = e.target.getAttribute('src');
// 	const valtext = e.target.getAttribute('alt');

// 		goodicon.setAttribute('src',valicon);
		
		
// 		reacttext.innerText = valtext;
// 		document.querySelector('.like').classList.remove('show');
		
		
// 		// console.log(i);

		

// 	},500);

// 	if(e.target.className !== 'goodicon'){
// 		e.target.style.animation = "myani 0.5s ease-in 1";
// 	}

// 	document.querySelector('.goodicon').addEventListener('click',()=>{
// 		goodicon.style.animation = "myani 0 ease-in 1";
// 	})	
	


// });

// }

// Comment 

const commentdiv1 = document.querySelector('.comment1');
const commentdiv2 = document.querySelector('.comment2');

const commentdiv3= document.querySelector('.comment3');



const cmm1 = document.querySelector('#commentpar1');
// console.log(cmm);
cmm1.addEventListener('click',()=>{
	commentdiv1.classList.add('show');
	console.log('hi');
});

const cmm2 = document.querySelector('#commentpar2');
// console.log(cmm);
cmm2.addEventListener('click',()=>{
	commentdiv2.classList.add('show');
	console.log('hi');
});

const cmm3 = document.querySelector('#commentpar3');
// console.log(cmm);
cmm3.addEventListener('click',()=>{
	commentdiv3.classList.add('show');
	console.log('hi');
});



const upload1 = document.querySelector('.comment1 .fa-arrow-right');
const upload2 = document.querySelector('.comment2 .fa-arrow-right');
const upload3 = document.querySelector('.comment3 .fa-arrow-right');

const commentext1 = document.querySelector('.comme1');
const commentext2 = document.querySelector('.comme2');
const commentext3 = document.querySelector('.comme3');

console.log(commentext3);
console.log(commentext2);
console.log(upload2);
console.log(upload3);

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');

upload1.addEventListener('click',()=>{
	
	commentext1.appendChild(document.createTextNode(input1.value));
	input1.value = '';

	
})
upload2.addEventListener('click',()=>{
	
	commentext2.appendChild(document.createTextNode(input2.value));
	input2.value = '';

	
})
upload3.addEventListener('click',()=>{
	
	commentext3.appendChild(document.createTextNode(input3.value));
	input3.value = '';

	
});



document.querySelector('.comment1 .fa-arrow-circle-left').addEventListener('click',()=>{
	// document.querySelector('.cmbox').style.display = "none"
	commentdiv1.classList.remove('show');
	
});

document.querySelector('.comment2 .fa-arrow-circle-left').addEventListener('click',()=>{
	// document.querySelector('.cmbox').style.display = "none"
	
	commentdiv2.classList.remove('show');
	
});

document.querySelector('.comment3 .fa-arrow-circle-left').addEventListener('click',()=>{
	// document.querySelector('.cmbox').style.display = "none"
	
	commentdiv3.classList.remove('show');
});


// Share
document.querySelector('#share').addEventListener('click',()=>{
	window.location.href = "https://phyusinthantpj.herokuapp.com/";
// console.log(w);

});