import Container from "./Container";
import Title from "./Title";

const Previewer = (props) => {
    return (
        <Container>
            <Title htmlFor="preview">Preview</Title>
            <div id="preview">{props.display}</div>
        </Container>
    );
};

export default Previewer;
