export default function Contact({contact, displayConvo}) {
    return (
        <button style={{margin: '4px'}}  onClick={() => displayConvo(contact)}>{contact}</button>
    )
}