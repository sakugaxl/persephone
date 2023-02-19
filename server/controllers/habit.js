const Habit = require('../models/habit');

// Create a habit
exports.createHabit = async (req, res) => {
  const habit = new Habit({
    title: req.body.title,
    description: req.body.description,
    frequency: req.body.frequency,
  });

  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all habits
exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single habit by ID
exports.getHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: 'Cannot find habit' });
    }
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a habit by ID
exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: 'Cannot find habit' });
    }
    if (req.body.title != null) {
      habit.title = req.body.title;
    }
    if (req.body.description != null) {
      habit.description = req.body.description;
    }
    if (req.body.frequency != null) {
      habit.frequency = req.body.frequency;
    }
    if (req.body.completed != null) {
      habit.completed = req.body.completed;
    }
    const updatedHabit = await habit.save();
    res.json(updatedHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a habit by ID
exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: 'Cannot find habit' });
    }
    await habit.remove();
    res.json({ message: 'Deleted habit' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
