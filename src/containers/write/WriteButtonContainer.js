import WriteButton from "../../components/write/WriteButton";
import {useDispatch, useSelector} from "react-redux";
import {writePost} from "../../modules/write";
import {useEffect} from "react";

const WriteButtonContainer = () => {
    const dispatch = useDispatch();
    const {title, content, tags, post, postError} = useSelector(({write}) => ({
        title: write.title,
        content: write.content,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }));

    const onPublish = () => {
        dispatch(writePost({
                title,
                content,
                tags,
            }),
        );
    };

    useEffect(() => {
            if (post) alert('성공!');
            if (postError) console.log(postError);
        },
        [post, postError],
    );

    return (
        <WriteButton onPublish={onPublish}/>
    );
};

export default WriteButtonContainer;