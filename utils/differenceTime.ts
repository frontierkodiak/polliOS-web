// utils/timeDifference.ts

const timeDifference = (rawDateTime: string): string => {
    const now = Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds(), new Date().getUTCMilliseconds()); // Current UTC time in milliseconds
    const then = new Date(rawDateTime).getTime(); // Provided rawDateTime in milliseconds
    const differenceInMinutes = (now - then) / (1000 * 60); // Calculate the difference in minutes

    console.log(`now: ${now}`);
    console.log(`then: ${then}`);
    console.log(`differenceInMinutes: ${differenceInMinutes}`);

    if (then === 0) {
        return "N/A";
    } else if (differenceInMinutes < 1) {
        // return "just now";
        return `${Math.round(differenceInMinutes)}m`;
    } else if (differenceInMinutes < 60) {
        return `${Math.round(differenceInMinutes)}m`;
    } else {
        const differenceInHours = Math.round(differenceInMinutes / 60);
        return `${differenceInHours}h`;
    }
};

export default timeDifference;