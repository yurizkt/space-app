import styled from "styled-components"
import Cabecalho from "./componentes/Cabecalho/index.js";
import BarraLateral from "./componentes/BarraLateral/index.js";
import TituloEstilizado from "./componentes/TituloEstilizado/index.js";
import Galeria from "./componentes/Galeria/index.js";
import ModalZoom from "./componentes/ModalZoom/index.js";
import Rodape from "./componentes/Rodape/index.js";

import fotos from "./assets/fotos.json"
import { useEffect, useState } from "react";
import { IFoto } from "./componentes/compartilhado/interfaces/foto.js";

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
  const [tag, setTag] = useState<any>(0);
  const [fotoComZoom, setFotoComZoom] = useState<IFoto | null>(null);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto:IFoto) => {
      const filtroPortag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPortag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  const aoAlternarFavorito = (foto: IFoto) => {
    if(foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorito: !fotoComZoom.favorito
      });
    };
    setFotosDaGaleria(fotosDaGaleria.map((fotoDaGaleria: IFoto) => {
        return {
          ...fotoDaGaleria,
          favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
        }
      })
    )
  }

  return (
    <FundoGradiente>
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
        foto={fotoComZoom!}
        aoFechar={() => setFotoComZoom(null)}
        aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente>
  )
}

export default App
