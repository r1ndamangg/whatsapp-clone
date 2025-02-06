import LoginForm from "@/components/login-form";
import RecieverPhoneForm from "@/components/reciever-phone-form";
import Chat from "@/components/chat";

import { useAuthStore, useReceiverStore } from "./store";

const App = () => {
  const { user } = useAuthStore();
  const { phoneNumber } = useReceiverStore();

  if (!user) {
    return <LoginForm />;
  }

  if (!phoneNumber) {
    return <RecieverPhoneForm />;
  }

  return <Chat />;
};

export default App;
