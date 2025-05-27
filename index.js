let project_titles = ['Virtual dynamics Eigenmanifold control', 'Project March','Stogl robotics internship','Deinobotics'
,'Infinitower', 'Ourobouros','Bushidog','Find Home', 'Pilgrimage', 'Bean Guys'];
let project_subtitles = ['A two-layer architecture for controlling nonlinear normal modes of underactuated mechanical systems'
, 'A fully motorized lower-body exoskeleton','A task-agnostic, robot-agnostic task planner for ROS 2 using symbolic reasoning','A robotic biped with a tail'
,'Made using: C++ & SFML-2 &emsp; Responsible for: Game design, programming & art'
,'Made using: GMS2 &emsp; Responsible for: Game design & programming','Made using: GMS2 &emsp; Responsible for: Game design & programming'
,'Made using: GMS2 &emsp; Responsible for: Game design, programming & art', 'Made using: GMS2 &emsp; Responsible for: Game design, programming & art'
,'Made using: GMS2 &emsp; Responsible for: Game design & programming'];

let games_titles = ['Infinitower', 'Ourobouros','Bushidog','Find Home', 'Pilgrimage', 'Bean Guys'];
let games_subtitles = ['Made using: C++ & SFML-2 &emsp; Responsible for: Game design, programming & art'
,'Made using: GMS2 &emsp; Responsible for: Game design & programming','Made using: GMS2 &emsp; Responsible for: Game design & programming'
,'Made using: GMS2 &emsp; Responsible for: Game design, programming & art', 'Made using: GMS2 &emsp; Responsible for: Game design, programming & art'
,'Made using: GMS2 &emsp; Responsible for: Game design & programming'];

	
function transition() {
	document.getElementById("test1").style.border="1px solid";
}

function setAsSelected(id_) {
	var buttons = ['b_home', 'b_abt','b_res','b_rob','b_gms'];
	if (document.getElementById(id_).className != "selected"){
		for(let i=0; i<buttons.length; i++)	{
			if (buttons.at(i)==id_){
				document.getElementById(id_).className ="selected";
				switch(id_)
				{
					case 'b_home':
					writeHome();
					break;

					case 'b_abt':
					writeAboutMe();
					break;
					
					case 'b_res':
					writeResearch();
					break;
					
					case 'b_rob':
					writeRobot();
					break;
					
					case 'b_gms':
					writeGames();
					break;

					default:
					writeEmpty();
					break;
				}
			}else{
				document.getElementById(buttons.at(i)).className ="unselected";
			}
		}
	}

}

function closePage() {
	// if (document.getElementById("main_body").className=='body-close')
	// {
	// document.getElementById("main_body").innerHTML = "";	
	// }
	// else
	// {
	// document.getElementById("main_body").className = 'body-close';
	// }
}

function writeHome(){
	document.getElementById("main_body").className = 'body-open';
	document.getElementById("main_body").innerHTML = "<iframe src=\'home.html\', class='section' ,scrolling='no'></iframe>";
}

function writeAboutMe(){
	document.getElementById("main_body").className = 'body-open';
	document.getElementById("main_body").innerHTML = "<iframe src=\'about_me.html\', class='section' ,scrolling='no'></iframe>";
}

function writeResearch(){
	document.getElementById("main_body").className = 'body-open';
	document.getElementById("main_body").innerHTML = "<iframe src=\'research.html\', class='section' ,scrolling='no'></iframe>";
}

function writeRobot(){
	document.getElementById("main_body").className = 'body-open';
	document.getElementById("main_body").innerHTML = "<div class='row'><div class='scolumn'><img class='arrow' id='left' src='arrow.png' onclick='shiftL_robots()' style='transform: scale(-1, 1);'></div><div class='mcolumn'><iframe id='frame', src=\'robots.html\', class='section' ,scrolling='no'></iframe></div><div class='scolumn'><img class='arrow' id='right' onclick='shiftR_robots()' src='arrow.png' style='transform: scale(1, 1);'></div></div>";
}

function writeGames(){
	document.getElementById("main_body").className = 'body-open';
	document.getElementById("main_body").innerHTML = "<div class='row'><div class='scolumn'><img class='arrow' id='left' src='arrow.png' onclick='shiftL_games()' style='transform: scale(-1, 1);'></div><div class='mcolumn'><iframe id='frame', src=\'games.html\', class='section' ,scrolling='no'></iframe></div><div class='scolumn'><img class='arrow' id='right' onclick='shiftR_games()' src='arrow.png' style='transform: scale(1, 1);'></div></div>";
}


