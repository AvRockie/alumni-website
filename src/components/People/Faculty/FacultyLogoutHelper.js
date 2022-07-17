export const FacultyLogoutHelper = () => {
    const authToken = localStorage.getItem('faculty_token')
    if (!authToken) {
        alert("not logged in")
    } else {
        localStorage.removeItem('faculty_token')
        localStorage.removeItem('user_id')
        return {
            "message": "Logged out successfully"
        }
    }
}