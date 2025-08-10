export default function Conversation({convWith, convo}) {
    return (
        <div>
            {convo.map(msg => {
                return (
                    <div style={{textAlign: 'left'}}>
                        <span style={{fontWeight: 'bold', marginRight: '4px'}}>{msg.sender === 'self' ? 'me' : convWith}: </span>
                        <span>"{msg.text}"</span>
                    </div>
                )
            })}
        </div>
    )
}