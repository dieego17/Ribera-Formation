const courses = document.getElementById("courses");
const closeform = document.getElementById("closeform");

const accountbtn = document.getElementById("accountbtn");
const headerform = document.getElementById("headerform");

const btnlogin = document.getElementById("btnlogin");

const mostrarLogin = () => {
    if(headerform.classList.contains("displaynone")){
        headerform.classList.remove("displaynone")
        headerform.classList.add("displayflex")
        headerform.classList.add("show-form")
    }else if(headerform.classList.contains("displayflex")){
        headerform.classList.remove("displayflex")
        headerform.classList.add("hide-form")
    }
    
};
accountbtn.addEventListener("click", mostrarLogin)

closeform.addEventListener("click", (event) =>{
    if(headerform.classList.contains("displayflex")){
        headerform.classList.remove("displayflex")
        headerform.classList.remove("show-form")
        headerform.classList.add("hide-form")
    }
})
btnlogin.addEventListener("click", (event) =>{
    if(headerform.classList.contains("displayflex")){
        headerform.classList.remove("displayflex")
        headerform.classList.remove("show-form")
        headerform.classList.add("hide-form")
    }
})

const ocultarLog = (event)=>{
    headerform.classList.add("displaynone")
}

document.addEventListener("DOMContentLoaded", ocultarLog)

