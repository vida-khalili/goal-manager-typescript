import { Title, Group, Text, Paper } from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";

interface IGoalCardProps {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
}

const GoalCard = ({ title, description, onDelete, id }: IGoalCardProps) => {
  return (
    <Paper shadow="xs" p={"xl"}>
      <Title order={3}>{title}</Title>
      <Text lineClamp={4} ta={"justify"} size="sm">
        {description}
      </Text>
      <Group justify="space-between">
        <CardButton id={id}>view details</CardButton>
        <CardButton id={id}>
          <IconWriting />
        </CardButton>
        <CardButton id={id} handleClick={onDelete}>
          <IconTrashXFilled color="red" />
        </CardButton>
      </Group>
    </Paper>
  );
};

export default GoalCard;
