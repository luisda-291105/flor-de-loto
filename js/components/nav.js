class NavComponent extends HTMLElement {
connectedCallback() {
    this.innerHTML = `
    
    <nav>
        <ul>
            <li><a href="/html/index.html">Inicio</a></li>
            <li><a href="/html/auth/login.html">Login</a></li>
        </ul>
        </nav>
    `;
}
}

customElements.define('nav-component', NavComponent);