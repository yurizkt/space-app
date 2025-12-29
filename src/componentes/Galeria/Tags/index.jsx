import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 56px 0 39px;
`;

const TagsLabel = styled.p`
    font-size: 24px;
    color: #ffffff;
    margin: 0 18px 0 0;
`;

const TagsButton = styled.button`
    font-size: 24px;
    color: #ffffff;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-right: 12px;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        border-color: #C98CF1;
    }

`;

const Tags = () => {
    return (
        <TagsContainer>
            <TagsLabel>Busque por tags:</TagsLabel>
            {tags.map((tag) => <TagsButton key={tag.id}>{tag.titulo}</TagsButton>)}
        </TagsContainer>
    );
}

export default Tags;