import React, {useState} from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageURL, setImageURL] = useState("");

    const saveContact = () => {
        console.log({ name, email, imageURL });
        ContactsCollection.insert({ name, email, imageURL })
        setName("");
        setEmail("");
        setImageURL("");
    }
    
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    value={name}
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                />      
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    value={email}
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                /> 
            </div>
            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input 
                    id="imageURL"
                    value={imageURL}
                    type="text" 
                    onChange={(e) => setImageURL(e.target.value)}

                /> 
            </div>
            <div>
                <button 
                    type="button"
                    onClick={saveContact}
                >
                    Save Contact
                </button>
            </div>
        </form>
    )
}