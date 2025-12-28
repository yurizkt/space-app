import styled from "styled-components";

const FigureEstilizada = styled.figure`
    max-width: 100%;
    min-height: 328px;
    background-color: #7B78E5;
    background-image: url('/imagens/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-grow: 1;
    align-items: center;
    border-radius: 20px;
    margin: 0;
`;

const Titulo = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    margin-left: 64px;
`;

const TituloEstilizado = () => {
    return (
        <FigureEstilizada>
            <Titulo>A galeria mais completa de fotos do espaço!</Titulo>
        </FigureEstilizada>
    );
}

export default TituloEstilizado;