import Users from '../model/auth'
export const login = async (req, res) => {
    try {
        let user = req.body.user
        let password = req.body.password
        console.log(user)
        if (!user) return res.json({ message: 'User is required' })
        let savedUser = await Users.findOne({
            user
        })
        console.log(savedUser)
        if (savedUser) {
            if (password === savedUser.password) {
                savedUser = savedUser.user
                return res.json({ message: 'Logged In', savedUser })
            }
            return res.json({ message: 'Wrong password' })
        } else {
            return res.json({ message: 'Invalid User', userr })
        }
    } catch (err) {
        return res.json({ message: err.message })
    }
}
export const register = async (req, res) => {

    try {
        let user = req.body.user
        let password = req.body.password
        console.log(user)
        if (!user) return res.json({ message: 'User is required' })
        let savedUser = await Users.findOne({
            user
        })
        console.log(savedUser)
        if (savedUser) {
            return res.json({ message: 'User already exists' })
        } else {
            let userr = await Users.create({ user, password })
            userr = userr.user
            return res.json({ message: 'User Registered Successfully', userr })
        }
    } catch (err) {
        return res.json({ message: err.message })
    }
}