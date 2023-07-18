import Button from "../common/Button";

const WriteButton = ({onPublish}) => {
    return (
        <Button onClick={onPublish}>등록하기</Button>
    );
};

export default WriteButton;