export const register = (req, res) => {
    try {
        const newUser = new User({
            username: "test",
            email: "test",
            password: "test",
            country:"test"
        })
    } catch (error) {
        res.status(500).send("Something went Wrong!")
    }
}
export const login = (req, res) => {
    
}
export const logout = (req, res) => {
    
}


