import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteButtonContainer from "../containers/write/WriteButtonContainer";

const WritePage = () => {
    return (
        <>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteButtonContainer/>
        </>
    );
};

export default WritePage;