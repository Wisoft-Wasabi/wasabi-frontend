import WriteButton from "../../components/write/WriteButton";
import {useDispatch, useSelector} from "react-redux";
import {writeBoard} from "../../modules/write";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const WriteButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {title, content, tag, board, boardError, loading} = useSelector(({write, loading}) => ({
        title: write.title,
        content: write.content,
        tag: write.tag,
        board: write.board,
        boardError: write.boardError,
        loading: loading['write/WRITE_BOARD'],
    }));

    const onPublish = () => {
        dispatch(writeBoard({
                title,
                content,
                tag,
            }),
        );
    };

    useEffect(() => {
        if (!loading && board) {
            navigate('/');
        }

        if (!loading && boardError) {
            alert('Fail to write board.');
        }
    }, [loading]);

    return (
        <WriteButton onPublish={onPublish}/>
    );
};

export default WriteButtonContainer;