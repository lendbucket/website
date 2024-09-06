import { FiCalendar, FiCheckCircle, FiStar, FiX } from "react-icons/fi";

export const features = [
  {
    "icon": FiStar,
    "title": "Reports to all 3 bureaus",
    "position": 'left',
    "description": "CreditBolt reports to Experian, Equifax, and TransUnion",
  },
  {
    "icon": FiCalendar,
    "position": 'right',
    "title": "Free FICO® Score monthly",
    "description": "FICO® Scores are used by 90% of top lenders",
  },
  {
    "icon": FiCheckCircle,
    "position": 'left',
    "title": "No hard credit pull",
    "description": "There is no hard credit pull when you open a CreditBolt credit builder account",
  },
  {
    "icon": FiX,
    "position": 'right',
    "title": "You can cancel anytime",
    "description": "You can cancel anytime with no penalty",
  },
]

export const faqForDashboard = [
  {
    "title": "After I open my CreditBolt account, what should I expect?",
    "description": `
      <p style="margin-bottom: 1.25rem;">You will immediately have access to your CreditBolt dashboard. You will receive your first FICO Score 8 within two weeks of opening your account and see the date for your next score update.</p> 
      <p style="margin-bottom: 1.25rem;">For Instal, CS Max, and MAGNUM, your first monthly payment will be due one month after you open your account. When possible, accounts are set up on autopay when opened. You can manually turn off auto-pay by going to the My Account/Payments tab. We recommend that you set up autopay so your payments are made on time.</p> 
      <p style="margin-bottom: 1.25rem;">Typically, your CreditBolt account will appear on your credit report 30-60 days after you make your first payment. Note: We provide your payment information to the three major credit bureaus, but it can take them some time before they process the information and add the account to your credit report. Unfortunately, each credit bureau individually controls when your payment information will be processed and added to your credit report, and we are unable to expedite this process for you.</p> 
      <p style="margin-bottom: 1.25rem;">Remember, the most important part of your credit building journey is to pay on time. Payment history makes up 35% of your FICO score, so it is important to avoid any late payments on your CreditBolt account, or it may harm your credit score.</p>
    `,
  },
  {
    "title": "Instal, CS Max, and MAGNUM are installment credit builder accounts. What is an installment credit builder account?",
    "description": `
      <p style="margin-bottom: 1.25rem;">An installment credit builder account is a cash secured credit builder loan where the loan funds are deposited in a deposit account in your name and locked to secure the loan.</p> 
      <p style="margin-bottom: 1.25rem;">You make monthly payments of principal and interest; the principal builds your saving and is returned to you when your account is closed, the interest is how we earn money to provide the service.</p> 
      <p style="margin-bottom: 1.25rem;">While you will build savings with your installment credit builder account, CS Max and MAGNUM accounts are optimized for building larger amounts of credit, not building savings.</p> 
    `,
  },
  {
    "title": "Can I have multiple Credit Strong accounts open at the same time?",
    "description": `
      <p style="margin-bottom: 1.25rem;">Yes, you may have up to six CreditBolt accounts</p> 
      <ul style="margin-bottom: 1.25rem; margin-left: 1.25rem;">
      <li style="list-style-type: disc">Up to two Revolv accounts</li>
      <li style="list-style-type: disc">Up to two MAGNUM / Instal / or CS Max accounts</li>
      <li style="list-style-type: disc">Up to two CreditBolt Business accounts</li>
      </ul>
      <p style="margin-bottom: 1.25rem;">To open multiple accounts, open your first account and successfully make the first payment and any account opening fees. A tile will appear in your dashboard, allowing you to apply for additional accounts.</p> 
      <p style="margin-bottom: 1.25rem;">If you previously had a CreditBolt account that is now closed, you can open another new account – subject to limitations if your previous account was flagged for suspicious or fraudulent activity.</p> 
    `,
  },
]

