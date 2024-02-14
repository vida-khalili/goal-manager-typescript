import { Stack, Title, Group, Text } from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import CardButton from "../CardButton/CardButton";

const GoalCard = () => {
  return (
    <Stack w={300} bg={"#DEE2E6"} p={16}>
      <Title order={3}>Title</Title>
      <Text lineClamp={4} ta={"justify"} size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
        nostrum ratione optio culpa quibusdam nam perspiciatis minima officia,
        velit doloribus iusto aspernatur repellendus, eaque blanditiis delectus
        assumenda dolor eos.
      </Text>
      <Group justify="space-between">
        <CardButton>view details</CardButton>
        <CardButton>
          <IconWriting />
        </CardButton>
        <CardButton>
          <IconTrashXFilled />
        </CardButton>
      </Group>
    </Stack>
  );
};

export default GoalCard;
