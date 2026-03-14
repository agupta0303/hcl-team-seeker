const getGoals = async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
};

const createGoal = async (req, res) => {
    res.status(201).json({ message: 'Create goal' });
};

const updateGoalProgress = async (req, res) => {
    res.status(200).json({ message: 'Update goal progress' });
};

const deleteGoal = async (req, res) => {
    res.status(200).json({ message: 'Delete goal' });
};

module.exports = {
    getGoals,
    createGoal,
    updateGoalProgress,
    deleteGoal
};
