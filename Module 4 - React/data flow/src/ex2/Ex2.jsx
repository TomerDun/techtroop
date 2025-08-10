import { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

export default function Ex2() {
    const [conversations, setConversations] = useState(
        [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    )
    const [displayConversation, setDisplayConversation] = useState(null);


    const contacts = conversations.map(conv => conv.with);
    const contactConvo = displayConversation ? conversations.filter(conv => conv.with === displayConversation)[0].convo : null;

    function displayConvo(contact) {
        setDisplayConversation(contact);
    }

    return (
        <>
            {displayConversation === null ? <List displayConvo={displayConvo} contacts={contacts} /> :
                <>
                    <Conversation convWith={displayConversation} convo={contactConvo} />
                    <button style={{ marginTop: '1rem' }} onClick={() => setDisplayConversation(null)}>Back</button>

                </>
            }
        </>
    )
}