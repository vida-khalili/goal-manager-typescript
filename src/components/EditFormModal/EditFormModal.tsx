import {
  TextInput,
  Checkbox,
  Button,
  Box,
  Center,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import goalFormValidation from "../../lib/goalFormValidation";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { IGoal } from "../../App";

const EditFormModal = ({
  goal,
  onClose,
}: {
  goal: IGoal;
  onClose: () => void;
}) => {
  const {
    deadline,
    description,
    endDate,
    id,
    progress,
    title,
    createdAt,
    startDate,
  } = goal;
  const [isGoalExpire, setIsGoalExpire] = useState<boolean>(!!deadline);
  const [value, setValue] = useState<Date>(endDate);

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
  const updateGoal = (updatedGoal: IGoal) => {
    // Retrieve current list of goals from localStorage
    const goalsFromStorageString = localStorage.getItem("goals");
    const goalsFromStorage: IGoal[] = goalsFromStorageString
      ? JSON.parse(goalsFromStorageString)
      : [];

    // Find the index of the goal to be updated
    const goalIndex = goalsFromStorage.findIndex(
      (goal: IGoal) => goal.id === updatedGoal.id
    );

    if (goalIndex !== -1) {
      goalsFromStorage[goalIndex] = updatedGoal;
      localStorage.setItem("goals", JSON.stringify(goalsFromStorage));
    } else {
      console.error("Goal not found in localStorage:", updatedGoal);
    }
  };

  const form = useForm({
    initialValues: {
      title: title,
      summary: description,
      deadline: deadline,
      endDateValue: endDate,
      progress: progress,
    },
    validate: yupResolver(goalFormValidation),
  });

  return (
    <Box maw={340} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          const updatedGoal: IGoal = {
            id: id,
            title: values.title,
            description: values.summary,
            deadline: values.deadline,
            endDate: values.endDateValue,
            progress: values.progress,
            startDate: startDate,
            createdAt: createdAt,
          };
          updateGoal(updatedGoal);
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
        <Button type="submit" fullWidth mt={16} tt={"capitalize"}>
          save edit
        </Button>
      </form>
    </Box>
  );
};

export default EditFormModal;
