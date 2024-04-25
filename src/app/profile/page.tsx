import Header from "@/components/header";
import Footer from "@/components/footer";
import FormProfile from "./components/form-profile";
import LogoutButton from "./components/logout-button";

import getProfile from "@/services/get-profile";

export default async function ProfilePage() {
  const user: User = await getProfile();

  return (
    <main className="bg-gray-200 dark:bg-gray-800 relative">
      <Header user={user} />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
        bg-background 
        md:w-11/12
        max-w-3xl
        mx-auto
        my-10
        md:rounded-md
        shadow-sm
        p-5
        md:p-10"
        >
          <FormProfile user={user} />
          <LogoutButton />
        </div>
      </div>
      <Footer />
    </main>
  );
}
