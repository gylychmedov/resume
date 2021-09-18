import { useTheme } from "next-themes";
import Link from "next/link";

const Home = () => {
  const { setTheme, theme } = useTheme();
  return (
    <main className="min-w-screen relative min-h-screen bg-gradient-to-tr to-red-150 from-green-100 dark:to-gray-700 dark:from-gray-800 p-5">
      <section className="grid grid-cols-12 gap-5 absolute">
        <aside className="bg-white dark:bg-gray-600 bg-opacity-50 col-span-6 rounded-xl flex flex-col justify-center items-center text-xl">
          Frontend
        </aside>
      </section>
      <div
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        className="fixed bottom-5 right-5 w-14 h-14 bg-white dark:bg-gray-600 flex items-center justify-center rounded-xl"
      >
        {theme}
      </div>
    </main>
  );
};

export default Home;