export const products = [
  {
    "title": "MAGNUM",
    "path": "https://magnum.bank/",
    "fico": "Average FICO® Score 8 increase of 86 points",
    "description": "in 12 months for MAGNUM 10000 accountholders with a starting credit score of 550 or less, for all accounts opened in 2021 with 12 or more months of account activity that made 12 on-time payments.",
  },
  {
    "title": "REVOLV",
    "path": "/revolv",
    "fico": "Average FICO® Score 8 increase of 62 points",
    "description": "for Revolv accountholders with a starting credit score under 550 who opened an account in Q1 2023 and made optional monthly savings payments between $15 and $45.",
  },
  {
    "title": "INSTAL/CS MAX",
    "path": "/instal",
    "fico": "Average FICO® Score 8 increase of 45 points",
    "description": "for Instal/CS Max accountholders with a starting credit score under 550 who opened an account in Q1 2023 and made at least 3 on-time payments.",
  },
  {
    "title": "Freekick",
    "path": "https://freekick.bank/",
    "fico": "Average first FICO® Score 8 of 721 points",
    "description": "for children with a FreeKick credit builder account. The range of average first scores is 670 to 763. A credit score is generated for an adult child when a minor child with a credit builder account becomes an adult and activates credit reporting.",
  },
]

export const footers = [
  {
    title: 'Accounts',
    items: [
      {
        "label": "REVOLV",
        "path": "/revolv",
      },
      {
        "label": "Instal",
        "path": "/instal",
      },
      {
        "label": "CS Max",
        "path": "/cs-max",
      },
      {
        "label": "CS Business",
        "path": "/cs-business",
      },
      {
        "label": "MAGNUM",
        "path": "https://magnum.bank/",
      },
      {
        "label": "Freekick",
        "path": "https://freekick.bank/",
      },
    ]
  },
  {
    title: 'Company',
    items: [
      {
        "label": "About",
        "path": "/about",
      },
      {
        "label": "FAQs",
        "path": "/faqs",
      },
      {
        "label": "Contact",
        "path": "/contact-us",
      },
    ]
  },
  // {
  //   title: 'Credit 101',
  //   items: [
  //     {
  //       "label": "Payment History and How It Affects Your Credit Score",
  //       "path": "/payment-history",
  //     },
  //     {
  //       "label": "The Amount You Owe",
  //       "path": "/amount-owe",
  //     },

  //     {
  //       "label": "Lenth of Credit History",
  //       "path": "/credit-history",
  //     },
  //     {
  //       "label": "New Credit",
  //       "path": "/new-credit",
  //     },
  //     {
  //       "label": "Types of Credit In Use",
  //       "path": "/types-of-credit",
  //     },
  //   ]
  // },
  {
    title: 'Legal',
    items: [
      {
        "label": "Privacy Policy",
        "path": "/policy",
      },
      {
        "label": "Terms and Conditions",
        "path": "/terms",
      },
      {
        "label": "CCPA",
        "path": "/ccpa",
      },
      {
        "label": "Consumer Complaint Notice",
        "path": "/complaint-notice",
      },
    ]
  }
]

export const businessFooters = [
  {
    title: 'Business Products',
    items: [
      {
        "label": "View Accounts",
        "path": "/business/pricing",
      }
    ]
  },
  {
    title: 'Our Organization',
    items: [
      {
        "label": "About Business",
        "path": "/business/about",
      },
      {
        "label": "Contact",
        "path": "/business/contact-us",
      },
    ]
  },
  {
    title: 'Legal',
    items: [
      {
        "label": "Privacy Policy",
        "path": "/policy",
      },
      {
        "label": "Terms and Conditions",
        "path": "/terms",
      },
      {
        "label": "CCPA",
        "path": "/ccpa",
      },
      {
        "label": "Consumer Complaint Notice",
        "path": "/complaint-notice",
      },
    ]
  }
]

export const revolvTestimonials = [
  {
    "name": "Tim K.",
    "description": "In 3 months my score has improved 84 points. Well worth it to me.",
    "image": "/assets/testimonials/1.jpg"
  },
  {
    "name": "Khalid E.",
    "description": "My score went up 65 points within 30 days",
    "image": "/assets/testimonials/2.jpg"
  }
]

export const instalTestimonials = [
  {
    "name": "Denise.",
    "description": "CreditBolt significantly increased my score.",
    "image": "/assets/testimonials/3.jpeg"
  },
  {
    "name": "Zachary",
    "description": "CreditBolt has helped my credit score go up and stay consistent – I would highly recommend the same thing for anyone who needs help with their credit.",
    "image": "/assets/testimonials/4.jpeg"
  }
]

