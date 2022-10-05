console.log("hej");
//alert ("Hello world")


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

//ARRRAY


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

//Varför funkar det inte?

/*function init() {
    if(localStorage.getItem ("objPeople", "user.value")){

        correct();
    }
}
init();*/

//HERE IS THE FUNCTION ON THE INLOG SIDE

function correct() {
    for(let people of objPeople){
        //localStorage.setItem("objPeople", JSON.stringify(user.value));
        if (people.user == user.value && people.pass == pass.value){
            heading.innerText = "Välkommen" + " " + user.value + "!";
            foot.innerText = "";
            login.style.display = "none";
            signout.style.display = "block";
            console.log(people);
            return
        }
        foot.appendChild(paragraph);
        paragraph.innerHTML = "Fel användanamn och/eller lösenord";
        paragraph.style.color = "red";
    }
    
}
    
    //HERE IS THE FUNCTION ON THE LOG-OUT BUTTON
    
    function goout(){
        user.value = "";
        pass.value = "";
        signout.style.display = "none";
        heading.innerText = "Välkommen att logga in";
        login.style.display = "block";
        signin.style.display ="block";
        foot.innerHTML = "Vid problem med att logga in Maila @hotmail.com";
        
        //let getmyZoo = JSON.parse(localStorage.getItem("people"));
    }

//HÄR SPARAR JAG UPPGIFTERNA I LOCALSTORAGE

//localStorage.setItem("objPeople", JSON.stringify(objPeople));
//let getobjPeople = JSON.parse(localStorage.getItem("objPeople"));


//console.log("Get my people", getobjPeople);


//localStorage.setItem("user1", "Jonas");
//localStorage.setItem("pass1", "Olofsson");

//localStorage.setItem("user2", "Viktoria");
//localStorage.setItem("pass2", "Sofia");

//localStorage.setItem("user3" ,"fredrik");
//localStorage.setItem("pass3", "12345");

//let user1 = localStorage.getItem("user1" ,"pass1");
//let user2 = localStorage.getItem("user2", "pass2");
//let user3 = localStorage.getItem("user3", "pass3");


//console.log(user3)
