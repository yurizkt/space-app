import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`;

const TagsLabel = styled.p`
    font-size: 24px;
    color: #D9D9D9;
    margin: 0;
`;

const TagsButton = styled.button`
    font-size: 24px;
    color: #ffffff;
    background: rgba(217, 217, 217, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 10px;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-right: 12px;
    &:hover {
        border-color: #C98CF1;
    }

`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

const Tags = () => {
    return (
        <TagsContainer>
            <TagsLabel>Busque por tags:</TagsLabel>
            <Div>
                {tags.map((tag) => 
                    <TagsButton
                        key={tag.id}
                        onClick={() => setTag(tag.tag)}
                    >
                        {tag.titulo}
                    </TagsButton>)
                }
            </Div>
        </TagsContainer>
    );
}

export default Tags;