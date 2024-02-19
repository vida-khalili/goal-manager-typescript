import { List, ListItem, ScrollArea } from "@mantine/core";
import GoalCard from "../GoalCard/GoalCard";
import { IGoal } from "../../App";
import { useMediaQuery } from "@mantine/hooks";

interface IGoalsList {
  goals: IGoal[];
  handleDeleteGoal: (id: string) => void;
}
const GoalsList = ({ goals, handleDeleteGoal }: IGoalsList) => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  return (
    <ScrollArea h={goals.length >= 5 ? "400px" : "unset"} m={0}>
      <List
        mt={24}
        w={"100%"}
        display={"grid"}
        style={{
          gridTemplateColumns: `${isMobile ? "unset" : "1fr 1fr 1fr"}`,
          gap: "16px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {goals.map((goal) => {
          const { id, title, description, deadline, endDate, progress } = goal;
          console.log("typeof", typeof endDate);

          return (
            <ListItem key={id} w={"100%"}>
              <GoalCard
                title={title}
                description={description}
                id={id}
                onDelete={handleDeleteGoal}
                deadline={deadline}
                endDate={String(endDate)}
                progress={progress}
              />
            </ListItem>
          );
        })}
      </List>
    </ScrollArea>
  );
};

export default GoalsList;
