import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BillingForm() {
  const [formData, setFormData] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getreelax.com',
    gstNumber: '',
    panNumber: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div
      className="bg-white max-sm:py-5 max-sm:px-4"
      style={{
        borderRadius: 10,
        paddingRight: 32,
        paddingLeft: 32,
        paddingTop: 32,
        paddingBottom: 32,
        border: '1px solid #E5E7EB',
      }}
    >
      {/* Heading */}
      <h1
        className="max-sm:text-[22px] max-sm:leading-8"
        style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 26,
          lineHeight: '40px',
          letterSpacing: -0.9,
          color: '#111827',
          marginBottom: 15,
        }}
      >
        Review your details
      </h1>

      <h2
        className="max-sm:text-lg max-sm:leading-6"
        style={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: 20,
          lineHeight: '28px',
          color: '#111827',
          marginBottom: 15,
        }}
      >
        Billing Information
      </h2>

      {/* Form grid — 2 cols desktop, 1 col mobile */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-sm:grid-cols-1 max-sm:gap-y-4">
        {/* Row 1: Company Name + Email */}
        <FormField label="Company Name" value={formData.companyName} onChange={handleChange('companyName')} placeholder="Company Name" variant="white" />
        <FormField label="Email" value={formData.email} onChange={handleChange('email')} placeholder="Email" variant="white" />

        {/* Row 2: GST + PAN */}
        <FormField label="GST Number" labelSuffix=" (Optional)" value={formData.gstNumber} onChange={handleChange('gstNumber')} placeholder="GST Number" variant="white" />
        <FormField label="PAN Number" labelSuffix=" (Optional)" value={formData.panNumber} onChange={handleChange('panNumber')} placeholder="PAN Number" variant="white" />

        {/* Row 3: Premise + Street */}
        <FormField label="Premise/House no." value={formData.premise} onChange={handleChange('premise')} placeholder="Premise/House no." variant="gray" />
        <FormField label="Street" value={formData.street} onChange={handleChange('street')} placeholder="Street" variant="gray" />

        {/* Row 4: State + City */}
        <SelectField label="State" value={formData.state} onChange={handleChange('state')} placeholder="Select state" />
        <SelectField label="City" value={formData.city} onChange={handleChange('city')} placeholder="Select city" />

        {/* Row 5: Country + Pin Code */}
        <FormField label="Country" value={formData.country} onChange={handleChange('country')} placeholder="Country" variant="gray" />
        <FormField label="Pin Code" value={formData.pinCode} onChange={handleChange('pinCode')} placeholder="Pincode" variant="gray" />

        {/* Row 6: Buttons */}
        <div
          className="flex justify-end items-center gap-3 max-sm:gap-2"
          style={{
            gridColumn: '1 / -1',
            paddingTop: 16,
            marginTop: 8,
            borderTop: '1px solid #E5E7EB',
          }}
        >
          <button
            className="cursor-pointer max-sm:flex-1 max-sm:text-center"
            style={{
              height: 46,
              borderRadius: 4,
              padding: '10px 24px',
              border: '1px solid #E5E7EB',
              background: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '24px',
              color: '#111827',
            }}
          >
            Cancel
          </button>
          <button
            className="cursor-pointer max-sm:flex-1 max-sm:text-center"
            style={{
              height: 46,
              borderRadius: 4,
              padding: '13px 24px',
              background: '#1977F2',
              border: 'none',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 14,
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, labelSuffix, value, onChange, placeholder, variant }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '20px',
          color: '#111827',
        }}
      >
        {label}
        {labelSuffix && <span style={{ fontWeight: 400, color: '#6B7280' }}>{labelSuffix}</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none"
        style={{
          height: 44,
          borderRadius: 4,
          padding: '12px 16px',
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '24px',
          border: '1px solid #E5E7EB',
          background: variant === 'white' ? '#FFFFFF' : '#F8FAFC',
          color: '#B0B5BE',
        }}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '20px',
          color: '#111827',
        }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full outline-none cursor-pointer"
          style={{
            height: 44,
            borderRadius: 4,
            padding: '12px 16px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '24px',
            border: '1px solid #E5E7EB',
            appearance: 'none',
            background: '#F8FAFC',
            color: '#B0B5BE',
          }}
        >
          <option value="" disabled>{placeholder}</option>
        </select>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: '#1977F2' }}
        />
      </div>
    </div>
  );
}
