import styled from "styled-components";
import { ButtonNormal } from "../../types/Buttons";
import NormalButton from "../Buttons/NormalButton/NormalButton";

export interface Position {
  x: number;
  y: number;
}
interface PopupContainerProps extends Position {
  show: boolean;
}
interface PopupHidderProps {
  show: boolean;
}

export interface PopupProps {
  buttons: ButtonNormal[];
  position: Position;
  show?: boolean;
  hide(): void;
}

const PopupContainer = styled.div`
  ${(props: PopupContainerProps): string =>
    props.show ? "display: flex;" : "display: none;"}
  position: absolute;
  z-index: 12;
  ${(props: PopupContainerProps) =>
    "top:" + props.y + "px;" + "left:" + props.x + "px;"}
  background-color: white;
`;

const PopupMain = styled.div`
  background-color: white;
  min-height: 60px;
  width: 115px;
  position: absolute;
  top: -35px;
  left: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`;

const PopupArrowsCont = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -10px;
  left: 0;

  width: 0;
  height: 0;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;

  border-right: 11px solid white;
`;

const PopupHidder = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  ${(props: PopupHidderProps) => (!props.show ? "pointer-events: none;" : "")}
`;

const Popup = ({ buttons, position, show, hide }: PopupProps): JSX.Element => {
  const buttonsToRender = buttons.map(
    (button: ButtonNormal): JSX.Element => (
      <NormalButton
        key={button.text}
        color={button.color}
        size={{ width: 100, height: 33 }}
        text={button.text}
        onClick={button.onClick}
      />
    )
  );

  return (
    <>
      <PopupContainer x={position.x} y={position.y} show={show}>
        <PopupArrowsCont />
        <PopupMain>{buttonsToRender}</PopupMain>
      </PopupContainer>
      <PopupHidder onClick={hide} show={show} />
    </>
  );
};

export default Popup;
