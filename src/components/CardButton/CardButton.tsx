import { Button } from "@mantine/core";
import { ReactElement } from "react";

const CardButton = ({ children }: { children: string | ReactElement }) => {
  return (
    <Button variant="subtle" px={8}>
      {children}
    </Button>
  );
};

export default CardButton;
