import sendMessage from "@/api/waInstance/sendmessage";
import { phoneNumberToChatId } from "@/lib/utils";
import { useAuthStore, useReceiverStore } from "@/store";
import { ChatIdVariantType } from "@/types/chat";

const useSendMessage = (variant: ChatIdVariantType = "PERSONAL") => {
  const { user } = useAuthStore();

  if (!user) {
    throw Error("No user is authrized yet");
  }
  const { phoneNumber } = useReceiverStore();

  if (!phoneNumber) {
    throw Error("Need to provider reciever's phone number");
  }

  const submitMessage = async (message: string) => {
    return sendMessage({
      idInstance: user.idInstance,
      apiTokenInstance: user.apiTokenInstance,
      message,
      phone: phoneNumberToChatId(phoneNumber, variant),
    });
  };

  return {
    sendMessage: submitMessage,
  };
};

export default useSendMessage;
