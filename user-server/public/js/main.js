const { response } = require("express");

let imgStored = localStorage.getItem("background-image")
let passwordStored = localStorage.getItem("password")
let userStored = localStorage.getItem("username")

loadHome()

document.body.style.backgroundImage = localStorage.getItem("background-image");
var uploaded_image;

image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    `url(${uploaded_image})`;

    localStorage.setItem("background-image",`url(${uploaded_image})`);
    document.body.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

let settingsHome = document.querySelector(".settings-home")


settingsHome.addEventListener("click", event=>{

    event.preventDefault()


})








function register(){

}

function encryptPassword(){

}

function login(){

    let encryptedPassword = encryptPassword()
    fetch("localhost:5000/login/"+username+"&" + encryptedPassword).then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })
}

function getUser(username){

    fetch("localhost:5000/users/banana").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })
}

function getFilms(){
    fetch("localhost:5000/films/").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })
}

function getFilm(filmName){

}

function getAuthors(){
    fetch("localhost:5000/authors/").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })
}

function updateFilm(){

}

function newFilm(){

}



var crypt = {
    // (B1) THE SECRET KEY
    secret : "CIPHERKEY",
   
    // (B2) ENCRYPT
    encrypt : (clear) => {
      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      cipher = cipher.toString();
      return cipher;
    },
   
    // (B3) DECRYPT
    decrypt : (cipher) => {
      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      decipher = decipher.toString(CryptoJS.enc.Utf8);
      return decipher;
    }
};

function loadLogin(){

}

function loadHome(){

    //                          SAMPLE
    /* body
     <header class="title-home">
            <h1 class="title">DataBase Film</h1>

            <input type="text" class="input-text" name="" id="">
        </header>


        <main class="main-home">



        </main>

        <footer class="footer-home">
            
            <button type="submit" class="Settings-home">Settings</button>

        </footer>
    
    */
    
    //DECLARING VARIABLES IN THE HEADER
    let button = document.createElement("button")
    let icon = document.createElement("ion-icon")
    let title = document.createElement("h1")
    let input = document.createElement("input")
    let titleContainer = document.querySelector("title-container-home")
    
    //RESETTING THE TITLE CONTAINER
    titleContainer.innerHTML = ""

    //SETTING ATTRIBUTES FOR THE TITLE
    title.className = "title-home"
    title.innerText = "DataBase Film"

    //SETTING ATTRIBUTES FOR THE ICON FOR THE SEARCH BUTTON
    icon.setAttribute("name", "search-outline")

    //SETTING ATTRIBUTES FOR THE SEARCH BUTTON
    button.setAttribute("type", "submit")
    button.setAttribute("id", "search-home")
    button.setAttribute("value", "search")
    button.setAttribute("class", "btn btn-dark")
    button.innerText = "search"
    
    //APPENDING THE ICON IN THE BUTTON
    button.append(icon)

    //SETTING ATTRIBUTES FOR THE INPUT BAR
    input.className = "input-home"
    input.setAttribute("type", "text")
    input.setAttribute("name", "")
    input.setAttribute("id", "")
    
    //APPENDING THE OBJECTS IN THE CONTAINER
    titleContainer.append(title)
    titleContainer.append(button)
}