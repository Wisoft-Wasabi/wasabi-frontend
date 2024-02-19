import {Route, Routes} from "react-router-dom";
import ErrorPage from "../components/base/ErrorPage";
import CheckList from "../assets/checklist.png";

export default function ErrorRoutes() {
    return (
        <Routes>
            <Route path='activation' element={<ErrorPage text='관리자가 회원가입 승인 여부를 검토 중이에요!' img={CheckList}/>}/>
        </Routes>
    );
}
