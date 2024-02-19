import { Title, Group, Text, Paper, Grid } from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";

interface IGoalCardProps {
  id: string;
  title: string;
  description: string;
  deadline: boolean;
  endDate: string;
  progress: number;
  onDelete: (id: string) => void;
}

const GoalCard = ({
  title,
  description,
  onDelete,
  id,
  deadline,
  endDate,
  progress,
}: IGoalCardProps) => {
  return (
    <Paper
      shadow="xs"
      p={"lg"}
      w={"100%"}
      h={200}
      display={"flex"}
      style={{ flexDirection: "column" }}
    >
      <Grid>
        <Grid.Col span={8} h={"140px"}>
          <Title h={50} order={3}>
            {title}
          </Title>
          <Text
            lineClamp={3}
            ta={"justify"}
            size="sm"
            style={{ flex: 1 }}
            w={"100%"}
          >
            {description}
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          {deadline && <p>{endDate}</p>}
          progress: {progress}%
        </Grid.Col>
      </Grid>
      <Group justify="space-between" h={30}>
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
