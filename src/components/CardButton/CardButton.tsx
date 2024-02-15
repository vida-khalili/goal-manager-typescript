import { Button } from "@mantine/core";
import { type ReactNode } from "react";

const CardButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button variant="subtle" px={8}>
      {children}
    </Button>
  );
};

export default CardButton;
