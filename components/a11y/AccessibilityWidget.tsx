"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Eye, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mode, setMode] = useState<"normal" | "grayscale" | "high-contrast" | "negative">("normal");
  const [isTTSOn, setIsTTSOn] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const lastSpeakTime = useRef<number>(0);
  const [currentLang, setCurrentLang] = useState<string>("id-ID");

  useEffect(() => {
    // Show tooltip after 2 seconds on first visit
    const timer = setTimeout(() => setShowTooltip(true), 2000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    // Bersihkan kelas lama
    const html = document.documentElement;
    html.classList.remove("grayscale-mode", "high-contrast-mode", "negative-mode");

    // Tambah kelas baru
    if (mode === "grayscale") html.classList.add("grayscale-mode");
    if (mode === "high-contrast") html.classList.add("high-contrast-mode");
    if (mode === "negative") html.classList.add("negative-mode");
  }, [mode]);

  // Load available voices
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const updateVoices = () => {
        const voices = speechSynthesis.getVoices();
        const indoVoice = voices.find((voice) => voice.lang.startsWith("id"));
        if (indoVoice) {
          setCurrentLang(indoVoice.lang);
        }
      };

      speechSynthesis.onvoiceschanged = updateVoices;
      updateVoices();

      return () => {
        speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!isTTSOn || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    // Debounce - jangan bicara terlalu cepat
    const now = Date.now();
    if (now - lastSpeakTime.current < 500) {
      return;
    }
    lastSpeakTime.current = now;

    // Stop current speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  }, [isTTSOn, currentLang]);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // Handle TTS hover
  useEffect(() => {
    if (!isTTSOn) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Skip button, input, dan elements yang tidak seharusnya dibaca
      if (target.tagName === "BUTTON" || target.tagName === "INPUT" || target.closest("button")) {
        return;
      }

      const text = target.textContent?.trim();
      if (text && text.length > 0 && text.length < 500) {
        speak(text);
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      stopSpeaking();
    };
  }, [isTTSOn, speak, stopSpeaking]);

  const toggleTTS = () => {
    setIsTTSOn((prev) => {
      const newState = !prev;
      if (!newState && isSpeaking) {
        stopSpeaking();
      }
      return newState;
    });
  };

  const handleManualTTS = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const selection = document.getSelection();
      const text = selection ? selection.toString() : "";
      const utterance = new SpeechSynthesisUtterance(text || "Silakan blok teks untuk dibacakan.");
      utterance.lang = "id-ID";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung fitur pembaca suara.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`absolute bottom-16 right-0 text-white text-sm p-3 rounded-lg shadow-xl w-48 mb-2 ${
              isTTSOn ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            <p>
              {isTTSOn
                ? "✓ TTS Aktif! Arahkan kursor ke teks untuk mendengarkan."
                : "Klik untuk fitur aksesibilitas (Mode Kontras, Suara, dll)."}
            </p>
            <div className={`absolute -bottom-2 right-4 w-4 h-4 ${isTTSOn ? "bg-green-600" : "bg-blue-600"} rotate-45`}></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-4 w-64 mb-2 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-bold text-slate-800 dark:text-white mb-4 border-b pb-2">Aksesibilitas</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2">Visibilitas Layar</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setMode("normal")} className={`text-xs p-2 rounded ${mode === "normal" ? "bg-blue-100 text-blue-700 font-bold" : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`}>Normal</button>
                  <button onClick={() => setMode("grayscale")} className={`text-xs p-2 rounded ${mode === "grayscale" ? "bg-blue-100 text-blue-700 font-bold" : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`}>Abu-abu</button>
                  <button onClick={() => setMode("high-contrast")} className={`text-xs p-2 rounded ${mode === "high-contrast" ? "bg-blue-100 text-blue-700 font-bold" : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`}>Kontras Tinggi</button>
                  <button onClick={() => setMode("negative")} className={`text-xs p-2 rounded ${mode === "negative" ? "bg-blue-100 text-blue-700 font-bold" : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`}>Negatif</button>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2">Pembaca Teks (TTS)</p>

                {/* TTS Toggle */}
                <button
                  onClick={toggleTTS}
                  className={`w-full flex items-center justify-center space-x-2 p-2 rounded transition-all mb-2 ${
                    isTTSOn
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {isTTSOn ? (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span className="text-xs font-semibold">ON - Arahkan ke teks</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span className="text-xs">OFF - Klik untuk hidupkan</span>
                    </>
                  )}
                </button>

                {/* Manual TTS */}
                <button
                  onClick={handleManualTTS}
                  className="w-full flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700 p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-xs">Bacakan Teks Terblok</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 group relative ${
          isTTSOn ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
        aria-label="Aksesibilitas"
      >
        <Eye className="w-6 h-6" />
        {isTTSOn && (
          <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping" />
        )}
        {isTTSOn && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
}
