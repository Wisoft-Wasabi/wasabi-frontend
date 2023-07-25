import styled, {css} from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 2.5px;
  background: #4BC75F;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
  
  ${props => props.fullwidth && css`
    width: 100%;
  `}
`;

const Button = props => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;