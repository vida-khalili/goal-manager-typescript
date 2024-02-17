import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import goalFormValidation from "../../lib/goalFormValidation";

interface INewGoalFormProps {
  handleAddGoal: (title: string, summary: string) => void;
}
const NewGoalForm = ({ handleAddGoal }: INewGoalFormProps) => {
  const form = useForm({
    initialValues: {
      title: "",
      summary: "",
    },

    validate: yupResolver(goalFormValidation),
  });

  return (
    <Box maw={340} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          const newTitle: string = values.title;
          const newSummary: string = values.summary;
          handleAddGoal(newTitle, newSummary);
          form.reset();
        })}
      >
        <TextInput
          withAsterisk
          label="Your Goal"
          placeholder="your Goal Title..."
          {...form.getInputProps("title")}
        />
        <TextInput
          withAsterisk
          label="Goal Summary"
          placeholder="your Goal Title..."
          {...form.getInputProps("summary")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" fullWidth>
            Add
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default NewGoalForm;
