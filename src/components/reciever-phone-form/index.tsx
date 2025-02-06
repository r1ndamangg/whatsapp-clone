import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiverStore } from "@/store";

const ReceieverPhoneForm = () => {
  const [phone, setPhone] = useState("");

  const { setPhoneNumber } = useReceiverStore();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPhoneNumber(phone.slice(1));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhone(e.target.value);
  };

  const handleFocus = () => {
    if (!phone) {
      setPhone("+");
    }
  };

  const handleBlur = () => {
    if (phone === "+") {
      setPhone("");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-full">
        <form
          className="w-full max-w-sm p-6 flex flex-col gap-3 bg-custom-dark rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone">Номер телефона получателя</Label>
            <Input
              id="phone"
              value={phone}
              onChange={handleChange}
              type="tel"
              placeholder="+7XXXXXXXXXX"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="text-gray-400 text-xs">
              Используйте международный формат
            </span>
          </div>
          <Button className="bg-custom-teal" disabled={!phone}>
            Создать чат
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReceieverPhoneForm;
