import { Box, Button, Drawer, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NewGoalForm from "../NewGoalForm/NewGoalForm";
import { IconCaretRight } from "@tabler/icons-react";
interface IHeaderProps {
  handleAddGoal: (title: string, summary: string) => void;
  image: { src: string; alt: string };
}
const Header = ({ handleAddGoal, image }: IHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <Box m={"0 auto"} pos={"absolute"} h={"100%"}>
      <Drawer opened={opened} onClose={close} title="Goal Details">
        <Image
          m={"0 auto"}
          radius="50%"
          src={image.src}
          alt={image.alt}
          w={"5rem"}
          h={"5rem"}
        />
        <NewGoalForm handleAddGoal={handleAddGoal} />
      </Drawer>
      <Button
        onClick={open}
        pos={"absolute"}
        left={0}
        bottom={"60px"}
        rightSection={<IconCaretRight />}
      >
        Add Goal{" "}
      </Button>
    </Box>
  );
};

export default Header;
