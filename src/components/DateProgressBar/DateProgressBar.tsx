import React, { useState, useEffect } from "react";
import { Progress, Tooltip } from "@mantine/core";

interface DateProgressBarProps {
  pickedDate: string;
  startDate: string;
}

const DateProgressBar: React.FC<DateProgressBarProps> = ({
  pickedDate,
  startDate,
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      // const startTime = new Date(startDate).getTime();
      // const maxTime = new Date(pickedDate).getTime();
      // const today = new Date();
      // const currentTime = today.getTime();

      // const totalDays = (maxTime - startTime) / (1000 * 3600 * 24);
      // const passedDays =
      //   (currentTime - today.setHours(0, 0, 0, 0)) / (1000 * 3600 * 24);

      // const newProgress = Number(((passedDays / totalDays) * 100).toFixed(2));
      // setProgress(newProgress);
      // console.log("progress: ", progress);
      const startTime = new Date(startDate).getTime();
      const maxTime = new Date(pickedDate).getTime();
      const today = new Date();
      const currentTime = today.getTime();

      // Adjusting totalDays to account for same-day duration as at least 1 day
      const totalDays = Math.max((maxTime - startTime) / (1000 * 3600 * 24), 1);

      // Correct calculation for passedDays to consider current time within the day
      const passedTime = currentTime - startTime; // Time passed in milliseconds since start
      const passedDays = Math.min(passedTime / (1000 * 3600 * 24), totalDays); // Ensuring passedDays does not exceed totalDays

      const newProgress = Number(((passedDays / totalDays) * 100).toFixed(2));
      setProgress(newProgress);

      console.log("passed:", passedDays);
      console.log("progress:", newProgress);
    };

    // Update progress initially
    updateProgress();

    // Update progress every day
    const intervalId = setInterval(updateProgress, 86400000); // 86400000 ms = 1 day

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [pickedDate, startDate, progress]);

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
