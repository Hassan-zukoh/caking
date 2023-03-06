
document.getElementsByTagName  //enables to get element by class and mostly specify with an array
document.getElementById   //Here each id shares its own name
document.querySelector  // //eg  

document.querySelector ("#lists a")[0].style.colour = 'red';


//HOW TO USE JS TO CHANGE HTML and css

let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit" , (e) =>{
    e.preventDefault();

    let name = document.getElementsByName("Name");
    let password = document.getElementsByName("Password");
    let email = document.getElementsByName("Email");

    const answers = [{
        A: "Java script"
    } , {
        A: "Brendan Eich"
    } ,  {
        A: "10 days"
    } ,  {
        A: "React"
    } , {
        A: "Document object model"}, ];
    
        
        function result(R) {

            if (R === answers) {
                alert ("You " + "are " + "so " + "Bright " + "for " + "further" + "questions!") ;
            } else {
                alert("Please " + "go " + "read " + "more " + "books, " + "Thanks");
            }
        } 
        




})






            
















