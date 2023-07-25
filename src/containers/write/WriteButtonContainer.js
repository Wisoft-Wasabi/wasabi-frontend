import WriteButton from "../../components/write/WriteButton";
import {useDispatch, useSelector} from "react-redux";
import {writeBoard} from "../../modules/write";
import {useEffect} from "react";

const WriteButtonContainer = () => {
    const dispatch = useDispatch();
    const {title, content, tags, board, boardError} = useSelector(({write}) => ({
        title: write.title,
        content: write.content,
        tags: write.tags,
        board: write.board,
        boardError: write.boardError,
    }));

    const onPublish = () => {
        dispatch(writeBoard({
                title,
                content,
                tags,
            }),
        );
    };

    useEffect(() => {
            if (board) console.log('게시글 작성 성공');
            if (boardError) console.log(boardError);
        },
        [board, boardError],
    );

    return (
        <WriteButton onPublish={onPublish}/>
    );
};

export default WriteButtonContainer;