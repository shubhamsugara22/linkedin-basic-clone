import UserInformation  from "@/components/UserInformation";

export default function Home() {
  return (
      <div className="grid grid-cols-8 mt-5 sm:px-5">
        <section className="hidden md:inline md:col-span-2">
          <UserInformation />
        </section>

        <section>
          {/* PostForm */}
          {/* PostForm */}
        </section>

        <section>
          {/* Widget */}
        </section>
       </div>
  );
}
