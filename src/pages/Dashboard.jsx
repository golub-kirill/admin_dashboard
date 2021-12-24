import React from 'react'
import css from '../styles/Dashboard.module.css'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Dashboard() {
    return (
        <div className={css.dashboard}>
            <Sidebar />
            <Navbar />
        </div>
    )
}
