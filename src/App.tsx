import { useEffect, useState } from "react";
import { Center, Box, Title } from "@mantine/core";
import Header from "./components/Header/Header";
import goalImage from "./assets/goals.jpg";
import GoalsList from "./components/GoalsList/GoalsList";
import { v4 as uuidv4 } from "uuid";
import InfoBox from "./components/InfoBox/InfoBox";
import bgImage from "./assets/bg-coral.jpg";
import { useMediaQuery } from "@mantine/hooks";

export interface IGoal {
  id: string;
  title: string;
  description: string;
  deadline: boolean;
  endDate: Date;
  startDate: Date;
  progress: number;
  createdAt: Date;
}
export interface IHandleAddGoal {
  title: string;
  summary: string;
  deadline: boolean;
  endDate: Date;
  startDate: Date;
  progress: number;
  createdAt: Date;
}

export default function App() {
  const [goals, setGoals] = useState<IGoal[]>([]);
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const objectFitValue = !isMobile ? "contain" : "cover";

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  const handleAddGoal = ({
    title,
    summary,
    deadline,
    endDate,
    startDate,
    progress,
    createdAt,
  }: IHandleAddGoal) => {
    setGoals((prevGoals) => {
      const newGoal: IGoal = {
        id: uuidv4(),
        title: title,
        description: summary,
        deadline: deadline,
        endDate: endDate,
        progress: progress,
        startDate: startDate,
        createdAt: createdAt,
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
    <Box h={"100%"} bg="#FF715B">
      <Box
        component="img"
        src={bgImage}
        pos={"absolute"}
        alt="background"
        bottom={0}
        right={0}
        style={{
          objectFit: objectFitValue,
          zIndex: 0,
          width: `${isMobile ? "320px" : "600px"}`,
        }}
      />
      <Box p={32} h={"100%"} pos={"relative"} style={{ zIndex: 10 }}>
        <Header
          image={{ src: goalImage, alt: "goal header image" }}
          handleAddGoal={handleAddGoal}
        ></Header>
        <Center>
          <Title order={1} ta={"center"} tt={"capitalize"} mb={24}>
            Your Goals
          </Title>
        </Center>
        {goals.length === 0 && (
          <InfoBox mode="hint">
            <Center fw={"bold"}>¯\_(ツ)_/¯</Center>
            <Center>You have no goals yet</Center>
            <Center style={{ flexWrap: "wrap" }}>
              Add some goals by clicking
              <strong style={{ margin: "0 4px" }}> "Add Goal" </strong>button
              from bottom of the screen
            </Center>
          </InfoBox>
        )}
        {goals.length >= 5 && goals.length < 10 && (
          <InfoBox mode="warning" severity="low">
            <Center fw={"bold"}>ƪ(˘⌣˘)ʃ</Center>
            <Center style={{ flexWrap: "wrap" }}>
              You've reached 5 goals and beyond, which is great progress.
              However, it seems like things are getting a bit overwhelming.
              Perhaps it's time to take a step back and relax a bit more.
            </Center>
          </InfoBox>
        )}
        {goals.length >= 10 && (
          <InfoBox mode="warning" severity="high">
            <Center fw={"bold"}>(⊙_⊙;)</Center>
            <Center style={{ flexWrap: "wrap" }}>
              Wow, you've hit double digits with your goals! That's impressive,
              but it also seems like it might be getting a bit overwhelming. It
              might be a good idea to take a step back and prioritize some
              relaxation time.
            </Center>
          </InfoBox>
        )}
        <GoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} />
      </Box>
    </Box>
  );
}
