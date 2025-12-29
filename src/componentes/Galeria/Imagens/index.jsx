import styled from "styled-components";

import Figure from "../../Figure";

const Button = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


const Imagens = ({ foto, expandida = false, aoZoomSolicitado }) => {
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <div>
                        <Button>
                            <img src="/icones/favorito.png" alt="Ícone de favorito" />
                        </Button>
                        {!expandida && <Button aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Ícone de expandir" />
                        </Button>}
                    </div>
                </footer>
            </figcaption>
        </Figure>
    );
}

export default Imagens;