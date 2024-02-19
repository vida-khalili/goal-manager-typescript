import React, { useState, useEffect } from "react";
import { Progress, Tooltip } from "@mantine/core";

interface DateProgressBarProps {
  pickedDate: string;
}

const DateProgressBar: React.FC<DateProgressBarProps> = ({ pickedDate }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      const today = new Date();
      const maxTime = new Date(pickedDate).getTime();
      const currentTime = today.getTime();

      const totalDays = (maxTime - currentTime) / (1000 * 3600 * 24);
      const passedDays =
        (currentTime - today.setHours(0, 0, 0, 0)) / (1000 * 3600 * 24);

      const newProgress = (passedDays / totalDays) * 100;
      setProgress(newProgress);
      console.log("progress days", newProgress);
      console.log("totalDays:", totalDays);
    };

    // Update progress initially
    updateProgress();

    // Update progress every day
    const intervalId = setInterval(updateProgress, 86400000); // 86400000 ms = 1 day

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [pickedDate]);

  return (
    <div>
      <Progress.Root w={100}>
        <Tooltip label="days passed">
          <Progress.Section value={progress} color="cyan">
            <Progress.Label>days</Progress.Label>
          </Progress.Section>
        </Tooltip>
      </Progress.Root>
    </div>
  );
};

export default DateProgressBar;