export const instalPrices = [
  {
    name: "Instal",
    items: [
      {
        type: "header",
        values: ["Monthly Payment", "Term Length", "Installment Credit Reported"],
      },
      {
        type: "price",
        values: ['$28', '48 Months', '$1010']
      },
      {
        type: "price",
        values: ['$38', '36 Months', '$1100']
      },
      {
        type: "price",
        values: ['$48', '24 Months', '$1000']
      }
    ]
  },
  {
    name: "CS MAX",
    items: [
      {
        type: "header",
        values: ["Monthly Payment", "Term Length", "Installment Credit Reported"],
      },
      {
        type: "price",
        values: ['$49', '60 Months', '$2500']
      },
      {
        type: "price",
        values: ['$99', '60 Months', '$5000']
      },
      {
        type: "price",
        values: ['$199', '60 Months', '$10000']
      }
    ]
  },
]

export const instalProTips = [
  {
    name: "Instal:",
    descriptions: [
      "In general, 48 months of on-time payment history will have a greater positive impact on your credit profile than 24 months."
    ]
  },
  {
    name: "CS Max:",
    descriptions: [
      "To accelerate savings growth, select an account with a monthly payment that is about half as much as you want to pay, and pay 2X the minimum required monthly payment each month."
    ]
  },
  {
    name: "Note:",
    descriptions: [
      "A longer positive payment history and length of credit history are more beneficial for your credit profile.",
      "All Instal accounts have a $15 non-refundable administrative fee.",
      "All CS Max accounts have a $25 non-refundable administrative fee. Instal and CS Max accounts have no prepayment or early withdrawal penalties, so you can pay any amount over the minimum required monthly payment or cancel at any time for any reason with no penalty."
    ]
  }
]

export const instalSpecialSteps = [
  { title: 'Complete the CreditBolt account application in under 5 minutes' },
  { title: 'Choose a plan that fits your budget and pay the (small) admin fee' },
  { title: 'Make on-time monthly payments and track your FICO score from your CreditBolt dashboard' },
  { title: 'We report to all 3 credit bureaus — FICO® Scores are used by 90% of top lenders.' },
  { title: 'Build savings as you build credit - close your account at any time' },
]

export const instalProductDetails = [
  {
    "title": "INSTAL 28: $28/mo for 48 months",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/i28.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/Instal-28-Amortization.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },
  {
    "title": "INSTAL 38: $38/mo for 36 months",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/i38.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/Instal-38-Amortization.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },
  {
    "title": "INSTAL 48: $48/mo for 24 months",
    "description": `
      <img src="src="https://creditstage010.wpengine.com/wp-content/uploads/i48.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/Instal-48-Amortization.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },
  {
    "title": "CS Max 49: $49/mo for 60 months",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/c49.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/CS-Max-49-Amortization-Extra-Pmts.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },
  {
    "title": "CS Max 99: $99/mo for 60 months",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/c99.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/CS-Max-99-Amortization-Extra-Pmts.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },
  {
    "title": "CS Max 199: $199/mo for 60 months",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/c199.png" alt="">
      <a href="https://creditstage010.wpengine.com/wp-content/uploads/CS-Max-199-Amortization-Extra-Pmts.pdf?utm_source=direct&amp;utm_medium=organic&amp;aff_sub2=CreditBolt" target="_blank" rel="noopener">View full Amortization table</a>
    `,
  },

]

export const businessAccountList = [
  { active: false, value: "A CS Business credit builder account is a credit builder loan with a 0% interest rate" },
  { active: false, value: "Pay a one-time fee " },
  { active: false, value: "Make 25 or 50 monthly payments " },
  { active: false, value: "100% of every monthly payment builds your company’s savings " },
  { active: true, value: "PAY NO INTEREST " },
  { active: false, value: "Unlock your savings in 25 or 50 months*" },
]

