import SignUpList from "./SignUpList";
import {useMemo} from "react";
import Button from "../common/Button";

const SignUpListData = ({signUpList, signUpListError}) => {
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
                    button: <Button>승인하기</Button>
                }
            ));
        }

        if (signUpListError) return <div>에러 발생!</div>

    }, [signUpList, signUpListError]);

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