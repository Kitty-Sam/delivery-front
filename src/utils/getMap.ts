export const getMap = (array: number[]) => {
    const map: any = {};

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (map[current]) {
            map[current]++;
        } else {
            map[current] = 1;
        }
    }
    return map;
};
