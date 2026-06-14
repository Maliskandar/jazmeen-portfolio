import React from 'react';
import { FiPieChart, FiShoppingCart, FiActivity, FiDollarSign, FiSmartphone } from 'react-icons/fi';
import { SiPython, SiMysql, SiGooglebigquery } from 'react-icons/si';
import { IoLogoTableau } from 'react-icons/io5';
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

export const projectsData = [
  {
    id: 1,
    title: "Balaji Fast Food Sales Analysis",
    category: "F&B Performance Optimization",
    tools: [<IoLogoTableau key="tab" />, <SiPython key="py" />],
    coverIcon: <FiPieChart />,
    isSpecial: false,
    partnership: "",
    desc: "Analyze QSR restaurant sales data to identify revenue growth opportunities and operational efficiencies.",
    insight: "15% Revenue Growth",
    insightDesc: "Identified optimization strategies to boost potential revenue.",
    fullDetail: {
      duration: "Dec 2025 - Feb 2026",
      background: "Balaji Fast Food is a Quick Service Restaurant (QSR) in India specializing in street food and beverages. Operating on a high-volume, low-margin model, the restaurant serves urban customers like students and workers. This project analyzes sales data from April 2022 to March 2023 to identify growth opportunities and operational improvements.",
      objective: [
        "Stabilize sales performance during critical periods to achieve a 15% revenue increase (target: INR 316,515).",
        "Target a 20% increase in operational efficiency by identifying top-performing menu items and resolving service bottlenecks.",
        "Identify a night-shift upselling gap between genders and propose targeted training.",
        "Propose a digital payment migration strategy to reduce the 47.6% cash dependency."
      ],
      methods: "Cleaned 1,000 transaction records and performed Feature Engineering (AOV, Growth Rate). Conducted Trend Analysis to identify seasonal dips, Pareto Analysis to find 'Vital Few' menu items, and Heatmap analysis for peak hours. Formulated strategies using Root Cause Analysis (RCA) and scenario simulations.",
      results: "Analysis revealed 80% of revenue comes from four 'Vital Few' items. June and November saw sharp declines (34% and 15%). Recommended dynamic bundling of high-margin items with beverages, digital payment incentives to accelerate checkout by 20%, and retraining male staff to close the night-shift upselling gap toward 305.16 INR AOV.",
      links: {
        deck: "https://docs.google.com/presentation/d/1KD0A5GVD25kfkn5Zlqq-fpR7W_U9JMG8xUtpJTILye0/edit?usp=sharing",
        query: "#",
        colab: "https://colab.research.google.com/drive/15ppBVU-x68MLzY2lahQUhvfP9i8HXOU_?usp=sharing",
        colab2: "#",
        tableau: "https://public.tableau.com/views/DEEPPJAZMEENADILLA-BalajiFastFoodSalesDashboard1/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 2,
    title: "RevoGrocers Sales Performance Analysis",
    category: "Retail Sales Analytics",
    tools: [<SiGooglebigquery key="bq" />, <RiBarChartBoxFill key="pbi" />],
    coverIcon: <FiShoppingCart />,
    desc: "Analyze sales performance by product category using SQL (BigQuery) for customer basket value optimization.",
    insight: "Top 34% Drivers",
    insightDesc: "Discovered top 3 categories driving strong customer retention.",
    fullDetail: {
      duration: "Oct 2025 - Nov 2025",
      background: "RevoGrocers is a large-scale retail network offering a wide range of products from fresh food to daily necessities. The dataset contains 10,142 sales transactions that require analysis to improve revenue and customer experience.",
      objective: [
        "Analyze sales performance by product category.",
        "Identify strategies for optimizing customer basket value.",
        "Evaluate customer retention rate (repeat purchase rate)."
      ],
      methods: "Extracting data using Google BigQuery (SQL) with aggregation functions, Window Functions, and CTEs. Applying the OBIPR (Observation, Business Impact, Isolation, Prioritization, Recommendation) analytical framework to generate structured business insights.",
      results: "Found that Confections, Meat, and Poultry categories collectively contribute 34.4% of total revenue with customer retention rates exceeding 99%. Conversely, the Grain category is a negative outlier with the lowest repeat purchase rate (93.7%) due to high average pricing. Recommended implementation of 'Daily Rewards' to increase daily shopping frequency and value-based pricing adjustments for the Grain category.",
      links: {
        deck: "https://docs.google.com/presentation/d/1oxEa65lf6Vi7NaJuj8ikjOT3jxdFiRbyCwhaXryklYM/edit?usp=sharing",
        query: "https://console.cloud.google.com/bigquery?ws=!1m7!1m6!12m5!1m3!1sintermediete-assignment!2sus-central1!3s9d06ebd9-b0ad-45ba-92e4-5cb25bc4ef7d!2e1&project=my-login-project-481408",
        colab: "#",
        tableau: "#",
        kaggle: "https://www.kaggle.com/datasets/andrexibiza/grocery-sales-dataset?resource=download&select=products.csv",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 3,
    title: "TokoBli A/B Testing & Campaign Evaluation",
    category: "A/B Testing & Statistics",
    tools: [<RiFileExcel2Fill key="xl" />],
    coverIcon: <FiActivity />,
    desc: "Hypothesis Testing (A/B Testing) UI/UX design and evaluation of discount campaign efficiency in e-commerce.",
    insight: "59x Promo ROI",
    insightDesc: "Proved 12/12 promo efficiency & validated new UI design success.",
    fullDetail: {
      duration: "Oct 2025",
      background: "TokoBli regularly runs promotional campaigns on double dates (October 10, November 11, and December 12). Management wanted to evaluate the effectiveness of the discount budget on revenue generation. Additionally, an A/B test was conducted to determine the impact of replacing the 'Add to Cart' button with 'Buy Now' on product pages.",
      objective: [
        "Identifying the most efficient campaign strategy based on the ratio of revenue to discount costs. Conducting A/B testing to determine whether the 'Buy Now' button design significantly increases Average Transaction Value (ATV)."
      ],
      methods: "Data Cleaning (removing duplicates, handling missing values, data imputation, removing outliers). Descriptive Analysis and ROI comparison. Conducting Statistical Hypothesis Testing using T-Test (Two-Sample Assuming Equal & Unequal Variances) with an alpha significance level of 0.05.",
      results: "The campaign evaluation found that the 12/12 Campaign was the most efficient (generating 59x the turnover per Rp1 discount) because it successfully triggered wholesale shopping without excessive discounts. The A/B Testing results (p-value = 0) rejected the Null Hypothesis, statistically proving that the new design ('Buy Now') significantly increased the Average Transaction Value (ATV) by Rp84,357 per user.",
      links: {
        deck: "https://docs.google.com/presentation/d/1h4HreHarh6M0xH4R1pe_MKqHua4Q_UNpbGSqKKJFWeE/edit?usp=sharing",
        query: "#",
        colab: "#",
        tableau: "#",
        kaggle: "#",
        sheet1: "https://docs.google.com/spreadsheets/d/12P3540NfY0Nbsny2bezNtt7klBHPoBrIG_1j0gg6gYI/edit?gid=44213569#gid=44213569",
        sheet2: "https://docs.google.com/spreadsheets/d/18IwLvw95nE5k-i2O8u6d6wEIyVQPj2Nby0Z94vI-H6Y/edit?gid=1273931063#gid=1273931063"
      }
    }
  },
  {
    id: 4,
    title: "RevoFin : Loan Portfolio Analysis",
    category: "Financial Analytics",
    tools: [<IoLogoTableau key="tab" />, <SiGooglebigquery key="bq" />, <SiPython key="py" />],
    coverIcon: <FiDollarSign />,
    desc: "Comprehensive analysis of loan portfolios to mitigate risk and identify credit trends using BigQuery.",
    insight: "Risk Mitigation",
    insightDesc: "Analyzed loan portfolios to identify high-risk credit trends.",
    fullDetail: {
      duration: "27 April 2026",
      background: "RevoFin provides diverse loan products to consumers. This project focuses on analyzing the health of their loan portfolio, assessing default risks, and identifying macroeconomic factors that impact repayment trends.",
      objective: [
        "Assess the overall health and performance of the loan portfolio.",
        "Identify high-risk customer segments and recommend risk mitigation strategies.",
        "Evaluate the impact of loan terms on default rates."
      ],
      methods: "Extracted and transformed large-scale financial datasets using Google BigQuery. Utilized Python (Google Colab) for advanced statistical analysis, risk modeling, and generating actionable financial insights.",
      results: "Identified key risk indicators within specific customer demographics. Recommended strategic adjustments to loan approval criteria to minimize default rates while maintaining profitability.",
      links: {
        deck: "https://docs.google.com/presentation/d/1kvp0NKcSmaYYrjpWuvA8TiA303o31kUt4lYJxXxxi2A/edit?usp=sharing",
        query: "https://console.cloud.google.com/bigquery?ws=!1m7!1m6!12m5!1m3!1sfip-jazmeen!2sus-central1!3s010e02db-250c-4946-87df-86344177ef83!2e1",
        colab: "https://colab.research.google.com/drive/1tIBkuUCM5YkWRlfmBPADpwRtzcaBCFQM?usp=sharing",
        tableau: "https://public.tableau.com/app/profile/jazmeen.adilla/viz/JazmeenAdilla_FINANCEINSIGHTPROJECT/Dashboard1?publish=yes",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 5,
    title: "Analyzing & Evaluating App Funnel E-CommerceU Platform",
    category: "App Funnel Analytics",
    tools: [<IoLogoTableau key="tab" />, <SiPython key="py" />],
    coverIcon: <FiSmartphone />,
    desc: "End-to-end evaluation of user journey and conversion funnels within the E-CommerceU app.",
    insight: "Conversion Optimization",
    insightDesc: "Evaluated app funnel drop-offs to improve conversion rates.",
    fullDetail: {
      duration: "16 April 2026",
      background: "E-CommerceU is an emerging e-commerce application. The platform experienced significant drop-offs at various stages of the user journey, from app launch to final purchase. This project evaluates the conversion funnel to optimize the user experience.",
      objective: [
        "Map the complete user journey and define critical funnel stages.",
        "Identify the specific stages with the highest user drop-off rates.",
        "Recommend UI/UX or operational improvements to boost the overall conversion rate."
      ],
      methods: "Processed app event logs and user interaction data using Python in Google Colab. Developed comprehensive visual dashboards in Tableau to track funnel progression and highlight critical bottlenecks.",
      results: "Discovered critical drop-offs at the payment selection stage. Proposed a streamlined checkout process and targeted push notifications to re-engage users who abandoned their carts, aiming to improve end-to-end conversion.",
      links: {
        deck: "https://docs.google.com/presentation/d/1_wLUo4fO6JvQY1rSh66WbnTIeoRKOkRepfJaDr4gPBc/edit?usp=sharing",
        query: "#",
        colab: "https://colab.research.google.com/drive/1fixR8zyAZ25l2o6ZJU_wkfQRVBsI6zJc?usp=sharing",
        tableau: "https://public.tableau.com/app/profile/jazmeen.adilla/viz/JazmeenAdilla_DESProject_E-commerce2/Dashboard2?publish=yes",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 6,
    title: "RevoBank (Customer Segmentation)",
    category: "Customer Segmentation",
    tools: [<SiPython key="py" />, <RiFileExcel2Fill key="xl" />],
    coverIcon: <FiPieChart />,
    desc: "Customer segmentation analysis using Python to group customers based on their behavior and card usage.",
    insight: "Targeted Segmentation",
    insightDesc: "Analyzed user and card datasets to define actionable customer segments.",
    fullDetail: {
      duration: "Oct 2025",
      background: "RevoBank required a deeper understanding of its customer base to better target marketing campaigns and improve customer experience. This project uses user and card transaction datasets to segment customers based on their behavior.",
      objective: [
        "Segment customers based on behavior and card usage patterns.",
        "Identify actionable insights and tailor marketing strategies for each segment."
      ],
      methods: "Data processing, exploratory data analysis, and clustering algorithms implemented using Python in Google Colab.",
      results: "Successfully grouped customers into distinct segments, providing a foundation for personalized marketing strategies and improved customer retention.",
      links: {
        deck: "/[PYTHON OCT25] FSDA JAZMEEN ADILLA.pdf",
        query: "#",
        colab: "https://colab.research.google.com/drive/1AFx6RywNHO0LnHgmDJ7mpUNhUo6P5LPH?usp=sharing",
        tableau: "#",
        kaggle: "#",
        sheet1: "https://docs.google.com/spreadsheets/d/10tgTb3Rq0J_u4DH0pUI5pcEehfaw4VUg9GLCYnFQDJM/edit?usp=sharing",
        sheet2: "https://docs.google.com/spreadsheets/d/10xFoMBpaT95oQPFXrHJBYFJNLnEhnL6bKwfKx2R_qoU/edit?usp=sharing"
      }
    }
  },
  {
    id: 7,
    title: "RevoFinance (Expense and Budget)",
    category: "Financial Analytics",
    tools: [<IoLogoTableau key="tab" />, <RiFileExcel2Fill key="xl" />],
    coverIcon: <FiDollarSign />,
    desc: "Interactive dashboard for tracking expenses and budget utilization to optimize financial health.",
    insight: "Expense Optimization",
    insightDesc: "Visualized expense and budget data to streamline financial tracking.",
    fullDetail: {
      duration: "Oct 2025",
      background: "RevoFinance needed a comprehensive, easy-to-understand view of their expenses versus budgets to maintain financial health and prevent overspending. This project involves creating a dynamic dashboard to track these critical metrics.",
      objective: [
        "Create an interactive dashboard for expense and budget tracking.",
        "Provide clear visualizations to monitor financial health and identify areas for cost-saving."
      ],
      methods: "Data transformation and visualization using Tableau to create an interactive and automated reporting dashboard.",
      results: "Developed a Tableau dashboard that clearly highlights expense trends and budget variances, aiding management in making better financial decisions.",
      links: {
        deck: "#",
        query: "#",
        colab: "#",
        tableau: "https://public.tableau.com/app/profile/jazmeen.adilla/viz/DATAVIZ_OCT25JazmeenAdillaIntermedieteAssignmentM1M21/Dashboard1#1",
        kaggle: "#",
        sheet1: "https://docs.google.com/spreadsheets/d/1JhhUwaZKm2n_ThOHzs68Hzapss3BtYpR/edit?usp=sharing&ouid=107400974752652697021&rtpof=true&sd=true",
        sheet2: "#"
      }
    }
  },
  {
    id: 8,
    title: "Unified Channel Performance Reporting",
    category: "Omnichannel Analytics",
    tools: [<IoLogoTableau key="tab" />, <SiPython key="py" />],
    coverIcon: <FiActivity />,
    isSpecial: true,
    partnership: "RevoU x Telkom Indonesia",
    desc: "An end-to-end campaign analytics pipeline for OCA Blast (Telkom Indonesia), resolving data integration issues and providing unified omnichannel reporting.",
    insight: "+20% Cost Efficiency",
    insightDesc: "Harmonized campaign datasets across SMS, WhatsApp, and Email to optimize communication ROI.",
    fullDetail: {
      duration: "May 2026",
      background: "OCA Blast is Telkom Indonesia's premier omnichannel communication platform, allowing businesses to execute mass messaging campaigns. Previously, campaign performance data from SMS, Email, and WhatsApp was siloed across separate systems with differing formats, schemas, and metrics. This made cross-channel performance evaluation, cost optimization, and strategic ROI analysis extremely challenging for management.",
      objective: [
        "Create a single source of truth by integrating disparate campaign logs from SMS, Email, and WhatsApp channels.",
        "Perform extensive data cleaning and schema harmonization on raw campaign records to eliminate formatting issues and missing attributes.",
        "Establish an interactive, unified Tableau dashboard presenting key omnichannel performance indicators (delivery rate, read rate, CTR).",
        "Formulate data-driven cost-efficiency strategies to optimize communications spending while maintaining or improving user engagement."
      ],
      methods: "Designed a comprehensive analytics pipeline starting with rigorous data cleaning, profiling, and schema synchronization in Python (Google Colab). Normalized multi-channel schemas and calculated custom unified KPIs (Average Cost per Message, Conversion Efficiency Index). Built an interactive multi-view Tableau dashboard using custom color palettes, integrated filters, and performance metrics matrix.",
      results: "Successfully consolidated raw transaction logs from SMS, Email, and WhatsApp. Analysis revealed that while WhatsApp has the highest engagement (85% read rate), it also carries the highest unit cost. Email proved to be highly cost-effective for rich media, while SMS remained critical for transactional alerts. By identifying high-cost/low-yield segments and peak delivery times, the project provided a cost-rebalancing strategy expected to drive up to a 20% cost efficiency gain.",
      links: {
        deck: "https://docs.google.com/presentation/d/1WJz6MudjtyFxoUb_jxW3FTJBKULiAscvA6-y03ZelJc/edit?usp=sharing",
        query: "#",
        colab: "https://colab.research.google.com/drive/17Ef5xg7ANf4HbTksPd95D36-wjAYyK_x?usp=sharing",
        colab2: "https://colab.research.google.com/drive/14NBL4H_ZcNUEJlEryIOnMY2ui4lKoDqL?usp=sharing",
        tableau: "https://public.tableau.com/app/profile/jazmeen.adilla/viz/JazmeenAdilla_OCA_BlastDASHBOARD/Dashboard1?publish=yes",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 9,
    title: "OCA Blast: Active Client Usage Behavior Analysis & B2B Segmentation - RevoU x Telkom Indonesia",
    category: "User Behavior Analytics",
    tools: [<SiPython key="py" />],
    coverIcon: <FiActivity />,
    isSpecial: true,
    partnership: "RevoU x Telkom Indonesia",
    desc: "B2B client segmentation and churn analysis for OCA Blast to resolve the \"Uniform Treatment Trap,\" shifting from uniform account management to a personalized, data-driven approach.",
    insight: "Avg Silhouette 0.983",
    insightDesc: "Segmented 20 corporate clients into Enterprise, Growth, and Standard, and identified 5 clients at medium churn risk.",
    fullDetail: {
      duration: "June 2026",
      background: "Conducted a B2B client segmentation and churn analysis project for OCA Blast, Telkom Indonesia's mass messaging Communication Platform-as-a-Service (CPaaS), as part of the RevoU x Telkom Indonesia Virtual Internship Program. The project aimed to address the \"Uniform Treatment Trap,\" where all clients were previously treated equally regardless of their business scale, shifting the Account Management strategy from a uniform approach to a personalized, data-driven model.\n\nAnalyzed behavioral patterns covering 122,749 transactions from 20 active corporate clients across 4 channels (WhatsApp, SMS, Email, Voice Call) in Q1 2025 with Rp25.95M total revenue to optimize client portfolio treatment.",
      objective: [
        "Enable personalized client treatment, proactive churn prevention, and revenue portfolio optimization for Q2 2025.",
        "Prove the inefficiency of the standard RFM framework on the dataset due to highly uniform daily client activities (zero-variance recency), shifting the parameters to usage volume and revenue contribution.",
        "Group 20 active corporate clients into 3 functional tiers (Enterprise, Growth, and Standard) using the K-Means Clustering algorithm with Python.",
        "Detect early churn threats using the Monthly Volume Decline comparison method (January-March).",
        "Formulate strategic priorities and recommendations using the OBIPR Framework to determine actions for Retention (Enterprise), Upsell (Growth), and Churn Prevention (Standard)."
      ],
      methods: "Methodology:\n• Multi-channel EDA (message volume, revenue, peak hour, channel mix)\n• K-Means Clustering (K=3, Silhouette Score: 0.983) = Enterprise, Growth, and Standard\n• Rule-Based Churn Detection via Monthly Volume Decline Analysis\n\nTools & Skills:\nPython, pandas, scikit-learn, matplotlib, Google Colab, Customer Segmentation, Data Analytics, Churn Prediction Analysis, Business Strategy",
      results: "Key Findings & Strategic Recommendations:\n• 3 Enterprise clients (15%) drive 59.9% of total revenue → critical concentration risk (losing just 1 client loses ~Rp5.2M).\n• 5 Standard clients at Medium Churn Risk (volume decline: 20.6%–29.3% in March, failing to recover after February seasonal dip).\n• SMS usage correlates strongly (r = 0.729) with revenue per transaction.\n• Segment-specific peak blast windows for scheduling optimization: Enterprise active 16–18 WIB, Growth 21.00–00.00 WIB, Standard 19–23 WIB.\n• OBIPR Framework: Priority retention for Enterprise (extreme retention & VIP support), Upsell for Growth (upsell volume), and Churn Prevention for Standard (proactive win-back interventions & support automation).",
      links: {
        deck: "https://docs.google.com/presentation/d/1Xjtac05GgQokuldWUKg092-_zgYu8Fm6aBRK7q5VuHA/edit?usp=sharing",
        query: "#",
        colab: "https://colab.research.google.com/drive/18iuaFbik4V_g8ytroTy8UbFni6XXUfDS?usp=sharing",
        colab2: "#",
        tableau: "#",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  }
];
