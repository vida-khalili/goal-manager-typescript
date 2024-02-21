import { Modal } from "@mantine/core";
import { IGoal } from "../../App";

interface IEditGoalModal {
  goal: IGoal;
  openedState: boolean;
  onClose: () => void;
}
const EditGoalModal = ({ openedState, onClose, goal }: IEditGoalModal) => {
  return (
    <Modal opened={openedState} onClose={onClose}>
      EditGoalModal
    </Modal>
  );
};

export default EditGoalModal;
