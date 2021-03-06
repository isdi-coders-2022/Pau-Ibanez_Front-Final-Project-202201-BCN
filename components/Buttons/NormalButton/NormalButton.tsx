import { BaseSyntheticEvent } from "react";
import styled from "styled-components";

interface Props {
  isSubmit?: boolean;
  text: string;
  color: string;
  size: {
    width: number;
    height: number;
  };
  onClick?(event?: BaseSyntheticEvent): void;
}

interface ButtonProps {
  col: string;
  size: {
    width: number;
    height: number;
  };
}

const StyledButton = styled.button`
  ${({ col, size }: ButtonProps) =>
    `background-color: ${col}; height:${size.height}px; width: ${size.width}px;`}
  border: 1px solid white;
  border-radius: 5px;
  font-family: inherit;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NormalButton = ({ text, color, isSubmit, size, onClick }: Props) => {
  return (
    <StyledButton
      col={color}
      type={isSubmit ? "submit" : "button"}
      size={size}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default NormalButton;
