// Menu hamburguesa
let menu = document.querySelector(".burger");
let header = document.querySelector(".menu");
if (!!menu && !!header) {
  menu.addEventListener("click", () => {
    header.classList.toggle("active");
  });
}

// js para formulario
function fun() {
  document.querySelector("body").classList.add("preload");
  let api_url = 'https://api.shrtco.de/v2/shorten?url=';
  let prefix_short_url = 'https://shrtco.de/'
  let a = document.querySelector(".ingreso");

  if (a.value !== "") {
    fetch(api_url + a.value)
    .then(response => response.json())
    .then(data => {
        let code_link = data.result.code;
        let currentDiv = document.querySelector(".lista");
        var itemList = `<li class="itemShortUrl">${a.value}<span>${prefix_short_url + code_link}</span></li>`
        currentDiv.innerHTML += itemList;

        var newDiv = document.querySelectorAll('.itemShortUrl');
        var lastDiv = newDiv[newDiv.length - 1]

        var copy = document.createElement("input");
        copy.setAttribute("type", "button");
        copy.setAttribute("value", "Copy");
        copy.setAttribute("class", "copy");
        copy.setAttribute("name", "copy");
        lastDiv.appendChild(copy);
        a.value = "";

        fun2();
    })

  } else {
    alert("No ha ingresado ninguna url");
    a.parentElement.classList.add("error");
  }

}

function fun2() {
  if( document.querySelector("body").classList.contains("preload")){
    document.querySelector("body").classList.remove("preload");
  }
  var lista1 = Array.from(document.querySelectorAll(".lista li span"));
  var lista2 = document.querySelectorAll(".lista li .copy");
  if (lista1 != null) {
    if (lista1.length === lista2.length) {
      for (let i = 0; i < lista1.length; i++) {
        const itemLista2 = lista2[i];
       
        itemLista2.addEventListener("click", function() {
          if (lista2 != null && lista1 != null) {
            var aux = document.createElement("input");
            aux.setAttribute("value", lista1[i].innerText);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
          }
        });
      }
    }
  }
}

 //checks whether the pressed key is "Enter"

 var ak = document.querySelector(".ingreso");

 ak.addEventListener("keydown", function (e) {
   if (e.keyCode === 13) {
     e.preventDefault()
       fun();
   }
 });