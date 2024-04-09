import Header from "@/components/header";
import Footer from "@/components/footer";
import FormProfile from "./components/form-profile";
import LogoutButton from "./components/logout-button";

export default function ProfilePage() {
  return (
    <main className="bg-gray-200 dark:bg-gray-800 relative">
      <Header />
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
          <FormProfile />
          <LogoutButton />
        </div>
      </div>
      <Footer />
    </main>
  );
}
