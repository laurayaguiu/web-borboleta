
import './home.css';
import Image from "next/image";

export default function Home() {
  return (
    <body>
        <nav>
            <header className="navbar">
            <h1 class="logo">V</h1>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button id="dark-toggle">🌙</button>
            </header>
        </nav>

        <main>
            <section id="home" className="hero">
            <h2>VELOURS</h2>
            <p>Pâtisserie Artesanal</p>
            <a href="#menu" className="btn">Cadrastra-se!</a>
            </section>

            <section id="sobre" className="sobre-nos">
            <h2>Sobre Nós</h2>
            <p>
                Começamos com poucos produtos e muita paixão. Hoje, oferecemos doces e salgados artesanais,
                sempre com o mesmo cuidado e sabor.
            </p>
            </section>

          
            <section id="menu" className="section-menu">
            <h2>Nosso Cardápio</h2>
            <article class="menu-grid">

                <a href="#" className="card">
                <img src="limao.jpg" alt="Doces artesanais" />
                <h3>Doces</h3>
                <p>Macarons, tortas e chocolates finos.</p>
                </a>

                <a href="#" className="card">
                <img src="salgado.png" alt="Salgados deliciosos" />
                <h3>Salgados</h3>
                <p>Mini quiches e croissants deliciosos.</p>
                </a>

                <a href="#" className="card">
                <img src="bolos.jpg" alt="Bolos personalizados" />
                <h3>Bolos</h3>
                <p>Clássicos e personalizados para eventos.</p>
                </a>

            </article>
            </section>

            <section id="contato" className="contato">
            <article className="contato-container">
                <figure className="contato-imagem">
                <img src="rocambole.jpg" alt="Doces da Velours" />
                </figure>

                
                <section className="contato-texto">
                <h2>Contato</h2>
                <p>📞 (11) 99050-0361</p>
                <p>📧 contato@velours.com</p>
                <p>
                    💬 <a href="https://instagram.com/veloureepatisserie" target="_blank">Instagram</a>
                </p>
                </section>
            </article>
            </section>
        </main>

        <footer>
            <p>&copy; 2025 VELOURS Pâtisserie</p>
        </footer>
    </body>
  );
}




