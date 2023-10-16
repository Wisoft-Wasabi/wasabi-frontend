import styled from "styled-components";
import {BsSearch} from "react-icons/bs";

const SearchBlock = styled.div`
  width: 768px;
  height: 58px;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  margin-left: 12px;
  font-size: 26px;
  
  &:focus {
    outline: none;
  }
`;

const Search = ({keyword, search, searchError, searchLoading, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
    return (
        <SearchBlock>
            <BsSearch style={{fontSize: "20px"}}/>
            <StyledInput name="keyword"
                         value={keyword}
                         placeholder="검색할 키워드를 입력하세요."
                         onChange={e => onChangeKeyword(e)}
                         onKeyUp={onSearchKeyword}
            />
        </SearchBlock>
    );
};

export default Search;