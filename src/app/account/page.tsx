import EmailDisplay from "@/components/features/auth/EmailDisplay";
import AccountActions from "@/components/features/auth/AccountActions";

const AccountPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start items-center py-12 gap-12">
      <h1 className="text-6xl">Account</h1>
      <div className="flex flex-col gap-5 items-center">
        <AccountActions />
        <EmailDisplay />
      </div>
    </div>
  );
};

export default AccountPage;
