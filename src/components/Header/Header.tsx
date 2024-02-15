import { Box, Image } from "@mantine/core";
import { type ReactNode } from "react";

interface IHeaderProps {
  children: ReactNode;
  image: { src: string; alt: string };
}
const Header = ({ children, image }: IHeaderProps) => {
  return (
    <Box m={"0 auto"}>
      <Image
        m={"0 auto"}
        radius="50%"
        src={image.src}
        alt={image.alt}
        w={"5rem"}
        h={"5rem"}
      />
      {children}
    </Box>
  );
};

export default Header;
