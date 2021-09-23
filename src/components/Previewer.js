import Container from "../common/Container";
import Title from "../common/Title";

const Previewer = (props) => {
    return (
        <Container>
            <Title htmlFor="preview">Preview</Title>
            <div id="preview">{props.display}</div>
        </Container>
    );
};

export default Previewer;
