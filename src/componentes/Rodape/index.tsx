import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244f;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px
    }
`;

const RodapeTexto = styled.p`
    color: #D9D9D9;
    font-size: 16px;
    margin: 0;
`;

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Yzicatti.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;