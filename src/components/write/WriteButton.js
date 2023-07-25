import Button from "../common/Button";

const WriteButton = ({onPublish}) => {
    return (
        <Button onClick={onPublish} style={{marginTop: "2rem"}}>등록하기</Button>
    );
};

export default WriteButton;