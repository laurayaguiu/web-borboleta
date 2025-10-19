export function Header() {
    return (
        <header className="flex px-2 bg-zinc-900 text-white">
            <diV className="flex items-center justify-between x-full mx-auto max-x-7x1">
                <div>
                    <h1>Velours patiseri</h1>
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>Home</li>
                        <li>Sobre Nós</li>
                        <li>Menu</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </diV>
        </header>
    )
}