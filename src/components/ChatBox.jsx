import Message from "./Message.jsx";
import {collection, query, where, onSnapshot, orderBy, limit} from "firebase/firestore";
import {useEffect, useRef, useState} from "react";
import {db} from "../firebase.jsx";

const ChatBox = () => {
	const messagesEndRef = useRef()
	const [messages, setMessages] = useState([])
	
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({behavior: "smooth"})
	}
	
	useEffect(scrollToBottom, [messages])

	useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({...doc.data(), id: doc.id});

			});
			setMessages(messages)

		});
		
		return () => unsubscribe
	}, [])

	return (
		<div className={"container mx-auto py-10 px-10 mb-14"}>
			{messages.map(message => (
				<Message key={message.id} message={message}/>
			))}
			<div ref={messagesEndRef}></div>
		</div>
	)
}

export default ChatBox