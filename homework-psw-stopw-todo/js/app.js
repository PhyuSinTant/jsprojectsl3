//UI
const backbtn = document.querySelector('.back');
const forwardbtn = document.querySelector('.forward');
const img = document.getElementById('img');
let name = document.getElementById('name');

const eyeicon = document.getElementById('eye');
const password = document.getElementById('password');

const background = document.getElementById('background');

const submit = document.querySelector('.submit');


let profiles = ['profile1','profile2','profile3'];
let profileindex = 0;

let names = ["Maris John","Selina","Critesa"];
let nameindex = 0;




loadprofile(profiles[profileindex],names[nameindex]);


function loadprofile(profile,name){

	img.src = `img/${profile}.jpg`;
	document.getElementById('name').innerText = name;
	

}






function backprofile(){
	// console.log('hay');

	profileindex--;
	nameindex--;
	console.log(profileindex);

	if(profileindex < 0){
		profileindex = profiles.length - 1;
		nameindex = names.length - 1;
	

	}

	loadprofile(profiles[profileindex],names[nameindex]);
}


function forwardprofile(){
	// console.log('hay');

	profileindex++;
	nameindex++;

	if(nameindex > names.length-1){
		profileindex = 0;
		nameindex = 0;


	}
	loadprofile(profiles[profileindex],names[nameindex]);
	console.log(profileindex,nameindex);

}


eyeicon.addEventListener('click',()=>{
	if(eyeicon.classList.contains('fa-eye-slash')){

		eyeicon.classList.replace('fa-eye-slash','fa-eye');

		password.setAttribute('type','text');



	}else{
		eyeicon.classList.replace('fa-eye','fa-eye-slash');

		password.setAttribute('type','password');

	}

});

//Background Strength

password.addEventListener('keyup',(e)=>{

	const inputlength = e.target.value.length;
	console.log(inputlength);
	const blurvalue = 10 - inputlength;
	// background.style.filter =`blur(${blurvalue}px)`;
	background.style.filter = `blur(${blurvalue}px)`;
	console.log(inputlength);

});





backbtn.addEventListener('click',backprofile);
forwardbtn.addEventListener('click',forwardprofile);

