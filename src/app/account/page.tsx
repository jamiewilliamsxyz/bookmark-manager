import LogOutButton from "@/components/features/account/LogOutButton";
import DeleteAccountButton from "@/components/features/account/DeleteAccountButton";

const AccountPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 w-full gap-10">
      <h1 className="font-semibold text-6xl">Account</h1>
      <div className="bg-neutral-800 p-4 rounded-lg flex flex-col gap-3 items-center">
        <LogOutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};

export default AccountPage;
