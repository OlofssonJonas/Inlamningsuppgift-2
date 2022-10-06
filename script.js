console.log("hej");

//HERE IS ALL THE VARIABLES


const signin = document.getElementById("signin");
const signout = document.getElementById("signout")
const heading = document.querySelector("h1");
const paragraph = document.createElement("p");
const login = document.getElementById("form");
const foot = document.querySelector("footer");
let user = document.getElementById("name");
let pass = document.getElementById("psw");


signin.addEventListener("click", correct) 
signout.addEventListener("click", goout)


//HERE IS THE LOG-OUT BUTTON HIDDEN FROM START

signout.style.display ="none"

//MYARRAY

let objPeople = [
    {
        user: "Jonas",
        pass: "Olofsson"
        
    },
    {
        user: "Viktoria",
        pass: "Sofia"
        
    },
    { 
        user: "fredrik",
        pass: "12345"
    }
    
]

//HÄR ÄR ANVÄNDAREN FORTFARANDE INLOGGAD NÄR JAG REFRESHAR SIDAN


function init(){
    if(localStorage.getItem("userName")){

        success()
    }
}
init()


//HERE IS THE FOR OF LOOP AND LS


function correct() {
    for(let people of objPeople){
        if (people.user == user.value && people.pass == pass.value){
            localStorage.setItem("userName", user.value);
            success()
            return
        }
            foot.appendChild(paragraph);
            paragraph.innerHTML = "Fel användanamn och/eller lösenord";
            paragraph.style.color = "red";
    }
    
}


      //HER IS THE FUNCTION FOR SUCCESSFUL LOGIN


function success(){
    let userkey = localStorage.getItem("userName")
    heading.innerText = "Välkommen" + " " + userkey + "!";
    foot.innerText = "";
    login.style.display = "none";
    signout.style.display = "block";
    
}
      //HERE IS THE FUNCTION OF THE LOG-OUT BUTTON

function goout(){
    user.value = "";
    pass.value = "";
    signout.style.display = "none";
    heading.innerText = "Välkommen att logga in";
    login.style.display = "block";
    signin.style.display = "block";
    foot.innerHTML = "Vid problem med att logga in Maila @hotmail.com";
    localStorage.removeItem("userName")
    
    
}


