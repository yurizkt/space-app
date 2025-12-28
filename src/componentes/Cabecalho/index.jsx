import styled from "styled-components";
import InputEstilizado from "../CampoTexto";


const HeaderEstilizado = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`
const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <InputEstilizado></InputEstilizado>
        </HeaderEstilizado>
    );
}

export default Cabecalho;