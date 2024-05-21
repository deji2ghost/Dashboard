import { BarChartOutlined, HomeOutlined, MoneyCollectFilled, ShoppingCartOutlined, TagFilled, UserOutlined } from "@ant-design/icons"
import { faArrowRightFromBracket, faCartShopping, faChartArea, faCog, faHeadset, faHome, faMoneyBill, faStore, faTag, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"

export const NavDetails1 = [
    {
        navName: 'Dashboard',
        icon: faHome,
        path: '/',
    },
    {
        navName: 'Order History',
        icon: faCartShopping,
        path: '/pages/OrderHistory',
    },
    {
        navName: 'Products',
        icon: faTag,
    },
    {
        navName: 'Customers',
        icon: faUsers,
        path: '/pages/Customers',
    },
    {
        navName: 'Expense Statement',
        icon: faMoneyBill,
        path: '/pages/ExpenseStatement',
    },
    {
        navName: 'Sales Report',
        icon: faChartArea
    },
]
export const NavDetails = [
    {
        navName: 'Dashboard',
        icon: HomeOutlined,
        path: '/',
    },
    {
        navName: 'Order History',
        icon: ShoppingCartOutlined,
        path: '/pages/OrderHistory',
    },
    {
        navName: 'Products',
        icon: TagFilled,
    },
    {
        navName: 'Customers',
        icon: UserOutlined,
        path: '/pages/Customers',
    },
    {
        navName: 'Expense Statement',
        icon: MoneyCollectFilled,
        path: '/pages/ExpenseStatement',
    },
    {
        navName: 'Sales Report',
        icon: BarChartOutlined
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