import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";

const FundoBrackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`;

function App() {
  return (
    <FundoBrackground>
      <EstilosGlobais />
    </FundoBrackground>
  )
}

export default App
