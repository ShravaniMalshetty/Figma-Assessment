import { ArrowLeft } from 'lucide-react';
import Header from './components/layout/Header';
import BillingForm from './components/checkout/BillingForm';
import OrderSummary from './components/checkout/OrderSummary';

function App() {
  return (
    <div className="w-full max-w-[1280px] min-h-screen mx-auto" style={{ background: '#F3F4F6' }}>
      <Header />

      {/* Center container: 1120px centered inside 1280px body */}
      <div
        className="mx-auto max-lg:px-6 max-sm:px-3"
        style={{ width: 1120, maxWidth: '100%', margin: '0 auto', paddingTop: 24 }}
      >
        {/* Back to plans */}
        <div className="flex items-center gap-2 cursor-pointer" style={{ marginBottom: 16 }}>
          <ArrowLeft size={16} style={{ color: '#6B7280' }} />
          <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#6B7280' }}>
            Back to plans
          </span>
        </div>

        {/* 12-column grid, column-gap: 64px, row-gap: 64px */}
        <div
          className="max-lg:!grid-cols-1 max-lg:!gap-6 max-sm:!gap-4"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 64, rowGap: 64 }}
        >
          {/* Billing form: col 1-7 */}
          <div style={{ gridColumn: '1 / span 7' }} className="max-lg:!col-auto">
            <BillingForm />
          </div>
          {/* Order summary: col 8-12 */}
          <div style={{ gridColumn: '8 / span 5' }} className="max-lg:!col-auto">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
