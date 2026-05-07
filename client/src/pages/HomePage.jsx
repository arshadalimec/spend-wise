import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: '📊',
    title: 'Smart Analytics',
    description: 'Beautiful charts and insights to understand your spending patterns at a glance.',
  },
  {
    icon: '🔐',
    title: 'Secure & Private',
    description: 'Bank-level security with JWT authentication and encrypted data storage.',
  },
  {
    icon: '⚡',
    title: 'Real-time Updates',
    description: 'Instant transaction recording with live balance updates across all devices.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Works seamlessly on mobile, tablet, and desktop for tracking on the go.',
  },
  {
    icon: '🏷️',
    title: 'Smart Categories',
    description: 'Organize transactions with smart categories for food, travel, shopping, and more.',
  },
  {
    icon: '💰',
    title: 'Budget Tracking',
    description: 'Monitor income vs expenses and maintain a healthy financial balance.',
  },
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '₹50M+', label: 'Tracked Monthly' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9★', label: 'User Rating' },
];

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Smart Financial Tracking
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-slide-up">
              Master Your
              <br />
              <span className="text-gradient">Finances</span> Today
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-fade-in font-body leading-relaxed">
              SpendWise helps you track every rupee, visualize spending patterns, and build
              better financial habits with an intuitive, beautiful interface.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
              {user ? (
                <Link to="/dashboard" className="btn-primary text-base px-8 py-4">
                  Go to Dashboard →
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-200">
                    Start for Free →
                  </Link>
                  <Link to="/login" className="btn-secondary text-base px-8 py-4">
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Mock Dashboard Preview */}
            <div className="mt-16 relative animate-fade-in">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 max-w-3xl mx-auto">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Total Balance', value: '₹84,250', color: 'text-slate-900', bg: 'bg-slate-50' },
                    { label: 'Income', value: '₹1,20,000', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Expenses', value: '₹35,750', color: 'text-rose-600', bg: 'bg-rose-50' },
                  ].map((s) => (
                    <div key={s.label} className={`${s.bg} rounded-2xl p-4 text-left`}>
                      <p className="text-xs text-slate-500 mb-1">{s.label}</p>
                      <p className={`font-display font-bold text-lg ${s.color}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="h-32 bg-gradient-to-r from-brand-50 to-emerald-50 rounded-2xl flex items-center justify-center">
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                      <div key={i} className="w-5 rounded-t-md bg-gradient-to-t from-brand-500 to-emerald-400 opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-900/5 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-bold text-3xl text-white mb-1">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Everything you need to
              <span className="text-gradient"> spend smarter</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Powerful features designed to give you complete visibility and control over your financial life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to take control?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Join thousands of users who've transformed their financial habits with SpendWise.
          </p>
          <Link
            to={user ? '/dashboard' : '/signup'}
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-brand-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            {user ? 'Go to Dashboard' : 'Create Free Account'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
