const { user } = require("../../../utils/database")

const addUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const exist = await user.findMany({
            where: {
                username,
            },
        });
        console.log(exist);

        if (!exist.length) {
            const newUser = await user.create({
                data: {
                    username,
                    email,
                    password
                },
            });
            res.json({ created: newUser });
        } else {
            res.json({ msg: `Username ${userName} already exict in DB` });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await user.findMany();
        res.json({ users });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { addUser, getAllUsers }