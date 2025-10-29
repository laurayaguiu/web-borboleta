import './formulario.css';
export default function Formulario() {
    return (
        <>
            <section className="formulario-section">
                <form id="form-card" class="form-card">
                <h2>Formulário de Cadastro</h2>

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" required/>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required/>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" placeholder="00000-000" required/>

                <div className="btns">
                    <button type="button" className="voltar" onclick="history.back()">Voltar</button>
                    <button type="submit" id="enviar" className="enviar">Enviar</button>
                </div>
                </form>
            </section>
        </>
    )
}