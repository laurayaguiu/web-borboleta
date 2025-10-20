
import "./globals.css";

export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav class="navbar" id="navbar">
            <section class="nav-container">
                <header class="nav-header">
                    <section class="logo-section">
                        <figure class="logo">
                            <span>V</span>
                        </figure>
                    </section>
                    
                    <section class="nav-links desktop-nav">
                        <a href="#home" class="nav-link">HOME</a>
                        <a href="#sobre-nos" class="nav-link">SOBRE NÓS</a>
                        <a href="#menu" class="nav-link">MENU</a>
                        <a href="#contatos" class="nav-link">CONTATOS</a>
                    </section>
                    <section class="button">
                        <button id="dark-mode-toggle">🌙</button>
                    </section>
                </header>
                
                <section class="mobile-nav" id="mobile-nav">
                    <nav class="mobile-nav-links">
                        <a href="#home" class="nav-link">HOME</a>
                        <a href="#sobre-nos" class="nav-link">SOBRE NÓS</a>
                        <a href="#menu" class="nav-link">MENU</a>
                        <a href="#contatos" class="nav-link">CONTATOS</a>
                    </nav>
                </section>
            
            </section>
            
        </nav>
        {children}
      </body>
    </html>
  );
}
