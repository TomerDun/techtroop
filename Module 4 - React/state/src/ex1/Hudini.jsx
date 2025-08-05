import { useState } from "react";

export default function Hudini() {
    const [show, setShow] = useState(false);
    return (
        <div>
            {show ? 'Now you see me' : 'Now you dont'}
            <button onClick={() => setShow(!show)}>Flip</button>
        </div>
    )
}