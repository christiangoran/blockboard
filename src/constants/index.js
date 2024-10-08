import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  zcashColor,
  btcColor,
  ledgerColor,
  litecoinColor,
  miningPoolColor,
  senderColor,
  stellarCoinColor,
  miningCenterColor,
} from "../assets";

import { btc, eth, monero, neo, xrp } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Cryptocurrencies",
    url: "/currencies",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const cryptoIcons = [btc, eth, monero, neo, xrp];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Realtime Updates",
  "Passionate Community",
  "Boost Your Own Research",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "User Dashboard",
    text: "Create a personalized user dashboard where users can manage their favorite currencies, track real-time prices, and view historical charts.",
    date: "Follow your currencies",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Forum Integration",
    text: "Here you find a forum for each cryptocurrency where users can discuss trends, share insights, and connect with other enthusiasts.",
    date: "The finger on the pulse",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Realtime Tracking",
    text: "Implement real-time tracking of cryptocurrency prices and market data to ensure users have the most up-to-date information.",
    date: "Complete overview",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Advanced Charting Tools",
    text: "Provide advanced charting tools that allow users to analyze market trends and make informed investment decisions.",
    date: "Total Control",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart dashboard and top-notch security, it's the perfect solution for crypto traders looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Full Control",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const cryptoApps = [
  {
    id: "0",
    title: "Btc",
    icon: btcColor,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Ledger",
    icon: ledgerColor,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Litecoin",
    icon: litecoinColor,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Mining",
    icon: miningCenterColor,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Send",
    icon: senderColor,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Stellar",
    icon: stellarCoinColor,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "zCash",
    icon: zcashColor,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "MiningCenter",
    icon: miningPoolColor,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Track favorite cryptocurrencies, real-time updates",
    price: "0",
    features: [
      "Track up to 5 favorite cryptocurrencies",
      "Receive real-time price updates",
      "Basic charting tools",
      "Access to community discussions",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced tracking, portfolio management, priority support",
    price: "9.99",
    features: [
      "Track unlimited cryptocurrencies",
      "Advanced charting and technical analysis tools",
      "Portfolio management features",
      "Priority support for any issues",
      "Exclusive access to premium content and insights",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions, dedicated support, advanced analytics",
    price: null,
    features: [
      "Custom solutions tailored to your needs",
      "Advanced analytics and reporting tools",
      "Dedicated account manager",
      "API access for data integration",
      "Priority support with faster response times",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Create Your Dashboard",
    text: "Build a personalized dashboard with your favorite cryptocurrencies and track their performance in real-time.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage3,
  },
  {
    id: "1",
    title: "Follow Prices in Real-Time",
    text: "Stay updated with the latest price movements of your favorite cryptocurrencies with real-time tracking.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "Chat with Like-Minded People",
    text: "Engage in discussions and share insights with other cryptocurrency enthusiasts under each crypto.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Read About Each Currency",
    text: "Access comprehensive information about each cryptocurrency, including historical data, market trends, and more.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "4",
    title: "Stay Informed",
    text: "Get the latest news and updates about the cryptocurrency market directly on your dashboard.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage3,
  },
  {
    id: "5",
    title: "Analyze Market Trends",
    text: "Utilize advanced tools and features to analyze market trends and make informed investment decisions.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
