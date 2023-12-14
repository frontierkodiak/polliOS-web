// utils/formatTime.ts

const formatTime = (rawDateTime: string): string => {
    const date = new Date(rawDateTime);
    const localDate = new Date(date.toLocaleString('en-US')); // Convert to local timezone

    let hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const isAM = hours < 12;

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${isAM ? 'AM' : 'PM'}`;

    return formattedTime;
};

export default formatTime;
