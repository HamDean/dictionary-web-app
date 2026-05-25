import { useEffect, useState } from "react";

const Toggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <input
      type="checkbox"
      className="toggle w-10 h-5 self-center dark:bg-[#A445ED] dark:border-none dark:text-white"
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
export default Toggle;
