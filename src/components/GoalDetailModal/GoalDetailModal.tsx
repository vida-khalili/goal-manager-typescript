import { Box, Flex, Grid, Modal, Text } from "@mantine/core";
import { IGoal } from "../../App";
import DateProgressBar from "../DateProgressBar/DateProgressBar";
import { DonutChart } from "@mantine/charts";
import { useMediaQuery } from "@mantine/hooks";
import dateStringFormat from "../../lib/dateStringFormat";

interface IGoalDetailModalProps {
  goal: IGoal;
  openedState: boolean;
  onClose: () => void;
}

const GoalDetailModal = ({
  goal,
  openedState,
  onClose,
}: IGoalDetailModalProps) => {
  const {
    title,
    deadline,
    description,
    endDate,
    progress,
    startDate,
    createdAt,
  } = goal;
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const createDate = dateStringFormat(createdAt);
  const expireDate = dateStringFormat(endDate);
  return (
    <Modal opened={openedState} onClose={onClose} title={title} size={"lg"}>
      <Text fz={12} opacity={0.8} mb={16} ta={"right"}>
        Created at: {createDate}
      </Text>
      <Text ta={"justify"} p={8}>
        {description}
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <Box h={"100%"}>
            <DonutChart
              paddingAngle={4}
              className="detail"
              withLabelsLine
              withLabels
              chartLabel="Practical Progress"
              size={!isMobile ? 200 : 80}
              thickness={!isMobile ? 15 : 10}
              tooltipDataSource="segment"
              data={[
                { name: "progress", value: progress, color: "green" },
                { name: "remained", value: 100 - progress, color: "gray" },
              ]}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={6} p={"1rem"}>
          {deadline ? (
            <Box h={"100%"}>
              <Flex justify={"space-between"}>
                <Text fz={10}>{createDate.slice(0, -8)}</Text>
                <Text fz={10}>{expireDate.slice(0, -8)}</Text>
              </Flex>
              <DateProgressBar
                mode="full"
                pickedDate={String(endDate)}
                startDate={String(startDate)}
              />
            </Box>
          ) : (
            <Text>No deadline</Text>
          )}
        </Grid.Col>
      </Grid>
    </Modal>
  );
};

export default GoalDetailModal;
