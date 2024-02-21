import React, { useState, useEffect } from "react";
import { Box, Progress, Text, Tooltip } from "@mantine/core";

interface DateProgressBarProps {
  pickedDate: string;
  startDate: string;
  mode?: "mini" | "full";
}

const DateProgressBar: React.FC<DateProgressBarProps> = ({
  pickedDate,
  startDate,
  mode,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [passedDays, setPassedDays] = useState<number>(0);
  const startTime = new Date(startDate).getTime();
  const maxTime = new Date(pickedDate).getTime();
  const totalDays = Math.max((maxTime - startTime) / (1000 * 3600 * 24), 1);

  useEffect(() => {
    const updateProgress = () => {
      const today = new Date();
      const currentTime = today.getTime();

      // Adjusting totalDays to account for same-day duration as at least 1 day

      // Correct calculation for passedDays to consider current time within the day
      const passedTime = currentTime - startTime; // Time passed in milliseconds since start
      const newPassedDays = Math.min(
        passedTime / (1000 * 3600 * 24),
        totalDays
      ); // Ensuring passedDays does not exceed totalDays
      setPassedDays(newPassedDays);
      const newProgress = Number(
        ((newPassedDays / totalDays) * 100).toFixed(2)
      );
      setProgress(newProgress);
    };

    // Update progress initially
    updateProgress();

    // Update progress every day
    const intervalId = setInterval(updateProgress, 86400000); // 86400000 ms = 1 day

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [pickedDate, startDate, progress]);

  return (
    <Box
      w={"100%"}
      h={"100%"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: `${mode !== "mini" ? "space-between" : "center"}`,
        alignItems: `${mode !== "mini" ? "unset" : "center"}`,
      }}
    >
      <Progress.Root
        w={mode === "mini" ? 100 : "100%"}
        size={mode === "mini" ? "sm" : "xl"}
      >
        <Tooltip label={`days passed - ${progress}%`}>
          <Progress.Section value={progress} color="cyan">
            <Progress.Label>days</Progress.Label>
          </Progress.Section>
        </Tooltip>
      </Progress.Root>
      {mode === "full" && (
        <Box>
          <Text>total days: {Math.round(totalDays)}</Text>
          <Text>days passed: {Math.round(passedDays)}</Text>
          <Text>days remained: {Math.round(totalDays - passedDays)}</Text>
        </Box>
      )}
    </Box>
  );
};

export default DateProgressBar;
