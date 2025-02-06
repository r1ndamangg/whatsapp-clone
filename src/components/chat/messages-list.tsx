import { MessageListItem } from ".";
import Message from "./message";

interface Props {
  items: MessageListItem[];
}

const MessagesList = ({ items }: Props) => {
  return (
    <div className="flex-1 p-8 flex flex-col gap-1">
      {items.map(({ idMessage, message }) => (
        <Message key={idMessage} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
