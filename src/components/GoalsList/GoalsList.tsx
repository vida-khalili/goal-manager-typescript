import { List, ListItem } from "@mantine/core";
import GoalCard from "../GoalCard/GoalCard";
import { IGoal } from "../../App";

interface IGoalsList {
  goals: IGoal[];
  handleDeleteGoal: (id: string) => void;
}
const GoalsList = ({ goals, handleDeleteGoal }: IGoalsList) => {
  return (
    <List>
      {goals.map((goal) => (
        <ListItem key={goal.id}>
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
