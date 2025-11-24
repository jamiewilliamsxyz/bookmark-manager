import EmailDisplay from "@/components/features/auth/EmailDisplay";
import AccountActions from "@/components/features/auth/AccountActions";

const AccountPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start items-center px-8 py-12 gap-12">
      <h1 className="text-6xl">Account</h1>
      <EmailDisplay />
      <AccountActions />
    </div>
  );
};

export default AccountPage;
