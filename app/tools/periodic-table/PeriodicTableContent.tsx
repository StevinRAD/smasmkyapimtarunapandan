"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Atom, X } from "lucide-react";

interface Element {
  number: number;
  symbol: string;
  name: string;
  nameEn: string;
  mass: number;
  category: string;
  period: number;
  group: number | null;
  electronConfig: string;
  electronegativity?: number;
  state: string;
}

const elements: Element[] = [
  // Period 1
  { number: 1, symbol: "H", name: "Hidrogen", nameEn: "Hydrogen", mass: 1.008, category: "nonmetal", period: 1, group: 1, electronConfig: "1s¹", electronegativity: 2.20, state: "gas" },
  { number: 2, symbol: "He", name: "Helium", nameEn: "Helium", mass: 4.003, category: "noble", period: 1, group: 18, electronConfig: "1s²", state: "gas" },
  // Period 2
  { number: 3, symbol: "Li", name: "Litium", nameEn: "Lithium", mass: 6.941, category: "alkali", period: 2, group: 1, electronConfig: "[He] 2s¹", electronegativity: 0.98, state: "solid" },
  { number: 4, symbol: "Be", name: "Berilium", nameEn: "Beryllium", mass: 9.012, category: "alkaline", period: 2, group: 2, electronConfig: "[He] 2s²", electronegativity: 1.57, state: "solid" },
  { number: 5, symbol: "B", name: "Boron", nameEn: "Boron", mass: 10.81, category: "metalloid", period: 2, group: 13, electronConfig: "[He] 2s² 2p¹", electronegativity: 2.04, state: "solid" },
  { number: 6, symbol: "C", name: "Karbon", nameEn: "Carbon", mass: 12.01, category: "nonmetal", period: 2, group: 14, electronConfig: "[He] 2s² 2p²", electronegativity: 2.55, state: "solid" },
  { number: 7, symbol: "N", name: "Nitrogen", nameEn: "Nitrogen", mass: 14.01, category: "nonmetal", period: 2, group: 15, electronConfig: "[He] 2s² 2p³", electronegativity: 3.04, state: "gas" },
  { number: 8, symbol: "O", name: "Oksigen", nameEn: "Oxygen", mass: 16.00, category: "nonmetal", period: 2, group: 16, electronConfig: "[He] 2s² 2p⁴", electronegativity: 3.44, state: "gas" },
  { number: 9, symbol: "F", name: "Fluorin", nameEn: "Fluorine", mass: 19.00, category: "halogen", period: 2, group: 17, electronConfig: "[He] 2s² 2p⁵", electronegativity: 3.98, state: "gas" },
  { number: 10, symbol: "Ne", name: "Neon", nameEn: "Neon", mass: 20.18, category: "noble", period: 2, group: 18, electronConfig: "[He] 2s² 2p⁶", state: "gas" },
  // Period 3
  { number: 11, symbol: "Na", name: "Natrium", nameEn: "Sodium", mass: 22.99, category: "alkali", period: 3, group: 1, electronConfig: "[Ne] 3s¹", electronegativity: 0.93, state: "solid" },
  { number: 12, symbol: "Mg", name: "Magnesium", nameEn: "Magnesium", mass: 24.31, category: "alkaline", period: 3, group: 2, electronConfig: "[Ne] 3s²", electronegativity: 1.31, state: "solid" },
  { number: 13, symbol: "Al", name: "Aluminium", nameEn: "Aluminium", mass: 26.98, category: "post-transition", period: 3, group: 13, electronConfig: "[Ne] 3s² 3p¹", electronegativity: 1.61, state: "solid" },
  { number: 14, symbol: "Si", name: "Silikon", nameEn: "Silicon", mass: 28.09, category: "metalloid", period: 3, group: 14, electronConfig: "[Ne] 3s² 3p²", electronegativity: 1.90, state: "solid" },
  { number: 15, symbol: "P", name: "Fosfor", nameEn: "Phosphorus", mass: 30.97, category: "nonmetal", period: 3, group: 15, electronConfig: "[Ne] 3s² 3p³", electronegativity: 2.19, state: "solid" },
  { number: 16, symbol: "S", name: "Belerang", nameEn: "Sulfur", mass: 32.07, category: "nonmetal", period: 3, group: 16, electronConfig: "[Ne] 3s² 3p⁴", electronegativity: 2.58, state: "solid" },
  { number: 17, symbol: "Cl", name: "Klorin", nameEn: "Chlorine", mass: 35.45, category: "halogen", period: 3, group: 17, electronConfig: "[Ne] 3s² 3p⁵", electronegativity: 3.16, state: "gas" },
  { number: 18, symbol: "Ar", name: "Argon", nameEn: "Argon", mass: 39.95, category: "noble", period: 3, group: 18, electronConfig: "[Ne] 3s² 3p⁶", state: "gas" },
  // Period 4
  { number: 19, symbol: "K", name: "Kalium", nameEn: "Potassium", mass: 39.10, category: "alkali", period: 4, group: 1, electronConfig: "[Ar] 4s¹", electronegativity: 0.82, state: "solid" },
  { number: 20, symbol: "Ca", name: "Kalsium", nameEn: "Calcium", mass: 40.08, category: "alkaline", period: 4, group: 2, electronConfig: "[Ar] 4s²", electronegativity: 1.00, state: "solid" },
  { number: 21, symbol: "Sc", name: "Skandium", nameEn: "Scandium", mass: 44.96, category: "transition", period: 4, group: 3, electronConfig: "[Ar] 3d¹ 4s²", electronegativity: 1.36, state: "solid" },
  { number: 22, symbol: "Ti", name: "Titanium", nameEn: "Titanium", mass: 47.87, category: "transition", period: 4, group: 4, electronConfig: "[Ar] 3d² 4s²", electronegativity: 1.54, state: "solid" },
  { number: 23, symbol: "V", name: "Vanadium", nameEn: "Vanadium", mass: 50.94, category: "transition", period: 4, group: 5, electronConfig: "[Ar] 3d³ 4s²", electronegativity: 1.63, state: "solid" },
  { number: 24, symbol: "Cr", name: "Kromium", nameEn: "Chromium", mass: 52.00, category: "transition", period: 4, group: 6, electronConfig: "[Ar] 3d⁵ 4s¹", electronegativity: 1.66, state: "solid" },
  { number: 25, symbol: "Mn", name: "Mangan", nameEn: "Manganese", mass: 54.94, category: "transition", period: 4, group: 7, electronConfig: "[Ar] 3d⁵ 4s²", electronegativity: 1.55, state: "solid" },
  { number: 26, symbol: "Fe", name: "Besi", nameEn: "Iron", mass: 55.85, category: "transition", period: 4, group: 8, electronConfig: "[Ar] 3d⁶ 4s²", electronegativity: 1.83, state: "solid" },
  { number: 27, symbol: "Co", name: "Kobalt", nameEn: "Cobalt", mass: 58.93, category: "transition", period: 4, group: 9, electronConfig: "[Ar] 3d⁷ 4s²", electronegativity: 1.88, state: "solid" },
  { number: 28, symbol: "Ni", name: "Nikel", nameEn: "Nickel", mass: 58.69, category: "transition", period: 4, group: 10, electronConfig: "[Ar] 3d⁸ 4s²", electronegativity: 1.91, state: "solid" },
  { number: 29, symbol: "Cu", name: "Tembaga", nameEn: "Copper", mass: 63.55, category: "transition", period: 4, group: 11, electronConfig: "[Ar] 3d¹⁰ 4s¹", electronegativity: 1.90, state: "solid" },
  { number: 30, symbol: "Zn", name: "Seng", nameEn: "Zinc", mass: 65.38, category: "transition", period: 4, group: 12, electronConfig: "[Ar] 3d¹⁰ 4s²", electronegativity: 1.65, state: "solid" },
  { number: 31, symbol: "Ga", name: "Galium", nameEn: "Gallium", mass: 69.72, category: "post-transition", period: 4, group: 13, electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹", electronegativity: 1.81, state: "solid" },
  { number: 32, symbol: "Ge", name: "Germanium", nameEn: "Germanium", mass: 72.64, category: "metalloid", period: 4, group: 14, electronConfig: "[Ar] 3d¹⁰ 4s² 4p²", electronegativity: 2.01, state: "solid" },
  { number: 33, symbol: "As", name: "Arsenik", nameEn: "Arsenic", mass: 74.92, category: "metalloid", period: 4, group: 15, electronConfig: "[Ar] 3d¹⁰ 4s² 4p³", electronegativity: 2.18, state: "solid" },
  { number: 34, symbol: "Se", name: "Selenium", nameEn: "Selenium", mass: 78.96, category: "nonmetal", period: 4, group: 16, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", electronegativity: 2.55, state: "solid" },
  { number: 35, symbol: "Br", name: "Bromin", nameEn: "Bromine", mass: 79.90, category: "halogen", period: 4, group: 17, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", electronegativity: 2.96, state: "liquid" },
  { number: 36, symbol: "Kr", name: "Kripton", nameEn: "Krypton", mass: 83.80, category: "noble", period: 4, group: 18, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", state: "gas" },
  // Period 5
  { number: 37, symbol: "Rb", name: "Rubidium", nameEn: "Rubidium", mass: 85.47, category: "alkali", period: 5, group: 1, electronConfig: "[Kr] 5s¹", electronegativity: 0.82, state: "solid" },
  { number: 38, symbol: "Sr", name: "Stronsium", nameEn: "Strontium", mass: 87.62, category: "alkaline", period: 5, group: 2, electronConfig: "[Kr] 5s²", electronegativity: 0.95, state: "solid" },
  { number: 39, symbol: "Y", name: "Itrium", nameEn: "Yttrium", mass: 88.91, category: "transition", period: 5, group: 3, electronConfig: "[Kr] 4d¹ 5s²", electronegativity: 1.22, state: "solid" },
  { number: 40, symbol: "Zr", name: "Zirkonium", nameEn: "Zirconium", mass: 91.22, category: "transition", period: 5, group: 4, electronConfig: "[Kr] 4d² 5s²", electronegativity: 1.33, state: "solid" },
  { number: 41, symbol: "Nb", name: "Niobium", nameEn: "Niobium", mass: 92.91, category: "transition", period: 5, group: 5, electronConfig: "[Kr] 4d⁴ 5s¹", electronegativity: 1.6, state: "solid" },
  { number: 42, symbol: "Mo", name: "Molibdenum", nameEn: "Molybdenum", mass: 95.94, category: "transition", period: 5, group: 6, electronConfig: "[Kr] 4d⁵ 5s¹", electronegativity: 2.16, state: "solid" },
  { number: 43, symbol: "Tc", name: "Teknesium", nameEn: "Technetium", mass: 98.00, category: "transition", period: 5, group: 7, electronConfig: "[Kr] 4d⁵ 5s²", electronegativity: 1.9, state: "solid" },
  { number: 44, symbol: "Ru", name: "Rutenium", nameEn: "Ruthenium", mass: 101.1, category: "transition", period: 5, group: 8, electronConfig: "[Kr] 4d⁷ 5s¹", electronegativity: 2.2, state: "solid" },
  { number: 45, symbol: "Rh", name: "Rhodium", nameEn: "Rhodium", mass: 102.9, category: "transition", period: 5, group: 9, electronConfig: "[Kr] 4d⁸ 5s¹", electronegativity: 2.28, state: "solid" },
  { number: 46, symbol: "Pd", name: "Paladium", nameEn: "Palladium", mass: 106.4, category: "transition", period: 5, group: 10, electronConfig: "[Kr] 4d¹⁰", electronegativity: 2.20, state: "solid" },
  { number: 47, symbol: "Ag", name: "Perak", nameEn: "Silver", mass: 107.9, category: "transition", period: 5, group: 11, electronConfig: "[Kr] 4d¹⁰ 5s¹", electronegativity: 1.93, state: "solid" },
  { number: 48, symbol: "Cd", name: "Kadmium", nameEn: "Cadmium", mass: 112.4, category: "transition", period: 5, group: 12, electronConfig: "[Kr] 4d¹⁰ 5s²", electronegativity: 1.69, state: "solid" },
  { number: 49, symbol: "In", name: "Indium", nameEn: "Indium", mass: 114.8, category: "post-transition", period: 5, group: 13, electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹", electronegativity: 1.78, state: "solid" },
  { number: 50, symbol: "Sn", name: "Timah", nameEn: "Tin", mass: 118.7, category: "post-transition", period: 5, group: 14, electronConfig: "[Kr] 4d¹⁰ 5s² 5p²", electronegativity: 1.96, state: "solid" },
  { number: 51, symbol: "Sb", name: "Antimon", nameEn: "Antimony", mass: 121.8, category: "metalloid", period: 5, group: 15, electronConfig: "[Kr] 4d¹⁰ 5s² 5p³", electronegativity: 2.05, state: "solid" },
  { number: 52, symbol: "Te", name: "Telurium", nameEn: "Tellurium", mass: 127.6, category: "metalloid", period: 5, group: 16, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", electronegativity: 2.1, state: "solid" },
  { number: 53, symbol: "I", name: "Yodium", nameEn: "Iodine", mass: 126.9, category: "halogen", period: 5, group: 17, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", electronegativity: 2.66, state: "solid" },
  { number: 54, symbol: "Xe", name: "Xenon", nameEn: "Xenon", mass: 131.3, category: "noble", period: 5, group: 18, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", state: "gas" },
  // Period 6
  { number: 55, symbol: "Cs", name: "Sesium", nameEn: "Cesium", mass: 132.9, category: "alkali", period: 6, group: 1, electronConfig: "[Xe] 6s¹", electronegativity: 0.79, state: "solid" },
  { number: 56, symbol: "Ba", name: "Barium", nameEn: "Barium", mass: 137.3, category: "alkaline", period: 6, group: 2, electronConfig: "[Xe] 6s²", electronegativity: 0.89, state: "solid" },
  { number: 57, symbol: "La", name: "Lantanum", nameEn: "Lanthanum", mass: 138.9, category: "lanthanide", period: 6, group: 3, electronConfig: "[Xe] 5d¹ 6s²", electronegativity: 1.10, state: "solid" },
  { number: 58, symbol: "Ce", name: "Cerium", nameEn: "Cerium", mass: 140.1, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹ 5d¹ 6s²", electronegativity: 1.12, state: "solid" },
  { number: 59, symbol: "Pr", name: "Praseodimium", nameEn: "Praseodymium", mass: 140.9, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f³ 6s²", electronegativity: 1.13, state: "solid" },
  { number: 60, symbol: "Nd", name: "Neodimium", nameEn: "Neodymium", mass: 144.2, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁴ 6s²", electronegativity: 1.14, state: "solid" },
  { number: 61, symbol: "Pm", name: "Prometium", nameEn: "Promethium", mass: 145.0, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁵ 6s²", electronegativity: 1.13, state: "solid" },
  { number: 62, symbol: "Sm", name: "Samarium", nameEn: "Samarium", mass: 150.4, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁶ 6s²", electronegativity: 1.17, state: "solid" },
  { number: 63, symbol: "Eu", name: "Europium", nameEn: "Europium", mass: 152.0, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁷ 6s²", electronegativity: 1.2, state: "solid" },
  { number: 64, symbol: "Gd", name: "Gadolinium", nameEn: "Gadolinium", mass: 157.3, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁷ 5d¹ 6s²", electronegativity: 1.20, state: "solid" },
  { number: 65, symbol: "Tb", name: "Terbium", nameEn: "Terbium", mass: 158.9, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f⁹ 6s²", electronegativity: 1.2, state: "solid" },
  { number: 66, symbol: "Dy", name: "Dysprosium", nameEn: "Dysprosium", mass: 162.5, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹⁰ 6s²", electronegativity: 1.22, state: "solid" },
  { number: 67, symbol: "Ho", name: "Holmium", nameEn: "Holmium", mass: 164.9, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹¹ 6s²", electronegativity: 1.23, state: "solid" },
  { number: 68, symbol: "Er", name: "Erbium", nameEn: "Erbium", mass: 167.3, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹² 6s²", electronegativity: 1.24, state: "solid" },
  { number: 69, symbol: "Tm", name: "Tulium", nameEn: "Thulium", mass: 168.9, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹³ 6s²", electronegativity: 1.25, state: "solid" },
  { number: 70, symbol: "Yb", name: "Iterbium", nameEn: "Ytterbium", mass: 173.0, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹⁴ 6s²", electronegativity: 1.1, state: "solid" },
  { number: 71, symbol: "Lu", name: "Lutetium", nameEn: "Lutetium", mass: 175.0, category: "lanthanide", period: 6, group: null, electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²", electronegativity: 1.27, state: "solid" },
  { number: 72, symbol: "Hf", name: "Hafnium", nameEn: "Hafnium", mass: 178.5, category: "transition", period: 6, group: 4, electronConfig: "[Xe] 4f¹⁴ 5d² 6s²", electronegativity: 1.3, state: "solid" },
  { number: 73, symbol: "Ta", name: "Tantalum", nameEn: "Tantalum", mass: 180.9, category: "transition", period: 6, group: 5, electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²", electronegativity: 1.5, state: "solid" },
  { number: 74, symbol: "W", name: "Wolfram", nameEn: "Tungsten", mass: 183.8, category: "transition", period: 6, group: 6, electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²", electronegativity: 2.36, state: "solid" },
  { number: 75, symbol: "Re", name: "Renium", nameEn: "Rhenium", mass: 186.2, category: "transition", period: 6, group: 7, electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²", electronegativity: 1.9, state: "solid" },
  { number: 76, symbol: "Os", name: "Osmium", nameEn: "Osmium", mass: 190.2, category: "transition", period: 6, group: 8, electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²", electronegativity: 2.2, state: "solid" },
  { number: 77, symbol: "Ir", name: "Iridium", nameEn: "Iridium", mass: 192.2, category: "transition", period: 6, group: 9, electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²", electronegativity: 2.20, state: "solid" },
  { number: 78, symbol: "Pt", name: "Platinum", nameEn: "Platinum", mass: 195.1, category: "transition", period: 6, group: 10, electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹", electronegativity: 2.28, state: "solid" },
  { number: 79, symbol: "Au", name: "Emas", nameEn: "Gold", mass: 197.0, category: "transition", period: 6, group: 11, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", electronegativity: 2.54, state: "solid" },
  { number: 80, symbol: "Hg", name: "Raksa", nameEn: "Mercury", mass: 200.6, category: "transition", period: 6, group: 12, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", electronegativity: 2.00, state: "liquid" },
  { number: 81, symbol: "Tl", name: "Talium", nameEn: "Thallium", mass: 204.4, category: "post-transition", period: 6, group: 13, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", electronegativity: 1.62, state: "solid" },
  { number: 82, symbol: "Pb", name: "Timbal", nameEn: "Lead", mass: 207.2, category: "post-transition", period: 6, group: 14, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", electronegativity: 2.33, state: "solid" },
  { number: 83, symbol: "Bi", name: "Bismut", nameEn: "Bismuth", mass: 209.0, category: "post-transition", period: 6, group: 15, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", electronegativity: 2.02, state: "solid" },
  { number: 84, symbol: "Po", name: "Polonium", nameEn: "Polonium", mass: 209.0, category: "metalloid", period: 6, group: 16, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", electronegativity: 2.0, state: "solid" },
  { number: 85, symbol: "At", name: "Astatin", nameEn: "Astatine", mass: 210.0, category: "halogen", period: 6, group: 17, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", electronegativity: 2.2, state: "solid" },
  { number: 86, symbol: "Rn", name: "Radon", nameEn: "Radon", mass: 222.0, category: "noble", period: 6, group: 18, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state: "gas" },
  // Period 7
  { number: 87, symbol: "Fr", name: "Fransium", nameEn: "Francium", mass: 223.0, category: "alkali", period: 7, group: 1, electronConfig: "[Rn] 7s¹", electronegativity: 0.7, state: "solid" },
  { number: 88, symbol: "Ra", name: "Radium", nameEn: "Radium", mass: 226.0, category: "alkaline", period: 7, group: 2, electronConfig: "[Rn] 7s²", electronegativity: 0.9, state: "solid" },
  { number: 89, symbol: "Ac", name: "Aktinium", nameEn: "Actinium", mass: 227.0, category: "actinide", period: 7, group: 3, electronConfig: "[Rn] 6d¹ 7s²", electronegativity: 1.1, state: "solid" },
  { number: 90, symbol: "Th", name: "Torium", nameEn: "Thorium", mass: 232.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 6d² 7s²", electronegativity: 1.3, state: "solid" },
  { number: 91, symbol: "Pa", name: "Protaktinium", nameEn: "Protactinium", mass: 231.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f² 6d¹ 7s²", electronegativity: 1.5, state: "solid" },
  { number: 92, symbol: "U", name: "Uranium", nameEn: "Uranium", mass: 238.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f³ 6d¹ 7s²", electronegativity: 1.38, state: "solid" },
  { number: 93, symbol: "Np", name: "Neptunium", nameEn: "Neptunium", mass: 237.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f⁴ 6d¹ 7s²", electronegativity: 1.36, state: "solid" },
  { number: 94, symbol: "Pu", name: "Plutonium", nameEn: "Plutonium", mass: 244.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f⁶ 7s²", electronegativity: 1.28, state: "solid" },
  { number: 95, symbol: "Am", name: "Amerisium", nameEn: "Americium", mass: 243.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f⁷ 7s²", electronegativity: 1.13, state: "solid" },
  { number: 96, symbol: "Cm", name: "Kurium", nameEn: "Curium", mass: 247.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f⁷ 6d¹ 7s²", electronegativity: 1.28, state: "solid" },
  { number: 97, symbol: "Bk", name: "Berkelium", nameEn: "Berkelium", mass: 247.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f⁹ 7s²", electronegativity: 1.3, state: "solid" },
  { number: 98, symbol: "Cf", name: "Kalifornium", nameEn: "Californium", mass: 251.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹⁰ 7s²", electronegativity: 1.3, state: "solid" },
  { number: 99, symbol: "Es", name: "Einsteinium", nameEn: "Einsteinium", mass: 252.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹¹ 7s²", electronegativity: 1.3, state: "solid" },
  { number: 100, symbol: "Fm", name: "Fermium", nameEn: "Fermium", mass: 257.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹² 7s²", electronegativity: 1.3, state: "solid" },
  { number: 101, symbol: "Md", name: "Mendelevium", nameEn: "Mendelevium", mass: 258.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹³ 7s²", electronegativity: 1.3, state: "solid" },
  { number: 102, symbol: "No", name: "Nobelium", nameEn: "Nobelium", mass: 259.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹⁴ 7s²", electronegativity: 1.3, state: "solid" },
  { number: 103, symbol: "Lr", name: "Lawrensium", nameEn: "Lawrencium", mass: 266.0, category: "actinide", period: 7, group: null, electronConfig: "[Rn] 5f¹⁴ 7s² 7p¹", electronegativity: 1.3, state: "solid" },
  { number: 104, symbol: "Rf", name: "Ruterfordium", nameEn: "Rutherfordium", mass: 267.0, category: "transition", period: 7, group: 4, electronConfig: "[Rn] 5f¹⁴ 6d² 7s²", state: "solid" },
  { number: 105, symbol: "Db", name: "Dubnium", nameEn: "Dubnium", mass: 268.0, category: "transition", period: 7, group: 5, electronConfig: "[Rn] 5f¹⁴ 6d³ 7s²", state: "solid" },
  { number: 106, symbol: "Sg", name: "Seaborgium", nameEn: "Seaborgium", mass: 269.0, category: "transition", period: 7, group: 6, electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²", state: "solid" },
  { number: 107, symbol: "Bh", name: "Bohrium", nameEn: "Bohrium", mass: 270.0, category: "transition", period: 7, group: 7, electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²", state: "solid" },
  { number: 108, symbol: "Hs", name: "Hasium", nameEn: "Hassium", mass: 277.0, category: "transition", period: 7, group: 8, electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²", state: "solid" },
  { number: 109, symbol: "Mt", name: "Meitnerium", nameEn: "Meitnerium", mass: 278.0, category: "transition", period: 7, group: 9, electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²", state: "solid" },
  { number: 110, symbol: "Ds", name: "Darmstadtium", nameEn: "Darmstadtium", mass: 281.0, category: "transition", period: 7, group: 10, electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s¹", state: "solid" },
  { number: 111, symbol: "Rg", name: "Roentgenium", nameEn: "Roentgenium", mass: 282.0, category: "transition", period: 7, group: 11, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", state: "solid" },
  { number: 112, symbol: "Cn", name: "Kopernisium", nameEn: "Copernicium", mass: 285.0, category: "transition", period: 7, group: 12, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", state: "solid" },
  { number: 113, symbol: "Nh", name: "Nihonium", nameEn: "Nihonium", mass: 286.0, category: "post-transition", period: 7, group: 13, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state: "solid" },
  { number: 114, symbol: "Fl", name: "Flerovium", nameEn: "Flerovium", mass: 289.0, category: "post-transition", period: 7, group: 14, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state: "solid" },
  { number: 115, symbol: "Mc", name: "Moscovium", nameEn: "Moscovium", mass: 290.0, category: "post-transition", period: 7, group: 15, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state: "solid" },
  { number: 116, symbol: "Lv", name: "Livermorium", nameEn: "Livermorium", mass: 293.0, category: "post-transition", period: 7, group: 16, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state: "solid" },
  { number: 117, symbol: "Ts", name: "Tenessin", nameEn: "Tennessine", mass: 294.0, category: "halogen", period: 7, group: 17, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state: "solid" },
  { number: 118, symbol: "Og", name: "Oganeson", nameEn: "Oganesson", mass: 294.0, category: "noble", period: 7, group: 18, electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state: "solid" },
];

const categoryColors: Record<string, { bg: string; hover: string; text: string; border: string }> = {
  alkali: { bg: "bg-red-500", hover: "hover:bg-red-600", text: "text-red-600", border: "border-red-500" },
  alkaline: { bg: "bg-orange-500", hover: "hover:bg-orange-600", text: "text-orange-600", border: "border-orange-500" },
  transition: { bg: "bg-yellow-500", hover: "hover:bg-yellow-600", text: "text-yellow-600", border: "border-yellow-500" },
  "post-transition": { bg: "bg-yellow-400", hover: "hover:bg-yellow-500", text: "text-yellow-500", border: "border-yellow-400" },
  metalloid: { bg: "bg-green-500", hover: "hover:bg-green-600", text: "text-green-600", border: "border-green-500" },
  nonmetal: { bg: "bg-blue-500", hover: "hover:bg-blue-600", text: "text-blue-600", border: "border-blue-500" },
  halogen: { bg: "bg-purple-500", hover: "hover:bg-purple-600", text: "text-purple-600", border: "border-purple-500" },
  noble: { bg: "bg-pink-500", hover: "hover:bg-pink-600", text: "text-pink-600", border: "border-pink-500" },
  lanthanide: { bg: "bg-emerald-500", hover: "hover:bg-emerald-600", text: "text-emerald-600", border: "border-emerald-500" },
  actinide: { bg: "bg-teal-500", hover: "hover:bg-teal-600", text: "text-teal-600", border: "border-teal-500" },
};

const categoryNames: Record<string, string> = {
  alkali: "Logam Alkali",
  alkaline: "Logam Alkali Tanah",
  transition: "Logam Transisi",
  "post-transition": "Logam Pasca Transisi",
  metalloid: "Metalloid",
  nonmetal: "Non-logam",
  halogen: "Halogen",
  noble: "Gas Mulia",
  lanthanide: "Lantanida",
  actinide: "Aktinida",
};

const stateIcons: Record<string, string> = {
  solid: "●",
  liquid: "◐",
  gas: "○",
};

export default function PeriodicTableContent() {
  const [selected, setSelected] = useState<Element | null>(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  // Build grid layout
  const gridLayout = useMemo(() => {
    const grid: (Element | null)[][] = [];
    const maxPeriod = 7;
    const maxGroup = 18;

    for (let period = 1; period <= maxPeriod; period++) {
      const row: (Element | null)[] = [];
      for (let group = 1; group <= maxGroup; group++) {
        const element = elements.find(el => el.period === period && el.group === group);
        row.push(element || null);
      }
      grid.push(row);
    }
    return grid;
  }, []);

  const lanthanides = elements.filter(el => el.category === "lanthanide");
  const actinides = elements.filter(el => el.category === "actinide");

  const filteredElements = useMemo(() => {
    let result = elements;

    if (search) {
      result = result.filter(el =>
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.symbol.toLowerCase().includes(search.toLowerCase()) ||
        el.number.toString().includes(search)
      );
    }

    if (filterCategory) {
      result = result.filter(el => el.category === filterCategory);
    }

    return result;
  }, [search, filterCategory]);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Search & Filter Bar */}
      <div className="sticky top-20 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari unsur (nama, simbol, nomor)..."
                className="w-full pl-10 pr-10 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Category */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCategory(null)}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                  !filterCategory
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                }`}
              >
                Semua ({elements.length})
              </button>
              {Object.entries(categoryNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setFilterCategory(key)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                    filterCategory === key
                      ? `${categoryColors[key].bg} text-white shadow-lg`
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Periodic Table */}
          {!search && !filterCategory ? (
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Main Table */}
                <div className="space-y-1">
                  {gridLayout.map((row, periodIndex) => (
                    <div key={periodIndex} className="flex gap-1">
                      {/* Period Number */}
                      <div className="w-8 flex items-center justify-center text-xs font-bold text-slate-400">
                        {periodIndex + 1}
                      </div>
                      {/* Elements */}
                      {row.map((element, groupIndex) => {
                        if (!element) {
                          return (
                            <div
                              key={`empty-${periodIndex}-${groupIndex}`}
                              className="flex-1 min-w-[45px] h-[60px]"
                            />
                          );
                        }

                        const colors = categoryColors[element.category];
                        return (
                          <motion.button
                            key={element.number}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelected(element)}
                            className={`flex-1 min-w-[45px] h-[60px] p-1 rounded text-white font-bold transition-all ${colors.bg} ${colors.hover} ${
                              selected?.number === element.number ? "ring-2 ring-white ring-offset-2" : ""
                            }`}
                          >
                            <div className="text-[10px] opacity-80">{element.number}</div>
                            <div className="text-sm md:text-lg leading-none">{element.symbol}</div>
                            <div className="text-[8px] opacity-80 truncate hidden md:block">{element.name}</div>
                          </motion.button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Lanthanides */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">57-71</span>
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Lantanida</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8" />
                    {lanthanides.map((element) => {
                      const colors = categoryColors[element.category];
                      return (
                        <motion.button
                          key={element.number}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelected(element)}
                          className={`flex-1 min-w-[45px] h-[60px] p-1 rounded text-white font-bold transition-all ${colors.bg} ${colors.hover} ${
                            selected?.number === element.number ? "ring-2 ring-white ring-offset-2" : ""
                          }`}
                        >
                          <div className="text-[10px] opacity-80">{element.number}</div>
                          <div className="text-sm md:text-lg leading-none">{element.symbol}</div>
                          <div className="text-[8px] opacity-80 truncate hidden md:block">{element.name}</div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Actinides */}
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">89-103</span>
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Aktinida</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8" />
                    {actinides.map((element) => {
                      const colors = categoryColors[element.category];
                      return (
                        <motion.button
                          key={element.number}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelected(element)}
                          className={`flex-1 min-w-[45px] h-[60px] p-1 rounded text-white font-bold transition-all ${colors.bg} ${colors.hover} ${
                            selected?.number === element.number ? "ring-2 ring-white ring-offset-2" : ""
                          }`}
                        >
                          <div className="text-[10px] opacity-80">{element.number}</div>
                          <div className="text-sm md:text-lg leading-none">{element.symbol}</div>
                          <div className="text-[8px] opacity-80 truncate hidden md:block">{element.name}</div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Filtered Results */
            <div>
              <div className="text-center mb-6">
                <p className="text-slate-600 dark:text-slate-400">
                  {search || filterCategory ? (
                    <>
                      {filteredElements.length} unsur ditemukan
                      {filterCategory && <span> untuk kategori <strong>{categoryNames[filterCategory]}</strong></span>}
                      {search && <span> untuk <strong>"{search}"</strong></span>}
                    </>
                  ) : null}
                </p>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {filteredElements.map((element) => {
                  const colors = categoryColors[element.category];
                  return (
                    <motion.button
                      key={element.number}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelected(element)}
                      className={`p-2 rounded text-white font-bold transition-all ${colors.bg} ${colors.hover} ${
                        selected?.number === element.number ? "ring-2 ring-white ring-offset-2" : ""
                      }`}
                    >
                      <div className="text-xs opacity-80">{element.number}</div>
                      <div className="text-lg">{element.symbol}</div>
                      <div className="text-[10px] opacity-80 truncate">{element.name}</div>
                    </motion.button>
                  );
                })}
              </div>

              {filteredElements.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Tidak ada unsur ditemukan
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Coba kata kunci atau kategori lain
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Selected Element Detail Modal */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-2xl w-full"
                >
                  <div className={`card-elevated overflow-hidden ${categoryColors[selected.category].bg} text-white`}>
                    {/* Header */}
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Nomor Atom</div>
                          <div className="text-5xl font-black">{selected.number}</div>
                        </div>
                        <button
                          onClick={() => setSelected(null)}
                          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="text-center my-6">
                        <div className="text-7xl md:text-9xl font-black mb-2">{selected.symbol}</div>
                        <div className="text-2xl md:text-3xl font-bold">{selected.name}</div>
                        <div className="text-sm opacity-80">{selected.nameEn}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Massa Atom</div>
                          <div className="text-2xl font-bold">{selected.mass} u</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-80 mb-1">Fase</div>
                          <div className="text-2xl font-bold flex items-center gap-2">
                            <span>{stateIcons[selected.state]}</span>
                            {selected.state === "solid" ? "Padat" : selected.state === "liquid" ? "Cair" : "Gas"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white/10 p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-xl">
                          <div className="text-sm opacity-80 mb-1">Kategori</div>
                          <div className="font-bold">{categoryNames[selected.category]}</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl">
                          <div className="text-sm opacity-80 mb-1">Periode & Golongan</div>
                          <div className="font-bold">Periode {selected.period}{selected.group ? `, Golongan ${selected.group}` : ""}</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl md:col-span-2">
                          <div className="text-sm opacity-80 mb-1">Konfigurasi Elektron</div>
                          <div className="font-bold font-mono text-sm">{selected.electronConfig}</div>
                        </div>
                        {selected.electronegativity && (
                          <div className="bg-white/10 p-4 rounded-xl">
                            <div className="text-sm opacity-80 mb-1">Elektronegativitas</div>
                            <div className="font-bold">{selected.electronegativity} (Pauling)</div>
                          </div>
                        )}
                        <div className="bg-white/10 p-4 rounded-xl">
                          <div className="text-sm opacity-80 mb-1">Keadaan Standar</div>
                          <div className="font-bold">{selected.state === "solid" ? "Padat" : selected.state === "liquid" ? "Cair" : "Gas"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Kategori Unsur</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(categoryNames).map(([key, name]) => {
                const colors = categoryColors[key];
                return (
                  <div key={key} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <div className={`w-6 h-6 rounded ${colors.bg}`}></div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            Tabel Periodik lengkap dengan 118 unsur. Klik pada unsur untuk detail lebih lanjut.
          </div>
        </div>
      </section>
    </div>
  );
}
