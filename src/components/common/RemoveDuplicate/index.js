export const removeDuplicate = (data, filteredItem) => {

    if (!(filteredItem && typeof filteredItem === "function")) {
        throw new Error("second argument should be a function")
    }
    const dropdownData = []

    data.forEach(item => {
        const { data } = item

        const dropdownItem = filteredItem(data)
        if (!dropdownData.includes(dropdownItem)) {
            dropdownData.push(dropdownItem)
        }
    })

    console.log("dropdown data2222", dropdownData)

    return dropdownData
};