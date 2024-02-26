import { Modal } from "@mantine/core";
import { IGoal } from "../../App";
import EditFormModal from "../EditFormModal/EditFormModal";

interface IEditGoalModal {
  goal: IGoal;
  openedState: boolean;
  onClose: () => void;
}

const EditGoalModal = ({ openedState, onClose, goal }: IEditGoalModal) => {
  return (
    <Modal
      opened={openedState}
      onClose={onClose}
      closeOnClickOutside={false}
      title="Edit Your Goal"
    >
      <EditFormModal goal={goal} onClose={onClose} />
    </Modal>
  );
};

export default EditGoalModal;
