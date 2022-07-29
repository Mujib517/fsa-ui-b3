import React, { useContext, useState } from "react";
import DataContext from "./context/DataContext";
// Flux
// Redux: complex
// Context API
const Level2 = () => <>
    <h1>Level 2</h1>
    <Level3 />
</>

const Level3 = () => {
    const { phone, onNotify } = useContext(DataContext);
    return <>
        <h1>Level 3 {phone}</h1>
        <button onClick={() => onNotify({ a: 1, b: 2 })}>Notify</button>
    </>
}

const Level1 = () => <div>
    <h1>Level 1</h1>
    <Level2 />
</div>

function Contact() {
    const [phone] = useState('949595959');
    const onNotify = (data) => console.log('notified', data);

    return <div>
        <DataContext.Provider value={{ phone, onNotify }}>
            <Level1 />
        </DataContext.Provider>
        <h1>Contact Page</h1>
    </div>
}

export default Contact;