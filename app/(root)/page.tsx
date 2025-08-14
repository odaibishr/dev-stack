import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="mt-20">
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
      ></form>
    </div>
  );
};

export default Home;
