"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, CheckCircle, Circle, ListTodo, Calendar, Filter } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  createdAt: number;
}

const categories = ["Tugas Sekolah", "Belajar", "Pekerjaan Rumah", "Lainnya"];

export default function TodoListContent() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const saved = localStorage.getItem("yapim-todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("yapim-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputText.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      completed: false,
      category: selectedCategory,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-purple-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <ListTodo className="w-5 h-5 mr-3" />
            Productivity
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            To-Do List
          </h1>

          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            Kelola tugas harian dengan mudah
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="card-elevated p-4 bg-gradient-to-br from-violet-500 to-purple-600 text-white text-center">
              <div className="text-2xl font-black">{stats.total}</div>
              <div className="text-xs font-bold uppercase opacity-80">Total</div>
            </div>
            <div className="card-elevated p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-center">
              <div className="text-2xl font-black">{stats.active}</div>
              <div className="text-xs font-bold uppercase opacity-80">Aktif</div>
            </div>
            <div className="card-elevated p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-center">
              <div className="text-2xl font-black">{stats.completed}</div>
              <div className="text-xs font-bold uppercase opacity-80">Selesai</div>
            </div>
          </motion.div>

          {/* Add Todo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6 mb-8"
          >
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                placeholder="Tambah tugas baru..."
                className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500"
              />
              <button
                onClick={addTodo}
                className="px-6 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${
                    selectedCategory === category
                      ? "bg-violet-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === "all"
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === "active"
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                Aktif
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === "completed"
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                Selesai
              </button>
            </div>

            {stats.completed > 0 && (
              <button
                onClick={clearCompleted}
                className="text-sm text-red-600 hover:text-red-700 font-bold transition-colors"
              >
                Hapus Selesai
              </button>
            )}
          </motion.div>

          {/* Todo List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <AnimatePresence>
              {filteredTodos.map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    todo.completed
                      ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="mt-1 flex-shrink-0"
                    >
                      {todo.completed ? (
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-400" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <p className={`font-bold ${
                        todo.completed
                          ? "text-slate-500 dark:text-slate-500 line-through"
                          : "text-slate-900 dark:text-white"
                      }`}>
                        {todo.text}
                      </p>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full mt-2 inline-block ${
                        todo.category === "Tugas Sekolah"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
                          : todo.category === "Belajar"
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
                          : todo.category === "Pekerjaan Rumah"
                          ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                      }`}>
                        {todo.category}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredTodos.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <ListTodo className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="font-bold">Tidak ada tugas</p>
                <p className="text-sm">Tambahkan tugas baru di atas</p>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl text-center text-sm text-violet-800 dark:text-violet-200"
          >
            <Calendar className="w-4 h-4 inline-block mr-2" />
            Tugas disimpan di browser Anda secara lokal
          </motion.div>
        </div>
      </section>
    </div>
  );
}
