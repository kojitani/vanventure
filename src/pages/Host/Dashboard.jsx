import React from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';
export default function HostDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  const nameCase = user.name[0]?.toUpperCase() + user.name.slice(1);
  return (
    <div className="host-dashboard">
      <h1>Welcome back, {nameCase === 'undefined' ? 'User' : nameCase}!</h1>
    </div>
  );
}
