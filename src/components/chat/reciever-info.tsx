import { AvatarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useReceiverStore } from "@/store";

const ReceiverInfo = () => {
  const { phoneNumber } = useReceiverStore();
  return (
    <div className="flex gap-1.5 items-center px-4 py-2.5">
      <Avatar>
        <AvatarImage />
        <AvatarFallback>
          <AvatarIcon width={50} height={50} />
        </AvatarFallback>
      </Avatar>
      <div>+{phoneNumber}</div>
    </div>
  );
};

export default ReceiverInfo;
