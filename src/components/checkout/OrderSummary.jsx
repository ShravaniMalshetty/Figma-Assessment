import { useState } from 'react';
import { PlusCircle, Wallet, Tag, ChevronUp } from 'lucide-react';

export default function OrderSummary() {
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');

  return (
    <div className="flex flex-col gap-[15px]">
      {/* Top card: Plan info + Upgrade */}
      <div
        className="flex flex-col gap-4 max-sm:p-5"
        style={{
          borderRadius: 10,
          padding: 32,
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
        }}
      >
        {/* Order Summary heading */}
        <h2
          className="max-sm:text-xl max-sm:leading-7"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '32px',
            color: '#111827',
          }}
        >
          Order Summary
        </h2>

        {/* Price card */}
        <div
          className="flex flex-col gap-2"
          style={{
            borderRadius: 4,
            padding: '20px 24px',
            background: '#FFFFFF',
            border: '1px solid #4388FF4D',
            boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A',
          }}
        >
          <div className="flex items-start justify-between flex-wrap gap-3 max-sm:flex-col max-sm:gap-1">
            {/* Price */}
            <div className="flex items-baseline gap-1">
              <span
                className="max-sm:text-2xl max-sm:leading-8"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 800,
                  fontSize: 30,
                  lineHeight: '36px',
                  color: '#111827',
                }}
              >
                &#x20B9;4,999
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 14, lineHeight: '24px', color: '#6B7280' }}>
                /month
              </span>
            </div>
            {/* Badge */}
            <div className="flex flex-col">
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#1977F2' }}>
                Selected Plan
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#111827' }}>
                Startup
              </span>
            </div>
          </div>
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#6B7280' }}>
            Includes 5,000 credits/mo.
          </span>
        </div>

        {/* Upgrade button */}
        <button
          className="w-full flex items-center justify-center gap-2 cursor-pointer"
          style={{
            height: 42,
            borderRadius: 24,
            padding: '10px 0',
            background: '#4378FF0D',
            border: '1px solid #436FFF4D',
          }}
        >
          <PlusCircle size={16} style={{ color: '#1977F2' }} />
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#1977F2', textAlign: 'center' }}>
            Upgrade to Growth Plan
          </span>
        </button>
      </div>

      {/* Bottom card: Wallet + Coupon + Totals + Pay */}
      <div
        className="flex flex-col gap-3 max-sm:px-4 max-sm:pb-5"
        style={{
          borderRadius: 10,
          paddingTop: 14,
          paddingRight: 32,
          paddingBottom: 32,
          paddingLeft: 32,
          border: '1px solid #E5E7EB',
          background: '#FFFFFF',
        }}
      >
        {/* Wallet Balance */}
        <div
          className="flex justify-between items-center mt-3"
          style={{ borderRadius: 4, border: '1px solid #E5E7EB', padding: 16, background: '#FFFFFF' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#EFF6FF' }}>
              <Wallet size={16} style={{ color: '#1977F2' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#111827' }}>
                Wallet Balance
              </div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 12, lineHeight: '16px', color: '#6B7280' }}>
                &#x20B9;500.00 available
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer"
            style={{
              height: 34, borderRadius: 4, padding: '6px 12px',
              border: '1px solid #3171FF33', background: '#FFFFFF',
              fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#1977F2', textAlign: 'center',
            }}
          >
            Apply
          </button>
        </div>

        {/* Apply Coupon section */}
        <div style={{ borderRadius: 4, border: '1px solid #E5E7EB', background: '#FFFFFF', boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
          {/* Header */}
          <div className="flex justify-between items-center" style={{ padding: 16, borderBottom: '1px solid #E5E7EB' }}>
            <div className="flex items-center gap-3">
              <Tag size={18} style={{ color: '#6B7280' }} />
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#111827' }}>
                Apply Coupon
              </span>
            </div>
            <ChevronUp size={16} style={{ color: '#6B7280' }} />
          </div>

          {/* Body */}
          <div className="flex flex-col gap-2" style={{ padding: 16 }}>
            {/* Input row */}
            <div className="flex gap-2 max-sm:flex-col">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 outline-none"
                style={{
                  height: 38, borderRadius: 4, padding: '8px 12px',
                  border: '1px solid #E5E7EB', fontFamily: 'Inter', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#111827',
                }}
              />
              <button
                className="cursor-pointer"
                style={{
                  height: 34, borderRadius: 4, padding: '6px 12px',
                  border: '1px solid #3171FF33', background: '#FFFFFF',
                  fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#1977F2', textAlign: 'center',
                }}
              >
                Apply
              </button>
            </div>

            {/* WELCOME20 */}
            <CouponOption code="WELCOME20" description="20% off on your first month" selected={selectedCoupon === 'WELCOME20'} onSelect={() => setSelectedCoupon('WELCOME20')} />
            {/* ANNUAL50 */}
            <CouponOption code="ANNUAL50" description="50% off on annual plans" selected={selectedCoupon === 'ANNUAL50'} onSelect={() => setSelectedCoupon('ANNUAL50')} />
          </div>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-4" style={{ paddingTop: 8, paddingBottom: 16 }}>
          <div className="flex justify-between items-center">
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#6B7280' }}>Subtotal</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#000000' }}>&#x20B9;14,999.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#6B7280' }}>Tax (18% GST)</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#000000' }}>&#x20B9;1,079.64</span>
          </div>
          <div className="flex justify-between items-center" style={{ paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#111827' }}>Total due today</span>
            <span className="max-sm:text-xl" style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 24, lineHeight: '32px', color: '#1977F2' }}>16,078.64</span>
          </div>
        </div>

        {/* Proceed to Payment */}
        <button
          className="w-full flex items-center justify-center cursor-pointer"
          style={{ height: 43, borderRadius: 4, padding: 16, background: '#1977F2', border: 'none' }}
        >
          <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF', textAlign: 'center' }}>
            Proceed to Payment
          </span>
        </button>
      </div>
    </div>
  );
}

function CouponOption({ code, description, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="flex items-center justify-between cursor-pointer"
      style={{
        padding: '8px 12px',
        borderRadius: 4,
        border: selected ? '1px solid #1977F2' : '1px solid #E5E7EB',
        background: '#FFFFFF',
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#111827' }}>{code}</span>
        <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 10, lineHeight: '16px', color: '#6B7280' }}>{description}</span>
      </div>
      <div
        className="shrink-0"
        style={{
          width: 16, height: 16, borderRadius: 999,
          border: selected ? '4px solid #1977F2' : '1px solid #D1D5DB',
          background: '#FFFFFF',
        }}
      />
    </div>
  );
}
