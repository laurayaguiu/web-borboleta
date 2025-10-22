

export default function Home() {
  return (
    <body>
        
        <nav className="navbar" id="navbar">
            <section className="nav-container">
                <header className="nav-header">
                    
                    <a href="#home" className="logo" aria-label="Início">V</a>

                    
                    <ul className="nav-links desktop-nav">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#sobre-nos" className="nav-link">Sobre Nós</a></li>
                        <li><a href="#menu" className="nav-link">Menu</a></li>
                        <li><a href="#contatos" className="nav-link">Contatos</a></li>
                    </ul>

                    
                    <button id="dark-mode-toggle" className="dark-mode-btn" aria-label="Alternar modo escuro">🌙</button>
                </header>

                
                <section className="mobile-nav" id="mobile-nav">
                    <ul className="mobile-nav-links">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#sobre-nos" className="nav-link">Sobre Nós</a></li>
                        <li><a href="#menu" className="nav-link">Menu</a></li>
                        <li><a href="#contatos" className="nav-link">Contatos</a></li>
                    </ul>
                </section>
            </section>
        </nav>

        
        <main>
           
            <section id="home" className="hero-section">
                <section className="hero-container">
                    <aside className="signup-btn-container">
                        import Link from "next/link";

                    </aside>

                    <header className="hero-header">
                        <h1 className="hero-title">VELOURS</h1>
                        <p className="hero-subtitle">Pâtisserie</p>
                    </header>
                </section>
            </section>

            
            <section id="sobre-nos" className="sobre-nos-section">
                <section className="container">
                    <header className="section-header">
                        <h2>Sobre Nós</h2>
                    </header>

                    <article className="sobre-nos-content">
                        <p className="main-text">
                            Seven dishes. Six drinks. That's what we started with. Our initial menu was lean but perfectly curated.
                            Our offerings have grown a lot since then, but our commitment to perfection remains.
                        </p>

                        <blockquote className="quote">
                            <p>"Cada criação é uma obra de arte, cada sabor uma experiência única."</p>
                        </blockquote>
                    </article>
                </section>
            </section>

            
            <section id="menu" className="menu-section">
                <section className="container">
                    <header className="section-header">
                        <h2>No Cardápio</h2>
                    </header>

                    <section className="menu-grid">
                        <article className="menu-item menu-delights">
                            <figure className="menu-image">
                                <section className="menu-content">
                                    <h3>Pequenas</h3>
                                    <h3>Delícias</h3>
                                </section>
                            </figure>
                        </article>

                        <article className="menu-item menu-savory">
                            <figure className="menu-image">
                                <section className="menu-content">
                                    <h3>Tentação</h3>
                                    <h3>Salgada</h3>
                                </section>
                            </figure>
                        </article>

                        <article className="menu-item menu-cakes">
                            <figure className="menu-image">
                                <section className="menu-content">
                                    <h3>Arte em</h3>
                                    <h3>Bolos</h3>
                                </section>
                            </figure>
                        </article>
                    </section>

                    <footer className="menu-footer">
                        <p>
                            Explore nossa seleção cuidadosamente curada de doces artesanais, salgados irresistíveis e bolos que são verdadeiras obras de arte.
                        </p>
                    </footer>
                </section>
            </section>

            
            <section className="novidades-section">
                <aside className="novidades-bg">
                    <figure className="novidades-image"></figure>
                </aside>

                <section className="container">
                    <section className="novidades-grid">
                        <section></section>
                        <section className="novidades-content-wrapper">
                            <article className="novidades-content">
                                <header>
                                    <h2>Novidades</h2>
                                </header>

                                <section className="news-items">
                                    <article className="news-item news-winter">
                                        <h3>Coleção de Inverno</h3>
                                        <p>Novos sabores sazonais chegaram! Experimente nossos chocolates quentes artesanais e tortas de frutas vermelhas.</p>
                                    </article>

                                    <article className="news-item news-custom">
                                        <h3>Encomendas Especiais</h3>
                                        <p>Bolos personalizados para ocasiões especiais. Entre em contato para criar sua obra-prima única.</p>
                                    </article>
                                </section>
                            </article>
                        </section>
                    </section>
                </section>
            </section>

            
            <section id="contatos" className="contatos-section">
                <section className="container">
                    <header className="section-header">
                        <h2>Contatos</h2>
                    </header>

                    <section className="contatos-grid">
                        <section className="contact-info">
                            <article className="contact-item">
                                <section className="contact-content">
                                    <span className="contact-icon">📞</span>
                                    <section className="contact-text">
                                        <h3>Telefone</h3>
                                        <p><a href="tel:+5511990500361">(11) 99050-0361</a></p>
                                    </section>
                                </section>
                            </article>

                            <article className="contact-item">
                                <section className="contact-content">
                                    <span className="contact-icon">📧</span>
                                    <section className="contact-text">
                                        <h3>E-mail</h3>
                                        <p><a href="mailto:contato@velourspatisserie.com">contato@velourspatisserie.com</a></p>
                                    </section>
                                </section>
                            </article>

                            <article className="contact-item">
                                <section className="contact-content">
                                    <span className="contact-icon">📱</span>
                                    <section className="contact-text">
                                        <h3>Redes Sociais</h3>
                                        <p>
                                            <a href="https://www.instagram.com/veloureepatisserie" target="_blank">
                                                Instagram: @veloureepatisserie
                                            </a>
                                        </p>
                                    </section>
                                </section>
                            </article>
                        </section>
                    </section>

                    
                    <footer className="footer-content">
                        <nav className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#sobre-nos">Sobre Nós</a>
                            <a href="#menu">Menu</a>
                            <a href="#contatos">Contatos</a>
                        </nav>
                        <section className="footer-bottom">
                            <p>&copy; 2025 VELOURS Pâtisserie. Todos os direitos reservados.</p>
                        </section>
                    </footer>
                </section>
            </section>
        </main>

        
        <script src="script.js"></script>
    </body>
  );
}
import Formulario from "./components/Formulario";

export default function Home() {
  return (
    <main>
      {/* seu conteúdo existente */}
      <section id="home" className="hero-section">
        <a href="#formulario" className="signup-btn">Cadastre-se!</a>
      </section>

      {/* seção com o formulário */}
      <section id="formulario" className="form-section">
        <Formulario />
      </section>
    </main>
  );
}
