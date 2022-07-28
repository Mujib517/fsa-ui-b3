import { useState } from "react";

// Flux
// Redux: complex
// Context API
const Level2 = ({ phone, onNotify }) => <>
    <h1>Level 2</h1>
    <Level3 phone={phone} onNotify={onNotify} />
</>

const Level3 = ({ phone, onNotify }) => <>
    <h1>Level 3 {phone}</h1>
    <button onClick={() => onNotify()}>Notify</button>
</>

const Level1 = ({ phone, onNotify }) => <div>
    <h1>Level 1</h1>
    <Level2 phone={phone} onNotify={onNotify} />
</div>

function Contact() {
    const [phone] = useState('949595959');
    const onNotify = () => console.log('notified');
    return <div>
        <Level1 phone={phone} onNotify={onNotify} />
        <h1>Contact Page</h1>
    </div>
}

export default Contact;