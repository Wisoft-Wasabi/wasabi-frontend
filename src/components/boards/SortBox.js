import styled from "styled-components";

const SortBoxBlock = styled.div`
  margin-top: 1rem;
  float: right;
`;

const SelectBox = styled.select`

`;

const SortBox = (/*{options}*/) => {
    return (
        <SortBoxBlock>
            <SelectBox>
                {/*{options
                    .map(option => (<option value={option.value}>{option.name}</option>) )}*/}
                <option value="latest">최신</option>
                <option value="likes">좋아요</option>
                <option value="views">조회수</option>
            </SelectBox>
        </SortBoxBlock>
    );
};

export default SortBox;