import http from "@/api";
import { Message } from "@/types/chat";

interface SendMessageParams {
  idInstance: string;
  apiTokenInstance: string;
  phone: string;
  message: string;
}

const sendMessage = ({
  idInstance,
  apiTokenInstance,
  message,
  phone,
}: SendMessageParams) => {
  return http.post<Message>(
    `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    {
      chatId: phone,
      message,
    }
  );
};

export default sendMessage;
