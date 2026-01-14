import Titulo from "../Titulo";
import Imagens from "./Imagens";
import Tags from "./Tags";

import styled from "styled-components";
import Populares from "./Populares";
import { IFoto } from "../compartilhado/interfaces/foto";

interface GaleriaProps {
    fotos: IFoto[];
    setTag: React.Dispatch<React.SetStateAction<string>>;
    aoFotoSelecionada: (foto: IFoto) => void;
    aoAlternarFavorito: (foto: IFoto) => void;
}


const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }: GaleriaProps) => {
    return (
        <>
            <Tags setTag={event => setTag(event)} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map((foto) =>
                            <Imagens
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                key={foto.id}
                                foto={foto} />
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;