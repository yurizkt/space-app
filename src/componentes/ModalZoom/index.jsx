import styled from "styled-components";
import Imagens from "../Galeria/Imagens";

const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 194px;
    width: 50%;
    padding: 0;
    background-color: transparent;
    border: none;
    position: relative;
`;

const Formulario = styled.form`
    position: absolute;
    top: 24px;
    right: 24px;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        img {
            width: 24px;
            height: 24px;
            color: white;
        }
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            { foto && <>
                <Overlay>
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <Imagens foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                        <Formulario method="dialog">
                            <button formMethod="dialog">
                                <img src="/icones/fechar.png" alt="Fechar modal" />
                            </button>
                        </Formulario>
                    </DialogEstilizado>
                </Overlay>
            </>}
        </>
    );
}

export default ModalZoom;