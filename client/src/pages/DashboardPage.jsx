import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTransactions } from '../context/TransactionContext';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import AddTransaction from '../components/AddTransaction';
import TransactionList from '../components/TransactionList';
import Charts from '../components/Charts';

const DashboardPage = () => {
  const { user } = useAuth();
  const { fetchTransactions, totalIncome, totalExpense, balance, transactions, loading } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const currentMonth = new Date().toLocaleString('en-IN', { month: 'long', year: 'numeric' });

  // Monthly stats
  const now = new Date();
  const monthlyTransactions = transactions.filter((t) => {
    const d = new Date(t.date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });

  const monthlyIncome = monthlyTransactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const monthlyExpense = monthlyTransactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between py-6 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">
              Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'},{' '}
              <span className="text-gradient">{user?.name?.split(' ')[0]}</span> 👋
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">Here's your financial overview for {currentMonth}</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm text-slate-600 shadow-sm">
            <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {currentMonth}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            title="Current Balance"
            amount={balance}
            icon="💳"
            color={balance >= 0 ? 'blue' : 'red'}
          />
          <StatCard
            title="Total Income"
            amount={totalIncome}
            icon="📈"
            color="green"
          />
          <StatCard
            title="Total Expenses"
            amount={totalExpense}
            icon="📉"
            color="red"
          />
        </div>

        {/* Monthly Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-brand-500 to-emerald-500 rounded-2xl p-5 text-white">
            <p className="text-white/80 text-sm font-medium mb-1">This Month's Income</p>
            <p className="font-display text-2xl font-bold">
              ₹{monthlyIncome.toLocaleString('en-IN')}
            </p>
            <p className="text-white/70 text-xs mt-1">
              {monthlyTransactions.filter((t) => t.type === 'income').length} transactions
            </p>
          </div>
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-5 text-white">
            <p className="text-white/80 text-sm font-medium mb-1">This Month's Spending</p>
            <p className="font-display text-2xl font-bold">
              ₹{monthlyExpense.toLocaleString('en-IN')}
            </p>
            <p className="text-white/70 text-xs mt-1">
              {monthlyTransactions.filter((t) => t.type === 'expense').length} transactions
            </p>
          </div>
        </div>

        {/* Charts */}
        {transactions.length > 0 && (
          <div className="mb-8">
            <Charts />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AddTransaction />
          </div>
          <div className="lg:col-span-2">
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
