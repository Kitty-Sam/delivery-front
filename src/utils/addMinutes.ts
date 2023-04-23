export const addMinutes = (date: Date, mins: number) => {
    const newDate = new Date(date.getTime() + mins * 60000);
    const hours = newDate.getHours().toString();
    const minutes = newDate.getMinutes().toString();
    const min = Number(minutes) < 10 ? 0 + minutes : minutes;
    return {
        result: `${hours}:${min}`,
        format: newDate,
    };
};

export const getHoursAndMinutesNow = () => {
    const newDate = new Date();
    const hours = newDate.getHours().toString();
    const minutes = newDate.getMinutes().toString();
    const min = Number(minutes) < 10 ? 0 + minutes : minutes;
    return {
        result: `${hours}:${min}`,
        format: newDate,
    };
};
