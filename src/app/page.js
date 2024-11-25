"use client"

import Todo from "@/components/Todo";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {

  const theme = useTheme();

  return (
    <div className={theme.background}>
      <Todo />
    </div>
  );
}
