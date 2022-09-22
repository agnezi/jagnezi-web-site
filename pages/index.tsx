import { useEffect, useState } from "react";

import Head from "next/head";
import type { NextPage } from "next";
import TypeIt from "typeit-react";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>It&apos;s Jagnezi</title>
      </Head>
      <div className="border-solid border-2 border-zinc-300 dark:border-white rounded-xl m-6 p-4 h-[calc(100vh-2.5rem)] flex flex-col justify-between items-center">
        <header>
          <TypeIt
            options={{
              startDelay: 2000,
              lifeLike: true,
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex justify-center items-center"
            element={"h1"}
            getBeforeInit={(instance: any) => {
              instance
                .type("It's_JAgnezi")
                .pause(500)
                .delete(6, { delay: 250 })
                .pause(500)
                .type("onas_Agnezi")
                .pause(500)
                .move(-13, { delay: 250 })
                .delete(3, { delay: 250 })
                .type("'m")
                .move(20)
                .type("!")
                .go();

              // Remember to return it!
              return instance;
            }}
          />
        </header>

        <main>
          <TypeIt
            options={{
              startDelay: 2000,
              lifeLike: true,
            }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex justify-center items-center text-black dark:text-zinc-300"
            element={"h1"}
            getBeforeInit={(instance: any) => {
              instance
                .type(".")
                .pause(2500)
                .type(".")
                .pause(2500)
                .type(".")
                .pause(2500)
                .delete(3)
                .type("...Something's coming!")
                .go();

              // Remember to return it!
              return instance;
            }}
          />
        </main>
        <footer>
          <div className="">
            <button
              className={`border-solid border-y-2 border-l-2 rounded-l-md p-4 ${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              className={`border-solid border-y-2 border-r-2 rounded-r-md p-4`}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
