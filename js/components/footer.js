class FooterComponent extends HTMLElement {
    static get observedAttributes() {
        return ['company', 'phone', 'address', 'email'];
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            footer {
                background-color: #333;
                color: white;
                padding: 2rem;
                text-align: center;
            }
            .footer-title h2 {
                margin-bottom: 1rem;
            }
            .contact-info p {
                margin: 0.5rem 0;
            }
        </style>

        <footer>
            <div class="footer-title">
                <h2>Nombre de la empresa</h2>
            </div>
            <div class="contact-info">
                <p>Teléfono: </p>
                <p>Dirección: </p>
                <p>Correo: </p>
            </div>
        </footer>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.shadowRoot) return;

        switch(name) {
            case 'company':
                this.shadowRoot.querySelector('.footer-title h2').textContent = newValue;
                break;
            case 'phone':
                this.shadowRoot.querySelector('.contact-info p:nth-child(1)').textContent = `Teléfono: ${newValue}`;
                break;
            case 'address':
                this.shadowRoot.querySelector('.contact-info p:nth-child(2)').textContent = `Dirección: ${newValue}`;
                break;
            case 'email':
                this.shadowRoot.querySelector('.contact-info p:nth-child(3)').textContent = `Correo: ${newValue}`;
                break;
        }
    }
}

customElements.define('footer-component', FooterComponent);
