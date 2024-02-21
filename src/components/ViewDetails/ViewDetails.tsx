import CardButton from "../CardButton/CardButton";
import GoalDetailModal from "../GoalDetailModal/GoalDetailModal";
import { useDisclosure } from "@mantine/hooks";
import { IGoal } from "../../App";

interface IViewDetailsProps {
  goal: IGoal;
}
const ViewDetails = ({ goal }: IViewDetailsProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <CardButton id={goal.id} handleClick={open}>
        view details
      </CardButton>
      <GoalDetailModal goal={goal} openedState={opened} onClose={close} />
    </div>
  );
};

export default ViewDetails;
