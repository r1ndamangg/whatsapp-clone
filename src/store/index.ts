import { User } from "@/types/user";
import { create } from "zustand";

type AuthStoreType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

interface Receiver {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}

export const useReceiverStore = create<Receiver>((set) => ({
  phoneNumber: "",
  setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber })),
}));
