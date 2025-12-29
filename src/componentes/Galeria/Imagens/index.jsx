import styled from "styled-components";

import Figure from "../../Figure";

const Button = styled.button`
    border: none;
    background-color: transparent;
`;


const Imagens = ({ foto }) => {
    return (
        <Figure>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <div>
                        <Button>Favorito</Button>
                        <Button>Expandir</Button>
                    </div>
                </footer>
            </figcaption>
        </Figure>
    );
}

export default Imagens;