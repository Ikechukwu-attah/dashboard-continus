const getFullDate = (month, day) => {
    const year = new Date().getFullYear()
    return `${year}-${month}-${day}`
}


export const monthLookUp = {
    'Jan': { start: getFullDate("01", "01"), end: getFullDate("01", "31") },
    'Feb': { start: getFullDate("02", "01"), end: getFullDate("02", "28") },
    'Mar': { start: getFullDate("03", "01"), end: getFullDate("03", "31") },
    'Apr': { start: getFullDate("04", "01"), end: getFullDate("04", "30") },
    'May': { start: getFullDate("05", "01"), end: getFullDate("05", "31") },
    'Jun': { start: getFullDate("06", "01"), end: getFullDate("06", "30") },
    'Jul': { start: getFullDate("07", "01"), end: getFullDate("07", "31") },
    'Aug': { start: getFullDate("08", "01"), end: getFullDate("08", "31") },
    'Sept': { start: getFullDate("09", "01"), end: getFullDate("09", "30") },
    'Oct': { start: getFullDate("10", "01"), end: getFullDate("10", "31") },
    'Nov': { start: getFullDate("11", "01"), end: getFullDate("11", "30") },
    'Dec': { start: getFullDate("12", "01"), end: getFullDate("12", "31") },

}

export const quarterLookUp = {
    'First Quarter': {
        start: getFullDate("01", "01"),
        end: getFullDate("03", "31")
    },
    'Second Quarter': {
        start: getFullDate("04", "01"),
        end: getFullDate("06", "30")
    },
    'Third Quarter': {
        start: getFullDate("07", "01"),
        end: getFullDate("09", "30")
    },
    'Fourth Quarter': {
        start: getFullDate("10", "01"),
        end: getFullDate("12", "31")
    }

}



console.log("quater", quarterLookUp)

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const quarter = ['First Quarter', 'Second Quarter', 'Third Quarter', 'Fourth Quarter']

export const batteryInterval = ['minute', 'hour']