import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteButtonContainer from "../containers/write/WriteButtonContainer";

const WritePage = () => {
    return (
        <div className='flex flex-col w-full items-center mt-3'>
            <div className='w-10/12'>
                <div className='mb-5'>
                    <EditorContainer/>
                </div>
                <div >
                    <TagBoxContainer/>
                </div>
                <div className='flex flex-col items-center mb-10'>
                    <WriteButtonContainer/>
                </div>

            </div>
        </div>
    );
};

export default WritePage;