import Editor from "../../components/write/Editor";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {changeField, initialize} from "../../modules/write";

const EditorContainer = () => {
    const dispatch = useDispatch();
    const {title, content, imageUrls} = useSelector(({write}) => ({
        title: write.title,
        content: write.content,
        imageUrls: write.imageUrls,
    }));

    const onChangeEditor = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return (
        <Editor title={title} content={content} imageUrls={imageUrls} onChangeEditor={onChangeEditor}/>
    );
};

export default EditorContainer;