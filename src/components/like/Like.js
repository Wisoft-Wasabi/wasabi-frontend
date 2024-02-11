import FillLike from "../../assets/fill.png";
import EmptyLike from "../../assets/empty.png";

const Like = ({likeState, onToggleLike}) => {
    return (
        <img className='w-[50px] h-[50px] object-cover'
             src={likeState ? FillLike : EmptyLike}
             onClick={onToggleLike}
        />
    );
};

export default Like;