import styled from "styled-components";
import Container from "../common/Container";
import Title from "../common/Title";

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    flex-grow: 1;
    resize: none;
    box-sizing: border-box;
    padding: 8px;
`;

const Editor = (props) => {
    return (
        <Container>
            <Title htmlFor="editor">Editor</Title>
            <TextArea id="editor" onInput={props.onInput} value={props.input}></TextArea>
        </Container>
    );
};

export default Editor;