export const bsPriceList = [
  { row: 1, label: 'Fee', sub: 'One time', color: 'orange.500', bg: 'secGray.800' },
  { row: 1, label: 'Payment', sub: 'Monthly', color: 'orange.500', bg: 'secGray.800' },
  { row: 1, label: 'Credit Built', sub: 'Amount of', color: 'orange.500', bg: 'secGray.800' },
  { row: 2, label: '$349', sub: '', color: 'white', bg: 'gray.600' },
  { row: 2, label: '$200', sub: '', color: 'white', bg: 'gray.600' },
  { row: 2, label: '$5000', sub: '', color: 'white', bg: 'gray.600' },
  { row: 3, label: '$549', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 3, label: '$400', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 3, label: '$10000', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 4, label: '$749', sub: '', color: 'white', bg: 'gray.600' },
  { row: 4, label: '$1000', sub: '', color: 'white', bg: 'gray.600' },
  { row: 4, label: '$25000', sub: '', color: 'white', bg: 'gray.600' },
  { row: 5, label: '$999', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 5, label: '$2000', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 5, label: '$50000', sub: '', color: 'white', bg: 'secGray.800' },
]

export const bsPriceList1 = [
  { row: 1, label: 'Fee', sub: 'One time', color: 'orange.500', bg: 'secGray.800' },
  { row: 1, label: 'Payment', sub: 'Monthly', color: 'orange.500', bg: 'secGray.800' },
  { row: 1, label: 'Credit Built', sub: 'Amount of', color: 'orange.500', bg: 'secGray.800' },
  { row: 2, label: '$349', sub: '', color: 'white', bg: 'gray.600' },
  { row: 2, label: '$100', sub: '', color: 'white', bg: 'gray.600' },
  { row: 2, label: '$5000', sub: '', color: 'white', bg: 'gray.600' },
  { row: 3, label: '$549', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 3, label: '$200', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 3, label: '$10000', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 4, label: '$749', sub: '', color: 'white', bg: 'gray.600' },
  { row: 4, label: '$500', sub: '', color: 'white', bg: 'gray.600' },
  { row: 4, label: '$25000', sub: '', color: 'white', bg: 'gray.600' },
  { row: 5, label: '$999', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 5, label: '$1000', sub: '', color: 'white', bg: 'secGray.800' },
  { row: 5, label: '$50000', sub: '', color: 'white', bg: 'secGray.800' },
]

export const marketplaces = [
  {
    name: 'Dovly',
    type: 'Credit Repair',
    description: '(Re)build, monitor, and protect your credit in seconds. 100% Free.',
    path: 'https://www.pav04trk.com/7QDDDL/DH5XPT/',
    icon: '/assets/dovly2.jpeg'
  },
  {
    name: 'Fiona',
    type: 'Persnol Loans',
    description: 'Personal loan offers in just 60 seconds. See if you qualify with no risk to your credit.',
    path: 'https://www.creditstrong.com/partner/fiona/',
    icon: '/assets/fiona.jpeg'
  },
  {
    name: 'OpenSky®',
    type: 'Credit Card',
    description: 'The OpenSky® Secured Visa® Credit Card is a simple way to build credit. No weird score math. No confusing rules, just use your card for everyday purchases, make on-time payments, and watch your credit grow.',
    path: 'https://apply.openskycc.com/build-credit-quickly/',
    icon: '/assets/opensky-1.jpeg'
  },
  {
    name: 'CardMatch',
    type: 'Credit Card',
    description: 'Get Matched with Credit Cards without affecting your credit.',
    path: 'https://oc.brcclx.com/t',
    icon: '/assets/cm.jpg'
  },
  {
    name: 'Savvy',
    type: 'Insurance',
    description: 'Stop overpaying for insurance with Savvy, our insurance partner.',
    path: 'https://savvy.insure/creditstrong',
    icon: '/assets/saavy3.jpg'
  },
  {
    name: 'Kashkick',
    type: 'Rewards',
    description: 'Join other CreditStrong members and earn up to $500 in your first month',
    path: 'https://kashkick.go2cloud.org/aff_c',
    icon: '/assets/kash.jpg'
  },
  {
    name: 'Walmart MoneyCard',
    type: 'Reloadable Prepaid Card',
    description: 'Earn Cash Back from Walmart, Get Paid 2 days Early with qualifying direct deposit.',
    path: 'https://oc.brcclx.com/t?lid=26721701',
    icon: '/assets/walmartmoney.jpg'
  },
  {
    name: 'AARP Membership',
    type: 'Discount Membership/Personal Finance',
    description: 'Get 15-20% Travel and Dining Discounts by joining AARP Membership as low as $12/year. No age requirement to join!',
    path: 'https://oc.brcclx.com/t?lid=26721694',
    icon: '/assets/aarp.jpg'
  },
  {
    name: 'Debtmd',
    type: 'Debt Relief',
    description: 'DebtMD is committed to providing people with the tools, resources, and guidance they need to take control of their financial health. Users can compare top-rated debt relief options so they can choose the best one with confidence and live the debt-free live they deserve.',
    path: 'https://www.debtmd.com/solutions/debt-settlement',
    icon: '/assets/debtmd_2.jpeg'
  }
]


