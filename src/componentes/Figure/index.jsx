import styled from "styled-components";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '100%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    & > img {
        max-width: 100%;
    }
    figcaption {
        background-color: #001634;
        color: #fff;
        padding: 12px;
        box-sizing: border-box;
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
        h3{
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            div {
                display: flex;
                gap: 8px;
            }
        }
    }
`;

export default Figure;