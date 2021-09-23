import { useState } from "react";
import styled from "styled-components";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

const Control = styled.button`
    position: absolute;
    height: 30px;
    width: 30px;
    top: 4px;
    right: 10px;
`;

function App() {
    const [displayed, setDisplayed] = useState({ editor: true, previewer: false });
    const [input, updateInput] = useState("");

    function toggle() {
        displayed.editor
            ? setDisplayed({ editor: false, previewer: true })
            : setDisplayed({ editor: true, previewer: false });
    }

    function onInput(event) {
        updateInput(event.target.value);
    }

    return (
        <div>
            <Control onClick={toggle}></Control>
            {displayed.editor && <Editor input={input} onInput={onInput}></Editor>}
            {displayed.previewer && <Previewer display={input}></Previewer>}
        </div>
    );
}

export default App;
