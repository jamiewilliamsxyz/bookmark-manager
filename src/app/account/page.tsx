import { User } from "lucide-react";
import LogOutButton from "@/components/features/account/LogOutButton";
import DeleteAccountButton from "@/components/features/account/DeleteAccountButton";

const AccountPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start pt-14 items-center px-8 w-full gap-14">
      <div className="flex items-center gap-3">
        <User size={56} color="#7dd3fc" strokeWidth={2.5} />
        <h1 className="font-semibold text-6xl text-neutral-100">Account</h1>
      </div>

      <div className="bg-neutral-800 p-4 rounded-lg flex flex-col gap-3 items-center">
        <LogOutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};

export default AccountPage;
