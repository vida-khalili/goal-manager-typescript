import { useEffect, useState } from "react";
import { Center, Box, Title } from "@mantine/core";
import Header from "./components/Header/Header";
import goalImage from "./assets/goals.jpg";
import GoalsList from "./components/GoalsList/GoalsList";
import { v4 as uuidv4 } from "uuid";
import InfoBox from "./components/InfoBox/InfoBox";

export interface IGoal {
  id: string;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<IGoal[]>([]);

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  const handleAddGoal = (title: string, summary: string) => {
    // const newGoal: IGoal = {
    //   id: uuidv4(),
    //   title: title,
    //   description: summary,
    // };
    // // const newGoalsList: IGoal[] = [...goals, newGoal];
    // // setGoals(newGoalsList);
    // // console.log(newGoalsList);

    setGoals((prevGoals) => {
      const newGoal: IGoal = {
        id: uuidv4(),
        title: title,
        description: summary,
      };
      const updatedGoals = [...prevGoals, newGoal];
      // Store the updated goals array in local storage
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      // Update local storage with the filtered goals array
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };
  return (
    <Box p={32} h={"100%"} pos={"relative"}>
      <Header
        image={{ src: goalImage, alt: "goal header image" }}
        handleAddGoal={handleAddGoal}
      ></Header>
      <Center>
        <Title order={1} ta={"center"} tt={"capitalize"}>
          Your Goals
        </Title>
      </Center>
      {goals.length === 0 && (
        <InfoBox mode="hint">
          <Center fw={"bold"}>¯\_(ツ)_/¯</Center>
          <Center>You have no goals yet</Center>
          <Center>
            Add some goals by clicking <strong>"Add Goal"</strong> button from
            bottom of the screen
          </Center>
        </InfoBox>
      )}
      {goals.length >= 5 && goals.length < 10 && (
        <InfoBox mode="warning" severity="low">
          <Center fw={"bold"}>ƪ(˘⌣˘)ʃ</Center>
          <Center>
            You've reached 5 goals and beyond, which is great progress. However,
            it seems like things are getting a bit overwhelming. Perhaps it's
            time to take a step back and relax a bit more.
          </Center>
        </InfoBox>
      )}
      {goals.length >= 10 && (
        <InfoBox mode="warning" severity="high">
          <Center fw={"bold"}>(⊙_⊙;)</Center>
          <Center>
            Wow, you've hit double digits with your goals! That's impressive,
            but it also seems like it might be getting a bit overwhelming. It
            might be a good idea to take a step back and prioritize some
            relaxation time.
          </Center>
        </InfoBox>
      )}
      <GoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </Box>
  );
}
