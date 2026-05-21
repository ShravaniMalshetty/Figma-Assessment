import { Search, Diamond, Plus, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header
      className="w-full h-[71px] flex items-center justify-between px-20 bg-white border-b border-[#E5E7EB]
        max-lg:px-8
        max-sm:px-4 max-sm:h-[60px]"
    >
      {/* Search bar */}
      <div className="relative w-[420px] max-lg:w-[240px] max-sm:flex-1 max-sm:w-auto max-sm:mr-3">
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="w-full h-11 rounded-[22px] border-[1.5px] border-[#E5E7EB] pl-5 pr-11 text-sm font-normal leading-5 text-[#111827] outline-none bg-white
            max-sm:h-[38px] max-sm:text-[13px] max-sm:pl-4 max-sm:pr-10"
        />
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9CA3AF]"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 max-sm:gap-2 shrink-0">
        {/* Upgrade */}
        <button
          className="flex items-center gap-1.5 h-[38px] px-4 rounded-lg border-none font-semibold text-[13px] text-white cursor-pointer shadow-sm
            max-lg:px-3 max-lg:text-xs
            max-sm:h-[34px] max-sm:px-2.5 max-sm:gap-0"
          style={{ background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)' }}
        >
          <Diamond size={14} strokeWidth={2.5} />
          <span className="max-sm:hidden">Upgrade</span>
        </button>

        {/* Create Campaign */}
        <button
          className="flex items-center gap-1.5 h-[38px] px-4 rounded-lg border-none bg-[#1977F2] font-semibold text-[13px] text-white cursor-pointer shadow-sm whitespace-nowrap
            max-lg:px-3 max-lg:text-xs
            max-sm:h-[34px] max-sm:px-2.5 max-sm:gap-0"
        >
          <Plus size={14} strokeWidth={2.5} />
          <span className="max-sm:hidden">Create Campaign</span>
        </button>

        {/* Avatar */}
        <div
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer shrink-0
            max-sm:w-[30px] max-sm:h-[30px]"
          style={{ background: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)' }}
        >
          <User size={18} className="text-white" />
        </div>

        {/* Hamburger */}
        <Menu size={22} className="text-[#374151] cursor-pointer shrink-0" strokeWidth={2} />
      </div>
    </header>
  );
}
