"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Plus, Trash2, BookOpen, TrendingUp, Award } from "lucide-react";

interface Subject {
  name: string;
  score: number;
  sks: number;
}

export default function StudentCalculatorContent() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "", score: 0, sks: 2 },
  ]);
  const [targetIPK, setTargetIPK] = useState("");

  const addSubject = () => {
    setSubjects([...subjects, { name: "", score: 0, sks: 2 }]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((_, i) => i !== index));
    }
  };

  const updateSubject = (index: number, field: keyof Subject, value: string | number) => {
    const newSubjects = [...subjects];
    if (field === "score") {
      newSubjects[index][field] = Math.min(100, Math.max(0, Number(value)));
    } else if (field === "sks") {
      newSubjects[index][field] = Math.min(6, Math.max(1, Number(value)));
    } else {
      newSubjects[index][field] = value as string;
    }
    setSubjects(newSubjects);
  };

  const calculateIPS = () => {
    let totalSKS = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      if (subject.score > 0) {
        const grade = getGrade(subject.score);
        totalPoints += grade.points * subject.sks;
        totalSKS += subject.sks;
      }
    });

    return totalSKS > 0 ? (totalPoints / totalSKS).toFixed(2) : "0.00";
  };

  const getGrade = (score: number) => {
    if (score >= 90) return { letter: "A", points: 4.0 };
    if (score >= 85) return { letter: "A-", points: 3.7 };
    if (score >= 80) return { letter: "B+", points: 3.5 };
    if (score >= 75) return { letter: "B", points: 3.0 };
    if (score >= 70) return { letter: "B-", points: 2.7 };
    if (score >= 65) return { letter: "C+", points: 2.5 };
    if (score >= 60) return { letter: "C", points: 2.0 };
    if (score >= 55) return { letter: "D", points: 1.0 };
    return { letter: "E", points: 0.0 };
  };

  const getPredicate = (ips: string) => {
    const ip = parseFloat(ips);
    if (ip >= 3.5) return { text: "Cumlaude", color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900/30" };
    if (ip >= 3.0) return { text: "Sangat Baik", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" };
    if (ip >= 2.5) return { text: "Baik", color: "text-cyan-600", bg: "bg-cyan-100 dark:bg-cyan-900/30" };
    if (ip >= 2.0) return { text: "Cukup", color: "text-yellow-600", bg: "bg-yellow-100 dark:bg-yellow-900/30" };
    return { text: "Perlu Usaha", color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30" };
  };

  const calculateRequiredScores = () => {
    const target = parseFloat(targetIPK);
    if (isNaN(target)) return null;

    const currentIPS = parseFloat(calculateIPS());
    let currentSKS = 0;
    let currentPoints = 0;

    subjects.forEach((subject) => {
      if (subject.score > 0) {
        const grade = getGrade(subject.score);
        currentPoints += grade.points * subject.sks;
        currentSKS += subject.sks;
      }
    });

    const neededPoints = target * (currentSKS + 24) - currentPoints;
    const avgGradeNeeded = neededPoints / 24;

    return {
      neededPoints: avgGradeNeeded.toFixed(2),
      avgScore: Math.min(100, Math.max(0, (avgGradeNeeded * 25) - 8)).toFixed(0),
    };
  };

  const ips = calculateIPS();
  const predicate = getPredicate(ips);
  const required = calculateRequiredScores();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Calculator className="w-5 h-5 mr-3" />
            Akademik
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Kalkulator Siswa
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Hitung nilai rapor dan indeks prestasi dengan mudah
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated p-6 md:p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Daftar Mata Pelajaran
              </h2>
              <button
                onClick={addSubject}
                className="flex items-center px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah
              </button>
            </div>

            {/* Header */}
            <div className="grid grid-cols-12 gap-4 mb-4 px-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              <div className="col-span-5">Mata Pelajaran</div>
              <div className="col-span-2">Nilai (0-100)</div>
              <div className="col-span-2">SKS</div>
              <div className="col-span-2">Grade</div>
              <div className="col-span-1"></div>
            </div>

            {/* Subjects */}
            <div className="space-y-3">
              {subjects.map((subject, index) => {
                const grade = getGrade(subject.score);
                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl items-center"
                  >
                    <div className="col-span-5">
                      <input
                        type="text"
                        value={subject.name}
                        onChange={(e) => updateSubject(index, "name", e.target.value)}
                        placeholder="Nama mata pelajaran"
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={subject.score || ""}
                        onChange={(e) => updateSubject(index, "score", e.target.value)}
                        placeholder="0"
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        min="1"
                        max="6"
                        value={subject.sks}
                        onChange={(e) => updateSubject(index, "sks", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <div className={`text-center py-2 px-3 rounded-lg font-black ${
                        subject.score >= 85 ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600" :
                        subject.score >= 75 ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600" :
                        subject.score >= 60 ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600" :
                        "bg-red-100 dark:bg-red-900/30 text-red-600"
                      }`}>
                        {subject.score > 0 ? grade.letter : "-"}
                      </div>
                    </div>
                    <div className="col-span-1">
                      {subjects.length > 1 && (
                        <button
                          onClick={() => removeSubject(index)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <div className="card-elevated p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Total SKS</span>
              </div>
              <div className="text-4xl font-black">
                {subjects.reduce((acc, s) => acc + (s.score > 0 ? s.sks : 0), 0)}
              </div>
            </div>

            <div className="card-elevated p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">IPS / IPK</span>
              </div>
              <div className="text-4xl font-black">
                {ips}
              </div>
            </div>

            <div className={`card-elevated p-6 ${predicate.bg}`}>
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Predikat</span>
              </div>
              <div className={`text-2xl font-black ${predicate.color}`}>
                {predicate.text}
              </div>
            </div>
          </motion.div>

          {/* Target Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6 md:p-8"
          >
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">
              Hitung Target IPK
            </h3>

            <div className="flex gap-4 mb-6">
              <input
                type="number"
                step="0.01"
                min="0"
                max="4.00"
                value={targetIPK}
                onChange={(e) => setTargetIPK(e.target.value)}
                placeholder="Contoh: 3.50"
                className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={calculateRequiredScores}
                className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Hitung
              </button>
            </div>

            {required && (
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Untuk mencapai IPK {targetIPK}, Anda perlu:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Rata-rata grade yang dibutuhkan:</span>
                    <div className="text-2xl font-black text-blue-600">{required.neededPoints}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Setara dengan nilai rata-rata:</span>
                    <div className="text-2xl font-black text-emerald-600">{required.avgScore}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  *Asumsi: 24 SKS lagi akan diambil
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Grade Scale Reference */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
            Skala Nilai
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { range: "90-100", grade: "A", points: "4.00", color: "from-emerald-500 to-green-600" },
              { range: "85-89", grade: "A-", points: "3.70", color: "from-teal-500 to-emerald-600" },
              { range: "80-84", grade: "B+", points: "3.50", color: "from-blue-500 to-cyan-600" },
              { range: "75-79", grade: "B", points: "3.00", color: "from-indigo-500 to-blue-600" },
              { range: "70-74", grade: "B-", points: "2.70", color: "from-violet-500 to-indigo-600" },
              { range: "65-69", grade: "C+", points: "2.50", color: "from-purple-500 to-violet-600" },
              { range: "60-64", grade: "C", points: "2.00", color: "from-pink-500 to-purple-600" },
              { range: "55-59", grade: "D", points: "1.00", color: "from-rose-500 to-pink-600" },
              { range: "0-54", grade: "E", points: "0.00", color: "from-red-500 to-rose-600" },
            ].map((item) => (
              <div
                key={item.grade}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-xl text-white text-center`}
              >
                <div className="text-2xl font-black">{item.grade}</div>
                <div className="text-xs opacity-80">{item.range}</div>
                <div className="text-sm font-bold mt-1">{item.points}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
