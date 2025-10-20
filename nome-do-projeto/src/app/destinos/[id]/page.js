import Image from "next/image";
import styles from "./destinos.module.css";

export default function DestinoPage({params}) {
    const dadosDestino = {
        bolos: {
            nome: '',
            descricao: '',
            caminhoImagem: '/imagens/bolos.jpg'
        };
    }

    const destino = dadosDestino[params.id];

    if (!destino) {
        return <p>Destino não encontrado</p>
    }

    return (
        <section>
            <p>o html da pag q o link img direciona</p>
        </section>
    )
}