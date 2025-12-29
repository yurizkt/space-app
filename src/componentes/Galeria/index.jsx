import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagens from "./Imagens";

import styled from "styled-components";
import Populares from "./Populares";


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

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
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