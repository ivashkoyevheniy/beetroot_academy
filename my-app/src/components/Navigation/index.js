import React from "react";
import { NavigationLink } from '../../assets/commonComponents';
import './Navigation.css';
import homeIcon from "../../assets/img/home-icon.svg";
import statisticsIcon from "../../assets/img/statistics-icon.svg";
import workflowIcon from "../../assets/img/workflow-icon.svg";
import calendarIcon from "../../assets/img/calendar-icon.svg";
import userIcon from "../../assets/img/user-icon.svg";
import settingsIcon from "../../assets/img/settings-icon.svg";


export const Navigation = (props) => {
    const { toggler, naviClass} = props;
    return (
        <nav className={naviClass}>
            {toggler && <NavigationLink title='Register' linkClass='nav-link login-nav-link' link='#' />}
            {toggler && <NavigationLink title='Login' linkClass='nav-link login-nav-link login-nav-link--active' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={homeIcon} title='Home' linkClass='nav-link sidebar-nav-link sidebar-nav-link--active' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={statisticsIcon} title='Workflow' linkClass='nav-link sidebar-nav-link' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={workflowIcon} title='Statistics' linkClass='nav-link sidebar-nav-link' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={calendarIcon} title='Calendar' linkClass='nav-link sidebar-nav-link' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={userIcon} title='Users' linkClass='nav-link sidebar-nav-link' link='#' />}
            {!toggler && <NavigationLink toggler='true' icon={settingsIcon} title='Settings' linkClass='nav-link sidebar-nav-link' link='#' />}
        </nav>
    );
}