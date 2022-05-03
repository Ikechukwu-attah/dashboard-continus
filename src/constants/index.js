import WidgetWithDropdown from "../components/Widget/WidgetWithDropdown";

export const getClientFilter = "?where=data.role:in:user";

export const getUserFilter = "?where=data.role:in:admin,personnel";

export const widgetComponents = {
    uptime: {
        Component: WidgetWithDropdown,
        label: "Overall Uptime(Hours)",
    },
    operators: { Component: WidgetWithDropdown, label: "Number of Operators" },
    trucks: { Component: WidgetWithDropdown, label: "Active trucks" },
    shock: { Component: WidgetWithDropdown, label: "Total shocks" },
    monthly_availability: {
        Component: WidgetWithDropdown,
        label: "Monthly Availability",
    },
};