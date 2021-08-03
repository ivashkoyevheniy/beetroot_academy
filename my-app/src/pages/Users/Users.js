import React from "react";
import { AppHeader, Sidebar, UsersComponent } from "../../components";

export const Users = () => { 
  return (
    <div className="app-container">
        <Sidebar />
        <div className='app-right-container'>
        <AppHeader />
        <main className='main-table'>
            <UsersComponent/>
        </main>
        </div>
        
    </div>
  );
}