import Header from "./Header"

const Pandemic = () => {
    return(
        <div>
        <Header/>
        <div id="pandemic" className="safety">
    <h3>Pandemic Preparedness Tips</h3><br/>
    <img src="./images/pandemic.webp"/>
    <h4>Before a Pandemic:</h4>
    <ul>
        <li><strong>Stay Informed:</strong> Keep up-to-date with information from reliable sources about the pandemic situation.</li>
        <li><strong>Prepare a Health Kit:</strong> Include items such as masks, hand sanitizers, disinfectants, and medications.</li>
        <li><strong>Plan for Remote Work/School:</strong> Set up a plan for working or studying from home if needed.</li>
        <li><strong>Practice Good Hygiene:</strong> Wash hands regularly, use hand sanitizer, and practice respiratory hygiene.</li>
    </ul>
    
    <h4>During a Pandemic:</h4>
    <ul>
        <li><strong>Follow Health Guidelines:</strong> Adhere to guidelines from health authorities, including social distancing and wearing masks.</li>
        <li><strong>Stay Home if Sick:</strong> Avoid going out if you are feeling unwell or have symptoms.</li>
        <li><strong>Maintain Physical Distancing:</strong> Keep a safe distance from others and avoid large gatherings.</li>
    </ul>

    <h4>After a Pandemic:</h4>
    <ul>
        <li><strong>Monitor Health:</strong> Continue to follow health guidelines and monitor for any lingering symptoms.</li>
        <li><strong>Support Mental Health:</strong> Address any stress or anxiety resulting from the pandemic and seek support if needed.</li>
        <li><strong>Stay Informed:</strong> Keep up with updates and follow any ongoing recommendations from health officials.</li>
    </ul>
</div>
</div>
    )
}

export default Pandemic