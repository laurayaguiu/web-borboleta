import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <body>
    <main>
        <section id="home" class="hero-section">
            <section class="hero-container">
                <aside class="signup-btn-container">
    <a href="formulario.html" class="signup-btn">Cadastra-se!</a>
</aside>

                
                <header class="hero-header">
                    <h1 class="hero-title">VELOURS</h1>
                    <p class="hero-subtitle">Pâtisserie</p>
                </header>
                
            </section>
        </section>
        <section id="sobre-nos" class="sobre-nos-section">
            <section class="container">
                <section class="sobre-nos-grid">
                    <header class="sobre-nos-header">
                        <h2>SOBRE NÓS</h2>
                    </header>
                    
                    <article class="sobre-nos-content">
                        <p class="main-text">
                            Seven dishes. Six drinks. That's what we started with. Our initial menu was lean but perfectly curated. Our offerings have grown a lot since then, but our commitment to perfection remains.
                        </p>
                        
                        <blockquote class="quote">
                            <p>"Cada criação é uma obra de arte, cada sabor uma experiência única."</p>
                        </blockquote>

                    </article>
                </section>
            </section>
        </section>

        <section id="menu" class="menu-section">
            <section class="container">
                <header class="menu-header">
                    <h2>NO CARDÁPIO</h2>
                </header>
                
                <section class="menu-grid">
                    <article class="menu-item menu-delights">
                        <figure class="menu-image">
                            <section class="menu-content">
                                <h3>Pequenas</h3>
                                <h3>Delícias</h3>
                            </section>
                        </figure>
                    </article>
                    
                    <article class="menu-item menu-savory">
                        <figure class="menu-image">
                            <section class="menu-content">
                                <h3>Tentação</h3>
                                <h3>Salgada</h3>
                            </section>
                        </figure>
                    </article>
                    
                    <article class="menu-item menu-cakes">
                        <figure class="menu-image">
                            <section class="menu-content">
                                <h3>Arte em</h3>
                                <h3>Bolos</h3>
                            </section>
                        </figure>
                    </article>
                </section>
                
                <footer class="menu-footer">
                    <p>Explore nossa seleção cuidadosamente curada de doces artesanais, salgados irresistíveis e bolos que são verdadeiras obras de arte.</p>
                </footer>
            </section>
        </section>

        
        <section class="novidades-section">
            <aside class="novidades-bg">
                <figure class="novidades-image">
                    
                </figure>
            </aside>
            
            <section class="container">
                <section class="novidades-grid">
                    <section></section>
                    <section class="novidades-content-wrapper">
                        <article class="novidades-content">
                            <header>
                                <h2>NOVIDADES</h2>
                            </header>
                            
                            <section class="news-items">
                                <article class="news-item news-winter">
                                    <h3>Coleção de Inverno</h3>
                                    <p>Novos sabores sazonais chegaram! Experimente nossos chocolates quentes artesanais e tortas de frutas vermelhas.</p>
                                </article>
                                
                                <article class="news-item news-custom">
                                    <h3>Encomendas Especiais</h3>
                                    <p>Bolos personalizados para ocasiões especiais. Entre em contato para criar sua obra-prima única.</p>
                                </article>
                            </section>
                        </article>
                    </section>
                </section>
            </section>
        </section>

        
        <section id="contatos" class="contatos-section">
            <section class="container">
                <header class="contatos-header">
                    <h2>CONTATOS</h2>
                </header>
                
                <section class="contatos-grid">
                    <section class="contact-info">
                        
                        <article class="contact-item">
                            <section class="contact-content">
                                <span class="contact-icon">📞</span>
                                <section class="contact-text">
                                    <h3>Telefone</h3>
                                    <p>
                                        <a href="tel:+5511999998888">(11) 99050-0361</a>
                                    </p>
                                </section>
                            </section>
                        </article>
                    
                        <article class="contact-item">
                            <section class="contact-content">
                                <span class="contact-icon">📧</span>
                                <section class="contact-text">
                                    <h3>E-mail</h3>
                                    <p>
                                        <a href="/cdn-cgi/l/email-protection#f4979b9a8095809bb48291989b8186878495809d878791869d91da979b99"><span class="__cf_email__" data-cfemail="b6d5d9d8c2d7c2d9f6c0d3dad9c3c4c5c6d7c2dfc5c5d3c4dfd398d5d9db">[email&#160;protected]</span></a>
                                    </p>
                                </section>
                            </section>
                        </article>

                        <article class="contact-item">
                            <section class="contact-content">
                                <span class="contact-icon">📱</span>
                                <section class="contact-text">
                                    <h3>Redes Sociais</h3>
                                    <p>
                                        <a href="https://www.instagram.com/veloureepatisserie?igsh=MWRleXZkaTJzNTBnZg==">Instagram: @veloureepatisserie</a>
                                    </p>
                                </section>
                            </section>
                        </article>
                    </section>
                </section>
        
                <footer class="footer-content">
                    <section class="footer-links">
                        <a href="#home">Home</a>
                        <a href="#sobre-nos">Sobre Nós</a>
                        <a href="#menu">Menu</a>
                        <a href="#contatos">Contatos</a>
                    </section>
                    <section class="footer-bottom">
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