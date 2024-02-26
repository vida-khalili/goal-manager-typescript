import { Title, Group, Text, Paper, Grid } from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";
import { DonutChart } from "@mantine/charts";
import { useMediaQuery } from "@mantine/hooks";
import DateProgressBar from "../DateProgressBar/DateProgressBar";
import { IGoal } from "../../App";
import ViewDetails from "../ViewDetails/ViewDetails";
import EditGoal from "../EditGoal/EditGoal";

interface IGoalCardProps {
  goal: IGoal;
  onDelete: (id: string) => void;
}

const GoalCard = ({ goal, onDelete }: IGoalCardProps) => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const { id, deadline, description, endDate, startDate, progress, title } =
    goal;

  return (
    <Paper
      shadow="xs"
      p={"lg"}
      w={"100%"}
      h={!isMobile ? 200 : 230}
      display={"flex"}
      style={{ flexDirection: "column" }}
    >
      <Grid style={{ flex: 1 }}>
        <Grid.Col span={8} h={"140px"} p={"0 8px"}>
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
        <Grid.Col
          p={"0 8px"}
          span={4}
          display={"grid"}
          h={"140px"}
          style={{
            gridTemplateRows: "100px 40px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <DonutChart
            size={!isMobile ? 100 : 75}
            thickness={!isMobile ? 15 : 12}
            tooltipDataSource="segment"
            data={[
              { name: "progress", value: progress, color: "green" },
              { name: "remained", value: 100 - progress, color: "gray" },
            ]}
          />
          {!deadline && <Text size="sm">No dead line </Text>}
          {deadline && (
            <DateProgressBar
              mode="mini"
              pickedDate={String(endDate)}
              startDate={String(startDate)}
            />
          )}
        </Grid.Col>
      </Grid>
      <Group justify="space-between" h={30}>
        <ViewDetails goal={goal} />
        <EditGoal goal={goal} />
        <CardButton id={id} handleClick={onDelete}>
          <IconTrashXFilled color="red" />
        </CardButton>
      </Group>
    </Paper>
  );
};

export default GoalCard;
