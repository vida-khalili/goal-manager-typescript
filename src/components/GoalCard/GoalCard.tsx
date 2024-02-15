import { Stack, Title, Group, Text, Paper } from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";

interface IGoalCardProps {
  title: string;
  description: string;
}

const GoalCard = ({ title, description }: IGoalCardProps) => {
  return (
    <Paper shadow="xs" p={"xl"}>
      <Title order={3}>{title}</Title>
      <Text lineClamp={4} ta={"justify"} size="sm">
        {description}
      </Text>
      <Group justify="space-between">
        <CardButton>view details</CardButton>
        <CardButton>
          <IconWriting />
        </CardButton>
        <CardButton>
          <IconTrashXFilled color="red" />
        </CardButton>
      </Group>
    </Paper>
  );
};

export default GoalCard;
