import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import TituloEstilizado from "./componentes/TituloEstilizado";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";

import fotos from "./assets/fotos.json"
import { useEffect, useState } from "react";

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
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoComZoom, setFotoComZoom] = useState(null);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPortag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPortag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotocomZoom,
        favorito: !fotocomZoom.favorito
      });
    };
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
        return {
          ...fotoDaGaleria,
          favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
        }
      })
    )
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          filtro={filtro}
          setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <TituloEstilizado />
            <Galeria
              aoFotoSelecionada={foto => setFotoComZoom(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
              fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoComZoom}
        aoFechar={() => setFotoComZoom(null)}
        aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente>
  )
}

export default App
