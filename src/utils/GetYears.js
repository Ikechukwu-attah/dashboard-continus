export const getYears = (start, end) => {
    let years = [];
    for (let index = start; index <= end; index++) {
        years.push(index);
    }
    return years.reverse();
};