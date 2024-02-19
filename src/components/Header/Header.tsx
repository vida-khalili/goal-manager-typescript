import { Box, Button, Drawer, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NewGoalForm from "../NewGoalForm/NewGoalForm";
import { IconCaretRight } from "@tabler/icons-react";

interface IHeaderProps {
  handleAddGoal: (
    title: string,
    summary: string,
    deadline: boolean,
    endDate: Date,
    progress: number
  ) => void;
  image: { src: string; alt: string };
}

const Header = ({ handleAddGoal, image }: IHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box m={"0 auto"} pos={"absolute"} h={"100%"} style={{ zIndex: 10 }}>
      <Drawer
        opened={opened}
        onClose={close}
        title="Goal Details"
        color="#437C9A"
      >
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
