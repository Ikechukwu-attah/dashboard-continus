const baseURL = process.env.REACT_APP_BASE_URL

export const adminLoginAPI = `${baseURL}/api/auth/login`
export const createAdminAPI = `${baseURL}/api/admin/admin`
export const clientLoginAPI = `${baseURL}/api/auth/login`
export const createClientAPI = `${baseURL}/api/admin/client`
export const resetPasswordAPI = `${baseURL}/api/auth/change-password`
export const getAllAdminAPI = `${baseURL}/api/admin/admin`
export const getAllClientAPI = `${baseURL}/api/admin/client`
export const deleteAdminAPI = `${baseURL}/api/admin/admin`
export const forgetPasswordAPI = `${baseURL}/api/auth/reset-password`