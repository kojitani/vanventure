import React from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';
export default function HostDashboard() {
  const [hostData, setHostData] = useOutletContext();

  console.log(useOutletContext());
  return (
    <div className="host-dashboard">
      <h1>Welcome!{}</h1>
    </div>
  );
}
