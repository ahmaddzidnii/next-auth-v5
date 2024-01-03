import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const sesssion = await auth();
  return (
    <div>
      {JSON.stringify(sesssion)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">logout</button>
      </form>
    </div>
  );
};

export default SettingsPage;
