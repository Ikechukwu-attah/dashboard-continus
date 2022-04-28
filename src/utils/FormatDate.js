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

    const addZeroToDate = (date) => {
        return date.replace(/(^|\D)(\d)(?!\d)/g, "$10$2");
    };

    if (date) {
        const dates = new Date(date.toString());
        const day = dates.getDate();
        const month = months[dates.getMonth()];
        const year = dates.getFullYear();
        return {
            ["dd/month/yyyy"]: addZeroToDate(`${day} ${month}, ${year}`),
            ["yyyy-mm-dd"]: addZeroToDate(
                `${year}-${dates.getMonth() + 1}-${dates.getDate()}`
            ),
        };
    }
};