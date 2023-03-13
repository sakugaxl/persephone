import React, { useState, useEffect } from 'react';
import { Navbar, HabitCard, HabitForm } from '../components';

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('/habits')
            .then(response => response.json())
            .then(data => setHabits(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const handleAddHabit = (newHabit) => {
        setLoading(true);
        fetch('/habits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabit),
        })
            .then(response => response.json())
            .then(data => setHabits(prevHabits => [...prevHabits, data]))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <div>
            <Navbar />
            <h1 className="font-extrabold text-[#222328] text-[32px]">Persephone</h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Grow virtually, in real life.</p>

            <div className="mt-10">
                <h2 className="text-[#222328] text-[24px] font-bold">My Habits</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {habits.map(habit => (
                        <HabitCard key={habit.id} habit={habit} />
                    ))}
                </div>
            </div>

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <h2 className="text-[#222328] text-[24px] font-bold">Add a Habit</h2>
                <HabitForm onSubmit={handleAddHabit} />
            </div>
        </div>
    )
}

export default Dashboard;
