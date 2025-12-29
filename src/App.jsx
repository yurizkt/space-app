import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import TituloEstilizado from "./componentes/TituloEstilizado";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";

import fotos from "./assets/fotos.json"
import { useState } from "react";

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <TituloEstilizado />
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} />
    </FundoGradiente>
  )
}

export default App
