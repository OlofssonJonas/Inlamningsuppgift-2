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

function init(){
    if(localStorage.getItem("userName")){

        success()
    }
    

}
init()

    //const userName = JSON.parse(localStorage.getItem("userName"))

//HERE IS THE FUNCTION ON THE INLOG SIDE

// Ta bort ?? localstorage.setItem ("isLoggedIn", JSON.stringify(true))


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

function success(){
    let userkey = localStorage.getItem("userName")
    heading.innerText = "Välkommen" + " " + userkey + "!";
    foot.innerText = "";
    login.style.display = "none";
    signout.style.display = "block";
    //let getuserName = JSON.parse(localStorage.getItem("userName"));
    
}
//HERE IS THE FUNCTION ON THE LOG-OUT BUTTON

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

//HÄR SPARAR JAG UPPGIFTERNA I LOCALSTORAGE

//localStorage.setItem("objPeople", JSON.stringify(objPeople));
//let getobjPeople = JSON.parse(localStorage.getItem("objPeople"));


//console.log(user3)

//btoa ("Hello World")
//console.log(btoa)

/*
//SOM FÖRSTA GREJ, HÄMTA FRÅN LS OCH KOLLA OM MAN ÄR INLOGGAD

function init(){
    if(localstorage.getItem("isLoggedIn"))
    succcess()

    init()
    const isLoggedIn = JSON.parse(localstorage)
}

//VID LYCKAD INLOGGNIN SPARA TILL LS

function login() {
    localstora.setItem ("isLoggedIn", JSON.stringify(true))
    success()

    function success() {
        console.log("success")
    }
}
}

//VID UTLOGGNINg TAR VI BORT INFON FRÅN LS

function logout(){
    localstorage.removeItem("isLoggedIn")



*/