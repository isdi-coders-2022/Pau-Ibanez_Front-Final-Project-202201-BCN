import { BaseSyntheticEvent, SyntheticEvent, useRef } from "react";
import styled from "styled-components";
import { lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import { APIRoom } from "../../types/Room";
import { Position } from "../Popup/Popup";

interface Props {
  room: APIRoom;
  onClick?(event: BaseSyntheticEvent, position: Position): void;
}

const RoomCardHolder = styled.li`
  background-color: ${mainTeal};
  border-radius: ${globalRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  z-index: 2;
`;

const GameTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
  margin: 0;
  color: white;
`;

const Creator = styled.p`
  color: ${lightWhite};
  margin: 0;
`;

const RoomCard = ({ room, onClick }: Props) => {
  const reference: React.RefObject<HTMLLIElement> = useRef();

  const onRoomClick = (event: SyntheticEvent) => {
    if (!onClick) {
      return;
    }
    const elementBoundingClientRect = reference.current.getBoundingClientRect();
    const position = {
      x:
        elementBoundingClientRect.x + (elementBoundingClientRect.width / 8) * 5,
      y:
        elementBoundingClientRect.top +
        window.scrollY +
        elementBoundingClientRect.height / 2,
    };
    onClick(event, position);
  };
  return (
    <RoomCardHolder onClick={onRoomClick} ref={reference}>
      <GameTitle>{room.game.name}</GameTitle>
      <Creator>{room.leader.profile.username}</Creator>
    </RoomCardHolder>
  );
};

export default RoomCard;
