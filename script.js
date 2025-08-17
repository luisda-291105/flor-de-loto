        // inyectar partes de codigo

// busca al header
fetch("heider.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("header-container").innerHTML = data;
});

// busca al footer
fetch("footer.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
});

        // boton para movil

const menuToggle = document.getElementById(menu-toggle);
const navHeider = document.getElementById(nav-header);

menuToggle.addEventListener("clik", () =>{
    navHeider.classList.toggle("active");
} )
