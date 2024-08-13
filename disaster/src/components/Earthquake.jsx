import Header from "./Header"

const Earthquake = () => {
    return(
        <div>
            <Header/>
        <div id="earthquake" className="safety">
    <h3>Earthquake Safety Tips</h3><br/>
    <img src="./images/earthquake.webp"/>
    <h4>Before an Earthquake:</h4>
    <ul>
        <li><strong>Identify Safe Spots:</strong> Find safe spots in each room, such as under sturdy tables, against interior walls, and away from windows. Ensure heavy items are securely fastened to walls.</li>
        <li><strong>Create a Family Emergency Plan:</strong> Discuss and practice an evacuation plan. Know how to turn off gas, water, and electricity.</li>
        <li><strong>Prepare an Emergency Kit:</strong> Keep an emergency kit with essentials like water, non-perishable food, medications, flashlight, batteries, and a first aid kit.</li>
    </ul>
    
    <h4>During an Earthquake:</h4>
    <ul>
        <li><strong>Drop, Cover, and Hold On:</strong> Drop to your hands and knees. Cover your head and neck under a sturdy piece of furniture. Hold on until the shaking stops.</li>
        <li><strong>Stay Indoors:</strong> Stay inside until the shaking stops and it's safe to go outside. Avoid windows, glass, and anything that could shatter.</li>
        <li><strong>If Outside:</strong> Move to an open area away from buildings, trees, streetlights, and power lines. Drop to the ground and protect your head and neck.</li>
    </ul>

    <h4>After an Earthquake:</h4>
    <ul>
        <li><strong>Check for Injuries and Damage:</strong> Provide first aid if necessary. Check for gas leaks, electrical shorts, and water line damage.</li>
        <li><strong>Expect Aftershocks:</strong> Be prepared for aftershocks, which can cause additional damage.</li>
        <li><strong>Communicate:</strong> Use a battery-operated radio for updates. Communicate with family members and inform them of your safety.</li>
    </ul>
</div>
</div>
    )
}

export default Earthquake