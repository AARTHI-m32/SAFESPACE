import React from 'react';
import Header from './Header';

const Flood = () => {
    return (
        <div>
            <Header/>
      
        <div id="flood" className='safety'>
    <h3>Flood Safety Tips</h3><br/>
    <img src="./images/flood.jpg"/> 
    <h4>Before a Flood:</h4>
    <ul>
        <li><strong>Know Your Risk:</strong> Understand if you live in a flood-prone area and prepare accordingly.</li>
        <li><strong>Prepare an Emergency Kit:</strong> Include essentials such as water, non-perishable food, medications, and important documents.</li>
        <li><strong>Elevate Electrical Appliances:</strong> Keep electrical appliances and utilities elevated to prevent damage from floodwaters.</li>
        <li><strong>Create an Evacuation Plan:</strong> Have a plan in place for evacuating if necessary, including routes and transportation options.</li>
    </ul>
    
    <h4>During a Flood:</h4>
    <ul>
        <li><strong>Move to Higher Ground:</strong> Move to higher ground or to a designated safe area if you are in a flood zone.</li>
        <li><strong>Avoid Floodwaters:</strong> Do not walk, swim, or drive through floodwaters. They may be deeper and stronger than they appear.</li>
        <li><strong>Listen for Updates:</strong> Stay informed through local news and emergency services for updates and instructions.</li>
    </ul>

    <h4>After a Flood:</h4>
    <ul>
        <li><strong>Inspect for Damage:</strong> Check your home for damage and avoid entering if it is unsafe.</li>
        <li><strong>Clean Up Safely:</strong> Wear protective gear and clean up any contaminated areas. Disinfect items and surfaces that came into contact with floodwater.</li>
        <li><strong>Seek Assistance:</strong> Contact local authorities or disaster relief organizations for help and resources.</li>
    </ul>
</div>
</div>
    );
};

export default Flood;
