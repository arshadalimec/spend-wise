import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import toast from 'react-hot-toast';

const CATEGORIES = {
  expense: ['Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 'Healthcare', 'Housing', 'Utilities', 'Education', 'Travel', 'Other'],
  income: ['Salary', 'Freelance', 'Investment', 'Other'],
};

const AddTransaction = () => {
  const { addTransaction } = useTransactions();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'type' && { category: '' }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category) {
      toast.error('Please fill in all fields');
      return;
    }
    if (parseFloat(form.amount) <= 0) {
      toast.error('Amount must be greater than 0');
      return;
    }

    setLoading(true);
    try {
      await addTransaction(form);
      toast.success('Transaction added!');
      setForm({
        title: '',
        amount: '',
        category: '',
        type: 'expense',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="font-display font-bold text-lg text-slate-900 mb-5">Add Transaction</h2>

      {/* Type Toggle */}
      <div className="flex rounded-xl overflow-hidden border border-slate-200 mb-5">
        {['expense', 'income'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, type: t, category: '' }))}
            className={`flex-1 py-2.5 text-sm font-semibold transition-all duration-200 capitalize ${
              form.type === t
                ? t === 'income'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-rose-500 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t === 'income' ? '+ Income' : '- Expense'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Grocery shopping"
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount (₹)</label>
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="0.00"
            min="0.01"
            step="0.01"
            className="input-field font-mono"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
          <select name="category" value={form.category} onChange={handleChange} className="input-field" required>
            <option value="">Select category</option>
            {CATEGORIES[form.type].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
          {loading ? (
            <>
              <div className="spinner w-4 h-4" />
              Adding...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Add Transaction
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
