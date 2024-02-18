import { List, ListItem } from "@mantine/core";
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
    <List
      mt={24}
      w={"100%"}
      display={"grid"}
      style={{
        gridTemplateColumns: `${isMobile ? "unset" : "1fr 1fr"}`,
        gap: "16px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {goals.map((goal) => (
        <ListItem key={goal.id} w={"100%"}>
          <GoalCard
            title={goal.title}
            description={goal.description}
            id={goal.id}
            onDelete={handleDeleteGoal}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GoalsList;
