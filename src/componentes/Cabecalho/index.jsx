import styled from "styled-components";
import InputEstilizado from "../CampoTexto";


const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`
const Cabecalho = ({ filtro, setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <InputEstilizado setFiltro={setFiltro} filtro={filtro}></InputEstilizado>
        </HeaderEstilizado>
    );
}

export default Cabecalho;