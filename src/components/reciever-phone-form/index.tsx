import { ChangeEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiverStore } from "@/store";

const ReceieverPhoneForm = () => {
  const [phone, setPhone] = useState("");
  const { setPhoneNumber } = useReceiverStore();

  const handleSubmit = () => {
    setPhoneNumber(phone);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="w-full max-w-sm p-6 flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">Номер телефона получателя</Label>
          <Input id="phone" value={phone} onChange={handleChange} />
        </div>
        <Button>Создать чат</Button>
      </form>
    </div>
  );
};

export default ReceieverPhoneForm;
