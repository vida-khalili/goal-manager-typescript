import { useState } from "react";
import { Container, Title } from "@mantine/core";
import Header from "./components/Header/Header";
import goalImage from "./assets/goals.jpg";
import GoalsList from "./components/GoalsList/GoalsList";
import NewGoalForm from "./components/NewGoalForm/NewGoalForm";
import { v4 as uuidv4 } from "uuid";

export interface IGoal {
  id: string;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<IGoal[]>([]);
  const handleAddGoal = (title: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: IGoal = {
        id: uuidv4(),
        title: title,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <Container p={"2rem"}>
      <Header image={{ src: goalImage, alt: "goal header image" }}>
        <Title order={1} ta={"center"} tt={"capitalize"}>
          your goals{" "}
        </Title>
      </Header>
      <NewGoalForm handleAddGoal={handleAddGoal} />
      <GoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </Container>
  );
}
