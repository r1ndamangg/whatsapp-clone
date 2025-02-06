import { ChatIdVariantType } from "@/types/chat";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Code = Record<ChatIdVariantType, string>;

export function phoneNumberToChatId(
  phone: string,
  variant: ChatIdVariantType = "PERSONAL"
) {
  const code: Code = {
    PERSONAL: "c.us",
    GROUP: "g.us",
  };
  return `${phone}@${code[variant]}`;
}
