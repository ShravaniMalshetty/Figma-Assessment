# Reelax Checkout Page - Figma to React

A pixel-perfect, responsive implementation of the Reelax checkout/billing page, faithfully converted from a high-fidelity Figma design into a modern React application.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38BDF8?logo=tailwindcss&logoColor=white)

---

## Preview

The application replicates the Reelax checkout interface with two main sections:

- **Billing Form** - Company details, GST/PAN numbers, address fields with dropdowns
- **Order Summary** - Plan pricing, wallet balance, coupon system, and payment breakdown

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19** | Component-based UI framework |
| **Vite 8** | Fast build tool with HMR |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | SVG icon library |
| **Inter (Google Fonts)** | Typography matching Figma specs |

---

## Project Structure

```
figma-assignment/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── checkout/
│   │   │   ├── BillingForm.jsx      # Billing information form with validation
│   │   │   └── OrderSummary.jsx     # Plan details, coupons & payment summary
│   │   ├── layout/
│   │   │   └── Header.jsx           # Top navigation bar with search & actions
│   │   └── common/                  # Reusable UI atoms (buttons, inputs)
│   ├── App.jsx                      # Root component assembling the page layout
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles & Tailwind directives
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## Design Tokens (from Figma)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1977F2` | Buttons, links, badges, active states |
| Text Primary | `#111827` | Headings, labels |
| Text Secondary | `#6B7280` | Descriptions, helper text |
| Text Placeholder | `#B0B5BE` | Input placeholder & prefilled values |
| Border | `#E5E7EB` | Card borders, dividers, input borders |
| Input Fill | `#F8FAFC` | Address & dropdown field backgrounds |
| Background | `#F1F5F9` | Page background |
| White | `#FFFFFF` | Cards, top input fields |

### Typography
| Style | Font | Weight | Size | Line Height |
|-------|------|--------|------|-------------|
| Page Heading | Inter | 600 (Semi Bold) | 26px | 40px |
| Section Title | Inter | 700 (Bold) | 20px | 28px |
| Price | Inter | 800 (Extra Bold) | 30px | 36px |
| Body / Labels | Inter | 500 (Medium) | 14px | 20px |
| Input Text | Inter | 400 (Regular) | 14px | 24px |
| Small Text | Inter | 400 (Regular) | 12px | 16px |

### Spacing & Layout
- Page width: `1280px`
- Content container: `1120px` (12-column grid, 64px gap)
- Billing card: `679px` width, `10px` border-radius
- Order summary card: `429px` width, `10px` border-radius
- Form grid: 2 columns, `20px` row & column gap
- Input fields: `297.5px` width, `44px` height, `4px` border-radius

---

## Features

- **Pixel-Perfect Layout** - All dimensions, colors, and typography extracted directly from Figma inspect panel
- **Component Architecture** - Modular, reusable components (FormField, SelectField, CouponItem)
- **Interactive Elements** - Coupon selection with radio buttons, expandable coupon section
- **Form State Management** - React `useState` for all form inputs
- **Design Token Consistency** - All Figma values mapped to exact CSS properties

---

## Getting Started

### Prerequisites

- **Node.js** version `20.19+` or `22.12+`
- **npm** (bundled with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd figma-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Key Implementation Details

### Figma to Code Translation

| Figma Property | CSS Equivalent |
|----------------|---------------|
| Auto Layout (horizontal) | `display: flex; flex-direction: row` |
| Auto Layout (vertical) | `display: flex; flex-direction: column` |
| Gap | `gap` |
| Fill Container | `flex: 1` / `width: 100%` |
| Grid Layout (rows/columns) | `display: grid; grid-template-columns` |
| Corner Radius | `border-radius` |
| Drop Shadow | `box-shadow` |
| Text Fill (background in Figma) | `color` |

### Component Breakdown

- **Header** - Search bar (pill-shaped), Upgrade button (golden gradient), Create Campaign button (blue), avatar, hamburger menu
- **BillingForm** - 6-row, 2-column grid with two input styles (white for identity fields, gray for address fields), state/city dropdowns with blue chevrons
- **OrderSummary** - Plan pricing card with blue border, wallet balance section, expandable coupon system with radio selection, price breakdown with totals

---

## Author

Built as part of the Reelax frontend assignment.

---

## License

This project is for educational/assignment purposes.
