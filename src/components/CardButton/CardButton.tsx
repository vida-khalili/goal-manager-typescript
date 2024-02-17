import { Button } from "@mantine/core";
import { type ReactNode } from "react";

interface ICardButton {
  children: ReactNode;
  id: string;
  handleClick?: (id: string) => void;
}
const CardButton = ({ children, handleClick = () => {}, id }: ICardButton) => {
  return (
    <Button
      variant="subtle"
      px={8}
      onClick={() => {
        handleClick(id);
      }}
    >
      {children}
    </Button>
  );
};

export default CardButton;
