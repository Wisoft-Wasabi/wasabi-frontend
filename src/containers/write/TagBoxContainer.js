import TagBox from "../../components/write/TagBox";
import {useDispatch, useSelector} from "react-redux";
import {changeField} from "../../modules/write";

const TagBoxContainer = () => {
    const dispatch = useDispatch();
    const {write} = useSelector(({write}) => ({
        write: write,
    }));

    const onChangeTag = (tag) => {
        dispatch(changeField({
                key: 'tag',
                value: tag,
            }),
        );
    };

    return (
        <TagBox onChangeTag={onChangeTag} write={write}/>
    );
};

export default TagBoxContainer;