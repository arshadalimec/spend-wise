const StatCard = ({ title, amount, icon, color, trend }) => {
  const colorMap = {
    green: {
      bg: 'bg-emerald-50',
      icon: 'text-emerald-600',
      amount: 'text-emerald-700',
      border: 'border-emerald-100',
    },
    red: {
      bg: 'bg-rose-50',
      icon: 'text-rose-600',
      amount: 'text-rose-700',
      border: 'border-rose-100',
    },
    blue: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      amount: 'text-slate-900',
      border: 'border-blue-100',
    },
  };

  const colors = colorMap[color] || colorMap.blue;

  const formatAmount = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.abs(num));
  };

  return (
    <div className={`stat-card animate-slide-up`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
          <span className={`text-xl ${colors.icon}`}>{icon}</span>
        </div>
        {trend !== undefined && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="text-sm text-slate-500 font-medium mb-1">{title}</p>
      <p className={`text-2xl font-bold font-display ${colors.amount}`}>
        {formatAmount(amount)}
      </p>
    </div>
  );
};

export default StatCard;
