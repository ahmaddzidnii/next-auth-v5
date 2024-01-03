import { auth } from "@/auth";

const SettingsPage = async () => {
  const sesssion = await auth();
  return <div>{JSON.stringify(sesssion)}</div>;
};

export default SettingsPage;
