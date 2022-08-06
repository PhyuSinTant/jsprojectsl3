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
console.log(foatreactions);
const reacts = document.querySelectorAll('.react');

const reacttext = document.querySelector('.react-text'),
		goodicon = document.querySelector('.goodicon');



const footerreaction = document.querySelector('.footer-reaction');


// const count = document.querySelector('#count');
//  c = 1;

footerreaction.addEventListener('click',()=>{
	document.querySelector('.like').classList.add('show');
	reaction();
	

		
	

})



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

		

	// },500);



	// if(e.target.className !== 'goodicon'){
	// 	goodicon.style.animation = "myani 0.4s ease-in 1";
	// }

	// document.querySelector('.goodicon').addEventListener('click',()=>{
	// 	goodicon.style.animation = "myani 0 ease-in 1";
	// })	

	
	
// document.querySelector('.like').classList.add('show');

});

}

// Comment 

const commentdiv = document.querySelector('.comment');



const cmm = document.querySelector('#commentpar');
// console.log(cmm);
cmm.addEventListener('click',()=>{
	commentdiv.classList.add('show');
	console.log('hi');
});





const upload = document.querySelector('.comment .fa-arrow-right');



const input = document.querySelector('.input');

upload.addEventListener('click',()=>{
	
	commentext.appendChild(document.createTextNode(input.value));
	input.value = '';

	
})



