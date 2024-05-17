import { faArrowRightFromBracket, faCartShopping, faChartArea, faCog, faHeadset, faHome, faMoneyBill, faStore, faTag, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
// import { Link } from  'react-router-dom'

export const NavDetails1 = [
    {
        navName: 'Dashboard',
        icon: faHome,
        link: '/'
    },
    {
        navName: 'Order History',
        icon: faCartShopping,
        link: 'orderhistory'
    },
    {
        navName: 'Products',
        icon: faTag,
        link: 'product'
    },
    {
        navName: 'Customers',
        icon: faUsers,
        link: 'statement'
    },
    {
        navName: 'Expense Statement',
        icon: faMoneyBill,
        link: 'product',
    },
    {
        navName: 'Sales Report',
        icon: faChartArea,
        link: 'product'
    },
]

export const NavDetails2 = [
    {
        navName: 'Store Set-up',
        icon: faStore
    },
    {
        navName: 'Admin Account',
        icon: faUser
    }
]

export const NavDetails3 = [
    {
        navName: 'Help & Support',
        icon: faHeadset
    },
    {
        navName: 'Settings',
        icon: faCog
    },
    {
        navName: 'Logout',
        icon: faArrowRightFromBracket
    },
]