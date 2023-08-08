import styled from "styled-components";
import FillLike from "../../assets/fill.png";
import EmptyLike from "../../assets/empty.png";

const LikeBlock = styled.div`
    
`;

const LikeImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Like = ({likeState, onToggleLike}) => {

    return (
        <LikeBlock>
            <LikeImage src={likeState ? FillLike : EmptyLike} onClick={onToggleLike}/>
        </LikeBlock>
    );
};

export default Like;