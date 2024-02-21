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
    <ScrollArea h={goals.length >= 5 ? "600px" : "unset"} m={0} scrollbars="y">
      <List
        display={"grid"}
        style={{
          gridTemplateColumns: `${isMobile ? "unset" : "1fr 1fr 1fr"}`,
          gap: "16px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {goals.map((goal) => {
          console.log("type", typeof goal.endDate);

          return (
            <ListItem key={goal.id} w={"100%"}>
              <GoalCard goal={goal} onDelete={handleDeleteGoal} />
            </ListItem>
          );
        })}
      </List>
    </ScrollArea>
  );
};

export default GoalsList;
