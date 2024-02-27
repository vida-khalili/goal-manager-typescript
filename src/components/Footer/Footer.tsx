import { Anchor, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  return (
    <Text
      pos={"absolute"}
      bottom={isMobile ? 5 : 10}
      right={isMobile ? 100 : 300}
    >
      Developed by
      <Anchor
        href="https://vidakhalili.ir"
        target="_blank"
        rel="noreferrer"
        ml={4}
        fw={"bold"}
        underline="hover"
      >
        Vida Khalili
      </Anchor>
    </Text>
  );
};

export default Footer;
