// UI
const testimonialel = document.querySelector('.testimonial');
const userimageel = document.querySelector('.user-image');
const usernameel = document.querySelector('.username');
const roleel = document.querySelector('.role');

const testimonials = [
	{
		name:"Mya Mya",
		role:"Marketing",
		photo:"https://randomuser.me/api/portraits/women/50.jpg",
		text:"Mya Mya Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodonim id est laborum"


	},
	{
		name:"Su Su",
		role:"Accountant",
		photo:"https://randomuser.me/api/portraits/women/51.jpg",
		text:"Su Su Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodonim id est laborum"


	},
	{
		name:"Kyaw Kyaw",
		role:"Sales",
		photo:"https://randomuser.me/api/portraits/men/50.jpg",
		text:"Kyaw Kyaw Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodonim id est laborum"


	},
	{
		name:"Hla Hla",
		role:"Warehouse Manager",
		photo:"https://randomuser.me/api/portraits/women/53.jpg",
		text:"Hla Hla Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodonim id est laborum"


	},
	{
		name:"Zue Zue",
		role:"Digital Marketing",
		photo:"https://randomuser.me/api/portraits/men/54.jpg",
		text:"Zue Zue Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodonim id est laborum"


	}

];

// console.log(testimonials[0].text);

let idx = 0;

function updatetestimonial(){

	// const getname = testimonials[idx].name;
	// const getrole = testimonials[idx].role;
	// const getphoto = testimonials[idx].photo;
	// const gettext = testimonials[idx].text;

	const {name,role,photo,text} = testimonials[idx];


	testimonialel.textContent = text;
	usernameel.src = photo;
	usernameel.textContent = name;
	roleel.innerText = role;

	idx++;

	if(idx > testimonials.length - 1){
		idx = 0;
	}


}


updatetestimonial();
setInterval(updatetestimonial,10000);