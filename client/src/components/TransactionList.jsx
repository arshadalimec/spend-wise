import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import toast from 'react-hot-toast';

const CATEGORY_ICONS = {
  'Food & Dining': '🍽️',
  'Transportation': '🚗',
  'Shopping': '🛍️',
  'Entertainment': '🎬',
  'Healthcare': '💊',
  'Housing': '🏠',
  'Utilities': '💡',
  'Education': '📚',
  'Travel': '✈️',
  'Salary': '💼',
  'Freelance': '💻',
  'Investment': '📈',
  'Other': '📌',
};

const TransactionList = () => {
  const { transactions, deleteTransaction, loading } = useTransactions();
  const [deletingId, setDeletingId] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = transactions.filter((t) => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  const handleDelete = async (id) => {
    if (!confirm('Delete this transaction?')) return;
    setDeletingId(id);
    try {
      await deleteTransaction(id);
      toast.success('Transaction deleted');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="font-display font-bold text-lg text-slate-900">
            Transactions
            <span className="ml-2 text-sm font-normal text-slate-400">({filtered.length})</span>
          </h2>
          <div className="flex rounded-xl overflow-hidden border border-slate-200">
            {['all', 'income', 'expense'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-xs font-semibold capitalize transition-all duration-200 ${
                  filter === f ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="spinner w-8 h-8" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-3xl">
            📭
          </div>
          <p className="font-semibold text-slate-700">No transactions yet</p>
          <p className="text-sm text-slate-400 mt-1">Add your first transaction to get started</p>
        </div>
      ) : (
        <div className="divide-y divide-slate-50">
          {filtered.map((t) => (
            <div
              key={t._id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-150 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl flex-shrink-0">
                {CATEGORY_ICONS[t.category] || '📌'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 truncate text-sm">{t.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{formatDate(t.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className={`text-xs font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {t.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`font-bold text-sm font-mono ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {t.type === 'income' ? '+' : '-'}{formatAmount(t.amount)}
                </span>
                <button
                  onClick={() => handleDelete(t._id)}
                  disabled={deletingId === t._id}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100 duration-200"
                >
                  {deletingId === t._id ? (
                    <div className="spinner w-3.5 h-3.5" />
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
