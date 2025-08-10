export default function Contact({contact, displayConvo}) {
    return (
        <div onClick={() => displayConvo(contact)}>{contact}</div>
    )
}