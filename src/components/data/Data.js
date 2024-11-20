import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faBriefcase, faLightbulb, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FacebookRounded, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { faCheck, faMultiply } from "@fortawesome/free-solid-svg-icons";



export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "create-estate",
    path: "/create-estate",
  },
]
export const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
]
export const list = [
  {
    id: 1,
    cover: "../images/list/p-1.jpg",
    name: "Red Carpet Real Estate",
    location: "Kupondol, Lalitpur",
    category: "For Rent",
    price: "Rs.37,000",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/p-2.jpg",
    name: "Red Flame Properties",
    location: "New Road, Kathmandu",
    category: "For Sale",
    price: "Rs.45,000",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../images/list/p-7.jpg",
    name: "The Real Estate Corner",
    location: "Thamel, Kathmandu",
    category: "For Rent",
    price: "Rs.55,000",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../images/list/p-4.jpg",
    name: "Blue Realty",
    location: "Pulchowk, Lalitpur",
    category: "For Sale",
    price: "Rs.57,000",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../images/list/p-5.jpg",
    name: "Brick Lane Realty",
    location: "Birtamod, Jhapa",
    category: "For Rent",
    price: "Rs.15,000",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../images/list/p-6.jpg",
    name: "Banyon Tree Realty",
    location: "Gairidhara, Kathmandu",
    category: "For Sale",
    price: "Rs.25,000",
    type: "Apartment",
  },
]
export const awards = [
  {
    icon: <i class='fa-solid fa-trophy'><FontAwesomeIcon icon={faTrophy} /></i>,
    num: "32 M	",
    name: "Best Property Award",
  },
  {
    icon: <i class='fa-solid fa-briefcase'><FontAwesomeIcon icon={faBriefcase} /></i>,
    num: "43 M",
    name: "Real Estate Award",
  },
  {
    icon: <i class='fa-solid fa-lightbulb'><FontAwesomeIcon icon={faLightbulb} /></i>,
    num: "51 M",
    name: "Best Rental Award",
  },
  {
    icon: <i class='fa-solid fa-heart'><FontAwesomeIcon icon={faHeart} /></i>,
    num: "42 M",
    name: "City Rental Award",
  },
]
export const location = [
  {
    id: 1,
    name: "Chitwan, Nepal",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-1.jpg",
  },
  {
    id: 2,
    name: "Pokhara, Nepal",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-2.jpg",
  },
  {
    id: 3,
    name: "Illam, Nepal",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-3.jpg",
  },
  {
    id: 4,
    name: "Biratnagar, Nepal",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-4.jpg",
  },
  {
    id: 5,
    name: "Ithari, Nepal",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-5.jpg",
  },
  {
    id: 6,
    name: "Kathmandu, Nepal",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-6.jpg",
  },
]
export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Kathmandu, Nepal",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Jhapa, Nepal",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Kathmandu, Nepal",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "Biratnagar, Nepal",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "Dharan, Nepal",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
  {
    list: "38",
    cover: "../images/customer/team-1.jpg",
    address: "Pokhara, Nepal",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'><FacebookRounded /></i>, 
    <i class='fa-brands fa-linkedin'><LinkedIn/></i>, 
    <i class='fa-brands fa-twitter'><Instagram /></i>, 
    <i class='fa-brands fa-instagram'><Twitter /></i>],
  },
]
export const price = [
  {
    plan: "Basic",
    price: "499",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: <i class='fa-solid fa-x'><FontAwesomeIcon icon={faMultiply} /></i>, 
      text: "Personal Help Support" },
      { change: "color", icon: <i class='fa-solid fa-x'><FontAwesomeIcon icon={faMultiply} /></i>, 
      text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "699",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class='fa-solid fa-x'><FontAwesomeIcon icon={faMultiply} /></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "999",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class='fa-solid fa-check'><FontAwesomeIcon icon={faCheck} /></i>,
        text: "Enterprise SLA",
      },
    ],
  },
]
export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]