import styled from "styled-components";

interface ItemNavegacaoProps {
    children: React.ReactNode;
    itemAtivo: string;
    itemInativo: string;
    ativo?: boolean;
}

interface ListProps {
  readonly $ativo?: boolean;
}

const ItemListaEstilizado = styled.li<ListProps>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ (props) => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ (props) => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
    img {
        margin-right: 10px;
    }
`;

const ItemNavegacao = ({children, itemAtivo, itemInativo, ativo = false}: ItemNavegacaoProps) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ ativo ? itemAtivo : itemInativo } alt="" />
            {children}
        </ItemListaEstilizado>
    );
}

export default ItemNavegacao;