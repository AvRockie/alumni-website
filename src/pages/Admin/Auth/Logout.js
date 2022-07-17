export const logoutHelper = () => {
    const authToken = localStorage.getItem('token')
    if (!authToken) {
        alert("not logged in")
    } else {
        localStorage.removeItem('token')
        return {
            "message": "Logged out successfully"
        }
    }
}