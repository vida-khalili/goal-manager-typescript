import { Container, Title } from "@mantine/core";
import GoalCard from "./components/GoalCard/GoalCard";
import Header from "./components/Header/Header";
import goalImage from "./assets/goals.jpg";
export default function App() {
  return (
    <Container p={"2rem"}>
      <Header image={{ src: goalImage, alt: "goal header image" }}>
        <Title order={1} ta={"center"} tt={"capitalize"}>
          your goals{" "}
        </Title>
      </Header>
      <GoalCard
        title="Title for card"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
        nostrum ratione optio culpa quibusdam nam perspiciatis minima officia,
        velit doloribus iusto aspernatur repellendus, eaque blanditiis delectus
        assumenda dolor eos."
      />
    </Container>
  );
}
