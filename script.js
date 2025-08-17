        // inyectar partes de codigo

// busca al header
fetch("heider.html")
// lo convierte a texto (HTML) 
.then(Response => Response.text()) 
// lo inserta dentro del div con id header-container
.then(data => {
    document.getElementById("header-container").innerHTML = data;
    
                // boton para movil
const menuToggle = document.getElementById("menu-toggle");
const navHeader = document.getElementById("nav-header");

menuToggle.addEventListener("click", () =>{
    navHeader.classList.toggle("active");
})
});

// busca al footer
fetch("footer.html")
// lo convierte a texto (HTML)
.then(response => response.text())
// lo inserta dentro del div con id header-containe
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
    
});


