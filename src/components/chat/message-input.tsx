import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

interface Props {
  message: string;
  onKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const MessageInput = ({ message, onClick, onKeyDown, onChange }: Props) => {
  return (
    <div className="flex gap-1.5 px-3 py-2.5 w-full">
      <Textarea
        className="min-h-2 h-10 bg-custom-dark-blue placeholder:text-custom-slate"
        placeholder="Type a message"
        value={message}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <Button
        className="bg-custom-dark self-end"
        onClick={onClick}
        disabled={!message}
      >
        <PaperPlaneIcon />
      </Button>
    </div>
  );
};

export default MessageInput;
