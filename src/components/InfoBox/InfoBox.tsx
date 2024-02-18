import { type ReactNode } from "react";
import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

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
  if (mode === "hint") {
    return (
      <Alert
        mt={16}
        mb={16}
        variant="light"
        color="blue"
        title="No Goal Found"
        icon={<IconInfoCircle />}
      >
        {children}
      </Alert>
    );
  }
  const { severity } = props;
  return (
    <Alert
      mt={16}
      mb={16}
      variant="light"
      color={severity === "high" ? "red" : "orange"}
      title="Too Much Goals!"
      icon={<IconInfoCircle />}
    >
      {children}
    </Alert>
  );
};

export default InfoBox;
