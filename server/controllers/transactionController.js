const Transaction = require('../models/Transaction');

// @desc   Get all transactions for user
// @route  GET /api/transactions
// @access Private
const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id })
      .sort({ date: -1 })
      .lean();

    res.json({ success: true, transactions });
  } catch (error) {
    next(error);
  }
};

// @desc   Create new transaction
// @route  POST /api/transactions
// @access Private
const createTransaction = async (req, res, next) => {
  try {
    const { title, amount, category, type, date } = req.body;

    if (!title || !amount || !category || !type) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const transaction = await Transaction.create({
      userId: req.user._id,
      title,
      amount: parseFloat(amount),
      category,
      type,
      date: date || new Date(),
    });

    res.status(201).json({
      success: true,
      message: 'Transaction added successfully',
      transaction,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Delete transaction
// @route  DELETE /api/transactions/:id
// @access Private
const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    if (transaction.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this transaction' });
    }

    await transaction.deleteOne();
    res.json({ success: true, message: 'Transaction deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTransactions, createTransaction, deleteTransaction };
