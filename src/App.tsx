import LoginForm from "@/components/login-form";
import RecieverPhoneForm from "./components/reciever-phone-form";
import { useAuthStore } from "./store";

const App = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="w-full h-full">
      <RecieverPhoneForm />
    </div>
  );
};

export default App;
