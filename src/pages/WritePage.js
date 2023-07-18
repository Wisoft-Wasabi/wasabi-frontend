import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteButtonContainer from "../containers/write/WriteButtonContainer";

const WritePage = () => {
    return (
        <div>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteButtonContainer/>
        </div>
    );
};

export default WritePage;