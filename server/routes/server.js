const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Failed to connect to MongoDB', error);
});

// Add middleware to parse JSON requests
app.use(express.json());

const habitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    frequency: String,
    completed: { type: Boolean, default: false }
});

const Habit = mongoose.model('Habit', habitSchema);

app.post('/habits', async (req, res) => {
    const habit = new Habit({
        title: req.body.name,
        description: req.body.description,
        frequency: req.body.frequency,
        duration: req.body.duration,
    });
    try {
        const newHabit = await habit.save();
        res.status(201).json(newHabit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/habits', async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/habits/:id', getHabit, (req, res) => {
    res.json(res.habit);
});

app.patch('/habits/:id', getHabit, async (req, res) => {
    if (req.body.title != null) {
        res.habit.title = req.body.title;
    }
    if (req.body.description != null) {
        res.habit.description = req.body.description;
    }
    if (req.body.frequency != null) {
        res.habit.frequency = req.body.frequency;
    }
    if (req.body.completed != null) {
        res.habit.completed = req.body.completed;
    }

    try {
        const updatedHabit = await res.habit.save();
        res.json(updatedHabit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/habits/:id', getHabit, async (req, res) => {
    try {
        await res.habit.remove();
        res.json({ message: 'Deleted habit' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getHabit(req, res, next) {
    let habit;
    try {
        habit = await Habit.findById(req.params.id);
        if (habit == null) {
            return res.status(404).json({ message: 'Cannot find habit' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.habit = habit;
    next();
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
