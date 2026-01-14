import styled from "styled-components";
import { IFoto } from "../../compartilhado/interfaces/foto";

interface FotoProps {
    foto: IFoto;
    expandida?: boolean;
    aoZoomSolicitado: (foto: IFoto) => void;
    aoAlternarFavorito: (foto: IFoto) => void;
}



interface ExpandidaProps {
    readonly $expandida: boolean;
}

const Figure = styled.figure<ExpandidaProps>`
    width: ${(props) => (props.$expandida ? '100%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: #fff;
        box-sizing: border-box;
        padding: 12px;
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
        h3{
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
    }
`;

const ButtonIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        gap: 8px;
    }
`;


const Imagens = ({ foto, aoZoomSolicitado, aoAlternarFavorito }: FotoProps, expandida = false) => {
    const iconeFavorito = foto.favorito ? "/icones/favorito-ativo.png" : "/icones/favorito.png";
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            { foto.titulo &&
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <Rodape>
                        <h4>{foto.fonte}</h4>
                        <div>
                            <ButtonIcone onClick={() => aoAlternarFavorito(foto)}>
                                <img src={iconeFavorito} alt="Ícone de favorito" />
                            </ButtonIcone>
                            {!expandida &&
                                <ButtonIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                                    <img src="/icones/expandir.png" alt="Ícone de expandir" />
                                </ButtonIcone>}
                        </div>
                    </Rodape>
                </figcaption>
            }
        </Figure>
    );
}

export default Imagens;