import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagens from "./Imagens";

import styled from "styled-components";
import Populares from "./Populares";


const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ListaGaleria = styled.ul`
    width: 100%;
    list-style: none;
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;

const ItemGaleria = styled.li`
    flex-grow: 1;
`;

const Galeria = ({ fotos }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaGaleria>
                        {fotos.map((foto) => <li key={foto.id}><Imagens foto={foto} /></li>)}
                    </ListaGaleria>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    );
}

export default Galeria;