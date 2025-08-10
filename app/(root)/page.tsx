import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Page = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Hello There In Inter Space Grotesk👋
      </h1>
      <h1 className="text-2xl font-bold font-space-grotesk">
        Hello There In Space Grotesk 👋
      </h1>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit" variant="outline">
          LogOut
        </Button>
      </form>
    </div>
  );
};

export default Page;
