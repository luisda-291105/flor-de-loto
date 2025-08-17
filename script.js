        // inyectar partes de codigo

// busca al header
fetch("heider.html") // busca el archivo heider.html
.then(Response => Response.text()) // lo convierte a texto (HTML)
.then(data => {
    // lo inserta dentro del div con id header-container
    document.getElementById("header-container").innerHTML = data;
});

// busca al footer
fetch("footer.html")
.then(response => response.text())
.then(data => {
    
    document.getElementById("footer-container").innerHTML = data;
    
            // boton para movil


const menuToggle = document.getElementById("menu-toggle");
const navHeader = document.getElementById("nav-header");

menuToggle.addEventListener("click", () =>{
    navHeader.classList.toggle("active");
} )
});


