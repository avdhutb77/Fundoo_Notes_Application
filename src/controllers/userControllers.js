
import User from '../models/user.js';


export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists');

    const user = new User({ name, email, password });
    try {
        const savedUser = await user.save();
        res.status(201).send({ user: savedUser });
    } catch (err) {
        res.status(400).send(err);
    }
};



export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Email not found');

    if (user.password !== password) return res.status(400).send('Invalid password');

    res.send('Logged in successfully...');
};