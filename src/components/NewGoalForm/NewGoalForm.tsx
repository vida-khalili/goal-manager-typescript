import {
  TextInput,
  Button,
  Checkbox,
  Box,
  Center,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import goalFormValidation from "../../lib/goalFormValidation";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { IHandleAddGoal } from "../../App";

interface INewGoalFormProps {
  // onclose: () => void;
  handleAddGoal: (props: IHandleAddGoal) => void;
  onClose: () => void;
}
const NewGoalForm = ({ handleAddGoal, onClose }: INewGoalFormProps) => {
  const [isGoalExpire, setIsGoalExpire] = useState<boolean>(false);
  const [value, setValue] = useState<Date>(new Date());

  const form = useForm({
    initialValues: {
      title: "",
      summary: "",
      deadline: isGoalExpire,
      endDateValue: value,
      progress: 0,
    },

    validate: yupResolver(goalFormValidation),
  });

  const handleCheckboxChange = () => {
    setIsGoalExpire(!isGoalExpire);
    form.setValues({ ...form.values, deadline: !isGoalExpire }); // Update form state
  };

  const handleDateChange = (selectedDate: Date) => {
    if (selectedDate) {
      // Set the time to the end of the day
      selectedDate.setHours(23, 59, 59, 999);
    }
    setValue(selectedDate);
    form.setValues({
      ...form.values,
      endDateValue: selectedDate !== null ? selectedDate : undefined,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        color: "#437C9A",
      }}
      onSubmit={form.onSubmit((values) => {
        const newTitle: string = values.title;
        const newSummary: string = values.summary;
        const newDeadline: boolean = values.deadline;
        const newEndDate: Date = values.endDateValue;
        const createdAt: Date = new Date();
        const startDate: Date = new Date();
        startDate.setHours(0, 0, 0, 0); // Sets the start date to the beginning of the day
        const newProgress: number = values.progress;
        handleAddGoal({
          title: newTitle,
          summary: newSummary,
          deadline: newDeadline,
          endDate: newEndDate,
          startDate: startDate,
          progress: newProgress,
          createdAt: createdAt,
        });
        form.reset();
        setIsGoalExpire(false); // Reset the checkbox state
        setValue(new Date());
        onClose();
      })}
    >
      <Box flex={1} h={"100%"}>
        <TextInput
          h={85}
          withAsterisk
          label="Your Goal"
          placeholder="your Goal Title..."
          {...form.getInputProps("title")}
        />
        <TextInput
          h={85}
          withAsterisk
          label="Goal Summary"
          placeholder="your Goal Title..."
          {...form.getInputProps("summary")}
        />
        <Checkbox
          mt="sm"
          mb="sm"
          label="It has a dead-line"
          {...form.getInputProps("deadline", { type: "checkbox" })}
          checked={isGoalExpire}
          onChange={handleCheckboxChange}
        />
        {isGoalExpire && (
          <Center mb="sm">
            <DatePicker
              allowDeselect
              value={value}
              onChange={(e) => {
                e ? handleDateChange(e) : null;
              }}
            />
          </Center>
        )}
        <NumberInput
          {...form.getInputProps("progress")}
          display={"flex"}
          style={{ alignItems: "center", gap: 8 }}
          label="Progress %"
          placeholder="for example 83"
          mt="md"
          min={0}
          max={100}
        />
      </Box>
      <Button type="submit" fullWidth>
        Add
      </Button>
    </form>
  );
};

export default NewGoalForm;
