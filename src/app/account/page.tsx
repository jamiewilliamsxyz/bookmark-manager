import AccountActions from "@/components/features/auth/AccountActions";

const AccountPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 gap-12">
      <h1 className="text-6xl">Account</h1>

      <AccountActions />
    </div>
  );
};

export default AccountPage;
