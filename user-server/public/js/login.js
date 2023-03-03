
let submit = document.querySelector(".submit-button")

//localStorage.setItem("username", "")
//console.log(localStorage.getItem("username"))

submit.addEventListener("click", event =>{
    event.preventDefault()

    let data = {'username': " " + document.querySelector(".user-text").value + " " , 'password' : " "+ document.querySelector(".password-text").value + " "}
    //console.log(data)
    doRequest(data, "login")

        /*if(response != null){
            if(response.username === "true"){
                document.location = "/"
            }else{
                accessDenied("Wrong username or password", 1)
            }
        }else{
            accessDenied("can't connect to the server, check your connection or the server status", 2)
        }*/
        //console.log(response)
    //})
})

async function doRequest(data, type){
    await fetch("/" + type + "/data", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response =>{

        return response.json();
    }).then(res =>{
        
        console.log(res)
    })
}


function accessDenied(reason, id){

    

}
