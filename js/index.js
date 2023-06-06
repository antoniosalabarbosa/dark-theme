const body = document.body;
const menu = document.querySelector("#menu");
const changeTheme = document.querySelector("#changeTheme");
const btn_span = changeTheme.querySelector("span");
const form = document.querySelector("form");

function themeSetted(){
    if(body.classList.contains("light-theme")){
        btn_span.textContent = "Light";
        localStorage.setItem("theme", "light-theme");
    }
    else if(body.classList.contains("dark-theme")){
        btn_span.textContent = "Dark";
        localStorage.setItem("theme", "dark-theme");
    }
}

if(localStorage.getItem("theme")){
    body.classList.add(localStorage.getItem("theme"));
}
else{
    body.classList.add("light-theme");
}

menu.addEventListener("click", ()=> menu.classList.toggle("active") );

changeTheme.addEventListener("click", ()=>{
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    themeSetted();

    localStorage.setItem("theme", body.classList[0]);
});

form.addEventListener("submit", event => event.preventDefault() );