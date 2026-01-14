import ItemNavegacao from "./ItemNavegacao/index.js";
import styled from "styled-components";

const ListaEstilizada = styled.ul`
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao ativo={true} itemAtivo={'/icones/home-ativo.png'} itemInativo={'/icones/home-inativo.png'}>Início</ItemNavegacao>
                    <ItemNavegacao itemAtivo={'/icones/mais-vistas-ativo.png'} itemInativo={'/icones/mais-vistas-inativo.png'}>Mais vistas</ItemNavegacao>
                    <ItemNavegacao itemAtivo={'/icones/mais-curtidas-ativo.png'} itemInativo={'/icones/mais-curtidas-inativo.png'}>Mais curtidas</ItemNavegacao>
                    <ItemNavegacao itemAtivo={'/icones/novas-ativo.png'} itemInativo={'/icones/novas-inativo.png'}>Novas</ItemNavegacao>
                    <ItemNavegacao itemAtivo={'/icones/surpreenda-me-ativo.png'} itemInativo={'/icones/surpreenda-me-inativo.png'}>Surpreenda-me</ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    );
}

export default BarraLateral;