function writeEmpty(){
	document.getElementById("main_body").innerHTML = "";
}


// test
function shiftR_robots(id_) {
	var frameObj = document.getElementById('frame');
	var projects = ['thesis', 'march','stogl','deino'];
	var current_index = 0;
	for(let i=0; i<projects.length; i++){
		if (frameObj.contentWindow.document.getElementsByClassName('project')[0].id == projects[i])
		{
		current_index = i;
		}
	}

	// frameObj.contentWindow.document.getElementsByClassName('project')[0].style.top='100vh';
	frameObj.contentWindow.document.getElementsByClassName('project')[0].className='project-hidden';
	current_index+=1;
	if (current_index>=projects.length){current_index=0;}
	// frameObj.contentWindow.document.getElementById(projects[current_index]).style.top='0vh';
	frameObj.contentWindow.document.getElementById(projects[current_index]).className='project';
	frameObj.contentWindow.document.getElementsByClassName('big')[0].innerHTML=project_titles[current_index];
	frameObj.contentWindow.document.getElementsByClassName('big_subtitle')[0].innerHTML=project_subtitles[current_index];



}

function shiftL_robots(id_) {
	var frameObj = document.getElementById('frame');
	var projects = ['thesis', 'march','stogl','deino'];
	
	var current_index = 0;
	console.log(frameObj.contentWindow.document.getElementsByClassName('project'));
	for(let i=0; i<projects.length; i++){
		if (frameObj.contentWindow.document.getElementsByClassName('project')[0].id == projects[i])
		{
		current_index = i;
		}
	}
	
	// frameObj.contentWindow.document.getElementsByClassName('project')[0].style.top='100vh';
	frameObj.contentWindow.document.getElementsByClassName('project')[0].className='project-hidden';
	current_index -=1;
	if (current_index<0){current_index=projects.length-1;}
	// frameObj.contentWindow.document.getElementById(projects[current_index]).style.top='0vh';
	frameObj.contentWindow.document.getElementById(projects[current_index]).className='project';
	frameObj.contentWindow.document.getElementsByClassName('big')[0].innerHTML=project_titles[current_index];
	frameObj.contentWindow.document.getElementsByClassName('big_subtitle')[0].innerHTML=project_subtitles[current_index];


}

//
function shiftR_games(id_) {
	var frameObj = document.getElementById('frame');
	var projects = ['infinitower', 'ouroboros', 'bushidog', 'findhome', 'pilgrimage', 'beanguys'];
	var current_index = 0;
	for(let i=0; i<projects.length; i++){
		if (frameObj.contentWindow.document.getElementsByClassName('project')[0].id == projects[i])
		{
		current_index = i;
		}
	}

	// frameObj.contentWindow.document.getElementsByClassName('project')[0].style.top='100vh';
	frameObj.contentWindow.document.getElementsByClassName('project')[0].className='project-hidden';
	current_index+=1;
	if (current_index>=projects.length){current_index=0;}
	// frameObj.contentWindow.document.getElementById(projects[current_index]).style.top='0vh';
	frameObj.contentWindow.document.getElementById(projects[current_index]).className='project';
	frameObj.contentWindow.document.getElementsByClassName('big')[0].innerHTML=project_titles[current_index];
	frameObj.contentWindow.document.getElementsByClassName('big_subtitle')[0].innerHTML=project_subtitles[current_index];



}

function shiftL_games(id_) {
	var frameObj = document.getElementById('frame');
	var projects = ['infinitower', 'ouroboros', 'bushidog', 'findhome', 'pilgrimage', 'beanguys'];
	
	var current_index = 0;
	console.log(frameObj.contentWindow.document.getElementsByClassName('project'));
	for(let i=0; i<projects.length; i++){
		if (frameObj.contentWindow.document.getElementsByClassName('project')[0].id == projects[i])
		{
		current_index = i;
		}
	}
	
	// frameObj.contentWindow.document.getElementsByClassName('project')[0].style.top='100vh';
	frameObj.contentWindow.document.getElementsByClassName('project')[0].className='project-hidden';
	current_index -=1;
	if (current_index<0){current_index=projects.length-1;}
	// frameObj.contentWindow.document.getElementById(projects[current_index]).style.top='0vh';
	frameObj.contentWindow.document.getElementById(projects[current_index]).className='project';
	frameObj.contentWindow.document.getElementsByClassName('big')[0].innerHTML=games_titles[current_index];
	frameObj.contentWindow.document.getElementsByClassName('big_subtitle')[0].innerHTML=games_subtitles[current_index];


}
