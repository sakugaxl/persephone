const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

// Create a habit
router.post('/', async (req, res) => {
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
});

// Get all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single habit by ID
router.get('/:id', getHabit, (req, res) => {
  res.json(res.habit);
});

// Update a habit by ID
router.patch('/:id', getHabit, async (req, res) => {
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

// Delete a habit by ID
router.delete('/:id', getHabit, async (req, res) => {
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

module.exports = router;
