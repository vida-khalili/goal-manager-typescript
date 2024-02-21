import { type ReactNode } from "react";
import { Alert, Modal } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import theme from "../../lib/theme";
import { useDisclosure } from "@mantine/hooks";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;
const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;
  const [opened, { close }] = useDisclosure(true);

  if (mode === "hint") {
    return (
      <Alert
        m="0 auto"
        maw={600}
        mt={16}
        mb={16}
        variant="filled"
        color={theme.primaryColor}
        title="No Goal Found"
        icon={<IconInfoCircle />}
      >
        {children}
      </Alert>
    );
  }
  const { severity } = props;
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        severity === "high"
          ? "Can Opened , Goals Everywhere!"
          : "Too Much Goals"
      }
      size={"sm"}
      style={{ color: "white" }}
      className={
        severity === "high" ? "warning-modal-high" : "warning-modal-low"
      }
    >
      {children}
    </Modal>
  );
};

export default InfoBox;
