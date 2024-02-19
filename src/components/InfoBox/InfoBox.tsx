import { type ReactNode } from "react";
import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import theme from "../../lib/theme";

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
    <Alert
      m="0 auto"
      maw={600}
      mt={16}
      mb={16}
      variant="filled"
      color={severity === "high" ? "#ca2005" : "#FF4D30"}
      icon={<IconInfoCircle />}
    >
      {children}
    </Alert>
  );
};

export default InfoBox;
