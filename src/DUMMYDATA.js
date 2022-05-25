import Cloud from "./Icons/Cloud";
import CloudBlue from "./Icons/CloudBlue";
import CloudGreen from "./Icons/CloudGreen";
import Droplet from "./Icons/Droplet";

export const roleData = ["admin", "personnel"];

export const widgets = ["Widget 1", "Widget 2", "Widget 3"];

export const years = ["2019", "2020", "2021", "2022"];

export const locations = ["Lagos", "Enugu", "Abuja"];

export const period = ["2012-2022", "2022-2023", "2022-2035"];

export const trucks = ["Truck 1", "Truck 2", "Truck 3"];

export const maintenanceListLookup = {
    "1000 Hours Routine": 1000,
    "500 Hours Routine": 500,
    "3000 Hours Routine": 3000,
    "6000 Hours Routine": 6000,
    Attachment: 200,
};

export const maintenanceList = [
    "1000 Hours Routine",
    "500 Hours Routine",
    "3000 Hours Routine",
    "6000 Hours Routine",
    "Attachment",
];

export const Co2DataItem = [
    { title: "Disel saved (liters)", count: 2900, icon: < Droplet / > },
    { title: "Co2 Reduction (Kg)", count: 2.6, icon: < Cloud / > },
    { title: "Co2 Reduction (tons)", count: 60, icon: < CloudBlue / > },
    { title: "Carbon credit", count: 67, icon: < CloudGreen / > },
];

export const generalDashbordCardItem = [{
        id: 1,
        label: "Number of Operators",
        count: "60",
    },

    {
        id: 2,
        label: "Activated Trucks",
        count: "70",
    },

    {
        id: 3,
        label: "Overall Uptime(Hours)",
        count: "2556",
    },
];

export const companies = ["Etex", "Heniken", "Seven-Up", "ABC", "Coca-cola"];