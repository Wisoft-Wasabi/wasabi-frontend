import SignUpList from "./SignUpList";
import {useCallback, useEffect, useMemo, useState} from "react";
import Button from "../common/Button";

const SignUpListData = ({signUpList, signUpListError, onAccept, acceptLoading}) => {
    const [originSignUpList, setOriginSignUpList] = useState([]);

    useEffect(() => {
        if (signUpList && signUpList.data) {
            setOriginSignUpList(signUpList.data.content);
        }
    }, [signUpList, originSignUpList])

    const onRemove = useCallback(
        (member) => {
            if (!acceptLoading) {
                // const nextSignUpList = originSignUpList.filter(m => m !== member);
                setOriginSignUpList((originSignUpList) => originSignUpList.filter(m => m.id !== member.id));
            }
        }, [acceptLoading]);

    const columns = useMemo(() => [
        {
            Header: "번호",
            accessor: "id",
        },
        {
            Header: "이름",
            accessor: "name",
        },
        {
            Header: "이메일",
            accessor: "email",
        },
        {
            Header: "",
            accessor: "button",
        },
    ], []);

    const data = useMemo(() => {
        if (signUpList && signUpList.data) {
            return signUpList.data.content.map(member => (
                {
                    id: member.id,
                    name: member.name,
                    email: member.email,
                    button: <Button onClick={() => {
                        onAccept(member.id);
                        onRemove(member);
                    }}>승인하기</Button>
                }
            ));
        }

        if (signUpListError) return <div>에러 발생!</div>

    }, [signUpList, signUpListError, onAccept]);

    return (
        <>
            {data && (
                <SignUpList columns={columns}
                            data={data}
                />
            )}
        </>
    );
};

export default SignUpListData;