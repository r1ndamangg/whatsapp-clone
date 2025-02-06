import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import MessagesList from "./messages-list";
import ReceiverInfo from "./reciever-info";
import MessageInput from "./message-input";
import useSendMessage from "@/hooks/useSendMessage";

export interface MessageListItem {
  idMessage: string;
  message: string;
}

const Chat = () => {
  const [message, setMessage] = useState("");

  const [messagesList, setMessagesList] = useState<MessageListItem[]>([]);

  const { sendMessage } = useSendMessage();

  const submitMessage = async () => {
    if (!message) return;

    try {
      const response = await sendMessage(message);
      setMessagesList((prevMessages) => [
        ...prevMessages,
        { idMessage: response.idMessage, message },
      ]);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
      setMessage("");
    }
  };

  const handleChangeInput: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    submitMessage();
    setMessage("");
  };

  return (
    <div className="w-full flex flex-col h-full">
      <header className="h-16 bg-custom-dark">
        <ReceiverInfo />
      </header>
      <MessagesList items={messagesList} />
      <footer className="px-4 py-1.5 bg-custom-dark">
        <div className="flex gap-1.5 px-3 py-2.5 w-full">
          <MessageInput
            message={message}
            onChange={handleChangeInput}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          />
        </div>
      </footer>
    </div>
  );
};

export default Chat;
