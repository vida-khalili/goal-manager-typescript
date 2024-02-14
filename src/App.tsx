import { Container, Title } from "@mantine/core";
import GoalCard from "./components/GoalCard/GoalCard";

export default function App() {
  return (
    <Container>
      <Title order={1}>This is h1 title</Title>
      <GoalCard />
    </Container>
  );
}
