"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, SkipForward, Clock, Coffee, Volume2, VolumeX, Bell } from "lucide-react";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface Settings {
  focus: number;
  shortBreak: number;
  longBreak: number;
  sessionsUntilLongBreak: number;
  soundEnabled: boolean;
  volume: number;
}

// Sound generator using Web Audio API
const playAlarmSound = (volume: number = 0.5) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    // Play a pleasant alarm sound
    const playBeep = (startTime: number, frequency: number) => {
      const oscillator = audioContext.createOscillator();
      oscillator.connect(gainNode);
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.2);
    };

    // Play a sequence of beeps
    const now = audioContext.currentTime;
    playBeep(now, 880); // A5
    playBeep(now + 0.3, 988); // B5
    playBeep(now + 0.6, 1047); // C6

    // Clean up
    setTimeout(() => {
      audioContext.close();
    }, 2000);
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};

export default function StudyTimerContent() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
    sessionsUntilLongBreak: 4,
    soundEnabled: true,
    volume: 0.5,
  });
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  useEffect(() => {
    const duration = settings[mode];
    setTimeLeft(duration * 60);
  }, [mode, settings]);

  const handleTimerComplete = () => {
    setIsRunning(false);

    // Play sound alarm
    if (settings.soundEnabled) {
      playAlarmSound(settings.volume);
    }

    // Show notification
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Timer Selesai!", {
        body: mode === "focus" ? "Waktunya istirahat" : "Waktunya fokus kembali",
        icon: "/icon-192.png",
      });
    } else if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Timer Selesai!", {
            body: mode === "focus" ? "Waktunya istirahat" : "Waktunya fokus kembali",
            icon: "/icon-192.png",
          });
        }
      });
    }

    // Switch mode
    if (mode === "focus") {
      const newSessions = sessionsCompleted + 1;
      setSessionsCompleted(newSessions);

      if (newSessions % settings.sessionsUntilLongBreak === 0) {
        setMode("longBreak");
      } else {
        setMode("shortBreak");
      }
    } else {
      setMode("focus");
    }
  };

  const toggleTimer = () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(settings[mode] * 60);
  };

  const skipToNext = () => {
    setIsRunning(false);
    if (mode === "focus") {
      const newSessions = sessionsCompleted + 1;
      setSessionsCompleted(newSessions);

      if (newSessions % settings.sessionsUntilLongBreak === 0) {
        setMode("longBreak");
      } else {
        setMode("shortBreak");
      }
    } else {
      setMode("focus");
    }
  };

  const testAlarm = () => {
    if (settings.soundEnabled) {
      playAlarmSound(settings.volume);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getProgress = () => {
    const total = settings[mode] * 60;
    return ((total - timeLeft) / total) * 100;
  };

  const modeConfig = {
    focus: {
      label: "Fokus",
      icon: Clock,
      gradient: "from-rose-500 to-pink-600",
      bg: "bg-rose-500",
      textColor: "text-rose-600",
      bgColor: "bg-rose-100 dark:bg-rose-900/30",
    },
    shortBreak: {
      label: "Istirahat Pendek",
      icon: Coffee,
      gradient: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-500",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    longBreak: {
      label: "Istirahat Panjang",
      icon: Coffee,
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
  };

  const currentMode = modeConfig[mode];
  const ModeIcon = currentMode.icon;

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900 via-pink-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Clock className="w-5 h-5 mr-3" />
            Produktivitas
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Study Timer
          </h1>

          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
            Teknik Pomodoro untuk belajar lebih fokus dan efektif
          </p>
        </motion.div>
      </section>

      {/* Main Timer Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-8 md:p-12"
          >
            {/* Mode Selector */}
            <div className="flex justify-center gap-3 mb-8">
              {(["focus", "shortBreak", "longBreak"] as TimerMode[]).map((m) => {
                const config = modeConfig[m];
                return (
                  <button
                    key={m}
                    onClick={() => {
                      setMode(m);
                      setIsRunning(false);
                    }}
                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                      mode === m
                        ? `${config.bgColor} ${config.textColor} shadow-lg`
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {config.label}
                  </button>
                );
              })}
            </div>

            {/* Timer Display */}
            <div className="relative mb-8">
              <div className="w-72 h-72 mx-auto relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="144"
                    cy="144"
                    r="130"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <motion.circle
                    cx="144"
                    cy="144"
                    r="130"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: getProgress() / 100 }}
                    transition={{ duration: 0.5 }}
                    className="drop-shadow-lg"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      {mode === "focus" && (
                        <>
                          <stop offset="0%" stopColor="#f43f5e" />
                          <stop offset="100%" stopColor="#db2777" />
                        </>
                      )}
                      {mode === "shortBreak" && (
                        <>
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </>
                      )}
                      {mode === "longBreak" && (
                        <>
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </>
                      )}
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ModeIcon className={`w-8 h-8 ${currentMode.textColor} mb-2`} />
                  <div className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tabular-nums">
                    {formatTime(timeLeft)}
                  </div>
                  <div className={`text-sm font-bold uppercase tracking-widest mt-2 ${currentMode.textColor}`}>
                    {currentMode.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={resetTimer}
                className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-6 h-6" />
              </button>

              <button
                onClick={toggleTimer}
                className={`p-6 rounded-2xl bg-gradient-to-r ${currentMode.gradient} text-white shadow-xl shadow-${currentMode.bg.split('-')[1]}-600/30 hover:shadow-2xl transition-all transform hover:scale-105`}
              >
                {isRunning ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </button>

              <button
                onClick={skipToNext}
                className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>

            {/* Sound Control */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setSettings({ ...settings, soundEnabled: !settings.soundEnabled })}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  settings.soundEnabled
                    ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {settings.soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                <span className="text-sm font-semibold">
                  {settings.soundEnabled ? "Alarm Aktif" : "Alarm Mati"}
                </span>
              </button>

              {settings.soundEnabled && (
                <>
                  <button
                    onClick={() => setShowVolumeControl(!showVolumeControl)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                  </button>

                  <AnimatePresence>
                    {showVolumeControl && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg"
                      >
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Volume</span>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={settings.volume}
                          onChange={(e) => setSettings({ ...settings, volume: parseFloat(e.target.value) })}
                          className="w-20 h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
                        />
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 w-8">
                          {Math.round(settings.volume * 100)}%
                        </span>
                        <button
                          onClick={testAlarm}
                          className="px-2 py-1 bg-violet-600 text-white text-xs font-bold rounded hover:bg-violet-700 transition-colors"
                        >
                          Test
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className={`p-4 rounded-xl ${currentMode.bgColor}`}>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{sessionsCompleted}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Sesi Selesai</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  {Math.floor(sessionsCompleted * settings.focus)} min
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Total Fokus</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  {Math.floor(sessionsCompleted * (settings.shortBreak / 4))} min
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Total Istirahat</div>
              </div>
            </div>

            {/* Settings Toggle */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {showSettings ? "Sembunyikan" : "Tampilkan"} Pengaturan
              </button>
            </div>

            {showSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl"
              >
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Pengaturan Timer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Durasi Fokus (menit)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={settings.focus}
                      onChange={(e) => setSettings({ ...settings, focus: Number(e.target.value) })}
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Istirahat Pendek (menit)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={settings.shortBreak}
                      onChange={(e) => setSettings({ ...settings, shortBreak: Number(e.target.value) })}
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Istirahat Panjang (menit)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={settings.longBreak}
                      onChange={(e) => setSettings({ ...settings, longBreak: Number(e.target.value) })}
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Sesi sampai istirahat panjang
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="10"
                      value={settings.sessionsUntilLongBreak}
                      onChange={(e) => setSettings({ ...settings, sessionsUntilLongBreak: Number(e.target.value) })}
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
            Tips Belajar dengan Pomodoro
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Tentukan Tujuan</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Sebelum memulai sesi, tentukan apa yang ingin dicapai dalam 25 menit tersebut
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Gunakan Alarm</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Aktifkan alarm untuk notifikasi saat waktu habis. Atur volume sesuai kebutuhan.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Istirahat dengan Benar</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Gunakan waktu istirahat untuk berdiri, berjalan, atau minum air
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Lacak Progres</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Catat berapa banyak sesi yang diselesaikan setiap hari untuk motivasi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
