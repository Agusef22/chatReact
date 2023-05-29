import ChatBox from "../components/ChatBox.jsx";
import SendMessage from "../components/SendMessage.jsx";

const ChatRoom = () => {
	return (
		<div className={"container auto-mx"}>
			<ChatBox/>
			<SendMessage/>
		</div>
	)
}

export default ChatRoom