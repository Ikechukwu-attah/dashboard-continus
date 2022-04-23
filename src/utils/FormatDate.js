export const formatDate = (date) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    if (date) {
        const dates = new Date(date.toString());
        const day = dates.getDate();
        const month = months[dates.getMonth()];
        const year = dates.getFullYear();
        return {
            ["dd/month/yyyy"]: `${day} ${month}, ${year}`,
            ["yyyy-mm-dd"]: `${year}-${dates.getMonth() + 1}-${dates.getDate()}`
        };
    }
};