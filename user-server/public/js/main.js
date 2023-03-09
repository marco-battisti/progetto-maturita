
let logged = localStorage.getItem("logged")

//checkLogin()
//loadHome()

function checkLogin(){
    if(logged != null){
        if( logged === "true"){
            showFilms()
        }else{
            document.location = "/login"
        }
    }else{
        document.location = "/login"
    }
}



let userStored = localStorage.getItem("username")
let button = document.querySelector("#searchButton")
let settingsHome = document.querySelector(".settings-home")

button.addEventListener("clic", event =>{

    event.preventDefault()
    let search = document.querySelector("#searchInput").value
    document.querySelector("#searchInput").value = ""

    if(search.slice(0,1) == "/"){
        //doStuff()
    }else{
        getFilm(search)

})  

settingsHome.addEventListener("click", event=>{

    event.preventDefault()

    document.location = "/settings"
})

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


function showFilms(){

    let films = getFilm()

}

/**
 * LOADS THE HOME TITLE
*/
/*
function loadHome(){
    //DECLARING VARIABLES IN THE HEADER
    let button = document.createElement("button")
    let icon = document.createElement("ion-icon")
    let title = document.createElement("h1")
    let input = document.createElement("input")
    let form = document.createElement("form")
    let titleContainer = document.querySelector(".title-container-home")
    //console.log("banana")
    //RESETTING THE TITLE CONTAINER
    titleContainer.innerHTML = ""

    //SETTING ATTRIBUTES FOR THE TITLE
    title.className = "title-home"
    title.innerText = "DataBase Film"

    //SETTING ATTRIBUTES FOR THE ICON FOR THE SEARCH BUTTON
    icon.setAttribute("name", "search-outline")

    //SETTING ATTRIBUTES FOR THE FORM
    form.setAttribute("id", "form")
    form.setAttribute("autocomplete", "off")

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
    input.setAttribute("placeholder", "cerca un film")


    button.addEventListener("click", event=>{

        let search = input.value
        input.value = ""
    })
    
    //APPENDING THE OBJECTS IN THE FORM
    form.append(input)
    form.append(button)
    //APPENDING THE OBJECTS IN THE CONTAINER
    titleContainer.append(title)
    titleContainer.append(form)
    //titleContainer.append(button)
}*/



document.body.style.backgroundImage = localStorage.getItem("background-image");
var uploaded_image;

/*image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    `url(${uploaded_image})`;

    localStorage.setItem("background-image",`url(${uploaded_image})`);
    document.body.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});*/