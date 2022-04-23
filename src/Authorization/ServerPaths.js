const baseURL = process.env.REACT_APP_BASE_URL


// AUTHENTICATION API

export const adminLoginAPI = `${baseURL}/api/auth/login`
export const createAdminAPI = `${baseURL}/api/admin/admin`
export const clientLoginAPI = `${baseURL}/api/auth/login`
export const createClientAPI = `${baseURL}/api/admin/client`
export const resetPasswordAPI = `${baseURL}/api/auth/change-password`
export const getAllAdminAPI = `${baseURL}/api/admin/admin`
export const getAllClientAPI = `${baseURL}/api/admin/client`
export const deleteAdminAPI = `${baseURL}/api/admin/admin`
export const deleteClientAPI = `${baseURL}/api/admin/client`
export const forgetPasswordAPI = `${baseURL}/api/auth/reset-password`
export const getAdminAPI = `${baseURL}/api/admin/admin`
export const getClientAPI = `${baseURL}/api/admin/client`
export const updateAdminAPI = `${baseURL}/api/admin/admin`
export const updateClientAPI = `${baseURL}/api/admin/client`




// DASHBOARD APIs
export const driversManagmentAPI = `${baseURL}/api/user/driver_management`
export const occupancyJournalAPI = `${baseURL}/api/user/occupancy_journal`
export const maintenanceAPI = `${baseURL}/api/user/maintenance_report`
export const monthlyAvaliablityAPI = `${baseURL}/api/user/monthly_availability`
export const allTruckAPI = `${baseURL}/api/user/GetClientTrucks`
export const allCitiyAPI = `${baseURL}/api/user/GetClientCities`
export const shockSensingTableAPI = `${baseURL}/api/user/shock_sensing_table`
export const shockSensingBarAPI = `${baseURL}/api/user/shock_sensing`