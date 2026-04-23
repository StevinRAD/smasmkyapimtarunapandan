import type { Metadata } from "next";
import TodoListContent from "./TodoListContent";

export const metadata: Metadata = {
  title: "To-Do List | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Kelola tugas harian dengan mudah - simpan di browser lokal",
  keywords: ["todo", "tugas", " checklist", "task manager", "to-do list"],
};

export default function TodoListPage() {
  return <TodoListContent />;
}
