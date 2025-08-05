// Definición del componente <main-header>
class MainHeader extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM para encapsulación
    this.attachShadow({ mode: 'open' });
    
    // Template del componente
    this.shadowRoot.innerHTML = `
    <style>
        @import "../../css/layout/header.css";
        
        header {
            background: #fff;
            box-shadow: 0 2px 10px #0000001a;
            padding: 1rem;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    </style>
    
    <header>
        <div class="logo">
            <span class="logo-icon">❀</span>
            <span class="main-text">Flor de Loto</span>
        </div>
        <nav-component></nav-component>
    </header>
    `;
}

    // Método llamado cuando el componente se conecta al DOM
connectedCallback() {
    console.log('Header montado');
}
}

// Registra el componente personalizado
customElements.define('main-header', MainHeader);