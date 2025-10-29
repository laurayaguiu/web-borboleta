import Link from 'next/link';

export function Nav() {
    return (
        <nav>
                <header className="navbar">
                <h1 className="logo">V</h1>
                <ul className="nav-links">
                    <li><link href="#home">Home</link></li>
                    <li><link href="#sobre">Sobre</link></li>
                    <li><link href="#menu">Menu</link></li>
                    <li><link href="#contato">Contato</link></li>
                </ul>
                <button id="dark-toggle">🌙</button>
                </header>
        </nav>
    )
}