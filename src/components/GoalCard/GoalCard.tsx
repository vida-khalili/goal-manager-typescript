import {
  Title,
  Group,
  Text,
  Paper,
  Grid,
  Progress,
  Tooltip,
} from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";
import { DonutChart } from "@mantine/charts";
import { useMediaQuery } from "@mantine/hooks";
import calculateDaysDifference from "../../lib/calculateDaysDifference";
import DateProgressBar from "../DateProgressBar/DateProgressBar";
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
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const dayDiff = calculateDaysDifference(endDate);
  console.log("diff", dayDiff);

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
            size={!isMobile ? 100 : 80}
            thickness={!isMobile ? 15 : 15}
            tooltipDataSource="segment"
            data={[
              { name: "progress", value: progress, color: "green" },
              { name: "remained", value: 100 - progress, color: "gray" },
            ]}
          />
          {!deadline && <Text size="sm">No dead line </Text>}
          {deadline && <DateProgressBar pickedDate={endDate} />}
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
