// utils/formatTimeSinceLast.ts

const formatTimeSinceLast = (minutesSinceLast: number): string => {
    if (minutesSinceLast <= 0 || minutesSinceLast > 240 * 60) {
      return "N/A";
    } else if (minutesSinceLast < 3) {
      return "just now";
    } else if (minutesSinceLast < 60) {
      return `${Math.round(minutesSinceLast)}m`;
    } else {
      const hoursSinceLast = Math.round(minutesSinceLast / 60);
      return `${hoursSinceLast}h`;
    }
  };
  
  export default formatTimeSinceLast;
  