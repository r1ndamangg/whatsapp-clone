import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChangeEventHandler, useState } from "react";
import { useAuthStore } from "@/store";

interface FormValues {
  idInstance: string;
  apiTokenInstance: string;
}

const LoginForm = () => {
  const { setUser } = useAuthStore();
  const [formValues, setFormValues] = useState<FormValues>({
    apiTokenInstance: "",
    idInstance: "",
  });

  const handleSubmit = () => {
    if (formValues) setUser(formValues);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValues((formValues) => {
      const { value, name } = e.target;

      return {
        ...formValues,
        [name]: value,
      };
    });
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-full">
        <form
          className="w-full max-w-sm p-6 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="idInstance">idInstance</Label>
            <Input
              id="idInstance"
              name="idInstance"
              value={formValues.idInstance}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="apiTokenInstance">apiTokenInstance</Label>
            <Input
              id="apiTokenInstance"
              name="apiTokenInstance"
              value={formValues.apiTokenInstance}
              onChange={handleChange}
            />
          </div>
          <Button>Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
