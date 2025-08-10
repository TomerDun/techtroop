import Contact from "./Contact";

export default function List({contacts, displayConvo}) {
    return (
        <div>
            {contacts.map(contact => <Contact displayConvo={displayConvo} contact={contact}/>)}
        </div>
    )
}