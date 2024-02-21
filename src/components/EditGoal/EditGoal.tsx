import { useDisclosure } from "@mantine/hooks";
import CardButton from "../CardButton/CardButton";
import { IconWriting } from "@tabler/icons-react";
import { IGoal } from "../../App";
import EditGoalModal from "../EditGoalModal/EditGoalModal";

interface IEditGoal {
  goal: IGoal;
}
const EditGoal = ({ goal }: IEditGoal) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <CardButton id={goal.id} handleClick={open}>
        <IconWriting />
      </CardButton>
      <EditGoalModal goal={goal} onClose={close} openedState={opened} />
    </div>
  );
};

export default EditGoal;