export const businessMarketplaces = [
  {
    name: 'Financing Tailored for Your Business Needs',
    type: 'BusinessLoan.com',
    description: 'BusinessLoans.com is a leading provider of financial services for small businesses. With a focus on providing flexible financing solutions and exceptional customer service, BusinessLoans.com helps businesses of all sizes achieve their goals and grow their operations.',
    path: '#',
    icon: '/assets/bl.jpg'
  }
]

export const businessPricing = [
  {
    price: "$5000",
    items: {
      labels: ["Monthly Payment", "Credit Built", "Account Term", "One-Time Fee", "Interest Rate", "Total Cost", "Total Monthly Payments", "Savings Built", "Interest Paid", "Payment History Reported"],
      prices1: ["$100", "$5,000", "50 Months", "$349", "0.00%", "$349", "$5000", "$5000", "$0", "50 Payments"],
      prices2: ["$200", "$5,000", "25 Months", "$349", "0.00%", "$349", "$5000", "$5000", "$0", "25 Payments"]
    }
  },
  {
    price: "$10000",
    items: {
      labels: ["Monthly Payment", "Credit Built", "Account Term", "One-Time Fee", "Interest Rate", "Total Cost", "Total Monthly Payments", "Savings Built", "Interest Paid", "Payment History Reported"],
      prices1: ["$200", "$10,000", "50 Months", "$549", "0.00%", "$549", "$10,000", "$10,000", "$0", "50 Payments"],
      prices2: ["$400", "$10,000", "25 Months", "$549", "0.00%", "$549", "$10,000", "$10,000", "$0", "25 Payments"]
    }
  },
  {
    price: "$25000",
    items: {
      labels: ["Monthly Payment", "Credit Built", "Account Term", "One-Time Fee", "Interest Rate", "Total Cost", "Total Monthly Payments", "Savings Built", "Interest Paid", "Payment History Reported"],
      prices1: ["$500", "$25000", "50 Months", "$749", "0.00%", "$749", "$25000", "$25000", "$0", "50 Payments"],
      prices2: ["$1000", "$25000", "25 Months", "$749", "0.00%", "$749", "$25000", "$25000", "$0", "25 Payments"]
    }
  },
  {
    price: "$50000",
    items: {
      labels: ["Monthly Payment", "Credit Built", "Account Term", "One-Time Fee", "Interest Rate", "Total Cost", "Total Monthly Payments", "Savings Built", "Interest Paid", "Payment History Reported"],
      prices1: ["$1000", "$5,0000", "50 Months", "$999", "0.00%", "$999", "$50000", "$50000", "$0", "50 Payments"],
      prices2: ["$2000", "$5,0000", "25 Months", "$999", "0.00%", "$999", "$50000", "$50000", "$0", "25 Payments"]
    }
  }
]

export const accountDetails = [
  {
    "title": "CS Business $5,000 25-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/02-5000-25-2.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $5,000 50-Mon",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/01-5000-50-1.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $10,000 25-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/04-10k-25-1.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $10,000 50-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/03-10k-50-2.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $25,000 25-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/06-25k-25-1.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $25,000 50-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/05-25k-50-1.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $50,000 25-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/08-50k-25-1.jpg" alt="">
    `,
  },
  {
    "title": "CS Business $50,000 50-Month",
    "description": `
      <img src="https://creditstage010.wpengine.com/wp-content/uploads/07-50k-50-2.jpg" alt="">
    `,
  },

]
