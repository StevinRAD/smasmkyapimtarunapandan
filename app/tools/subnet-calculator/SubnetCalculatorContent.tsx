"use client";

import { useState } from "react";
import { Network, Calculator, Info, Copy, Check } from "lucide-react";

interface SubnetInfo {
  networkAddress: string;
  broadcastAddress: string;
  firstHost: string;
  lastHost: string;
  numHosts: number;
  wildcard: string;
  subnetMask: string;
  cidr: string;
  ipClass: string;
  ipType: string;
}

export default function SubnetCalculatorContent() {
  const [ipAddress, setIpAddress] = useState("");
  const [cidr, setCidr] = useState("24");
  const [result, setResult] = useState<SubnetInfo | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const calculateSubnet = () => {
    const ipParts = ipAddress.split(".").map(Number);

    if (ipParts.length !== 4 || ipParts.some(isNaN) || ipParts.some(p => p < 0 || p > 255)) {
      alert("Masukkan IP address yang valid (contoh: 192.168.1.1)");
      return;
    }

    const cidrNum = parseInt(cidr);
    if (isNaN(cidrNum) || cidrNum < 0 || cidrNum > 32) {
      alert("CIDR harus antara 0 dan 32");
      return;
    }

    // Calculate subnet mask
    const mask = (0xffffffff << (32 - cidrNum)) >>> 0;
    const maskParts = [
      (mask >>> 24) & 0xff,
      (mask >>> 16) & 0xff,
      (mask >>> 8) & 0xff,
      mask & 0xff
    ];

    // Calculate network address
    const ipNum = (ipParts[0] << 24) + (ipParts[1] << 16) + (ipParts[2] << 8) + ipParts[3];
    const networkNum = (ipNum & mask) >>> 0;
    const networkParts = [
      (networkNum >>> 24) & 0xff,
      (networkNum >>> 16) & 0xff,
      (networkNum >>> 8) & 0xff,
      networkNum & 0xff
    ];

    // Calculate broadcast address
    const wildcard = (~mask) >>> 0;
    const broadcastNum = (networkNum | wildcard) >>> 0;
    const broadcastParts = [
      (broadcastNum >>> 24) & 0xff,
      (broadcastNum >>> 16) & 0xff,
      (broadcastNum >>> 8) & 0xff,
      broadcastNum & 0xff
    ];

    // Calculate first and last host
    const firstHostNum = cidrNum >= 31 ? broadcastNum : (networkNum + 1) >>> 0;
    const lastHostNum = cidrNum >= 31 ? networkNum : (broadcastNum - 1) >>> 0;

    const firstHostParts = [
      (firstHostNum >>> 24) & 0xff,
      (firstHostNum >>> 16) & 0xff,
      (firstHostNum >>> 8) & 0xff,
      firstHostNum & 0xff
    ];

    const lastHostParts = [
      (lastHostNum >>> 24) & 0xff,
      (lastHostNum >>> 16) & 0xff,
      (lastHostNum >>> 8) & 0xff,
      lastHostNum & 0xff
    ];

    // Calculate number of hosts
    const numHosts = cidrNum >= 31 ? Math.pow(2, 32 - cidrNum) : Math.pow(2, 32 - cidrNum) - 2;

    // Determine IP class
    let ipClass = "";
    if (ipParts[0] >= 1 && ipParts[0] <= 126) ipClass = "Class A";
    else if (ipParts[0] >= 128 && ipParts[0] <= 191) ipClass = "Class B";
    else if (ipParts[0] >= 192 && ipParts[0] <= 223) ipClass = "Class C";
    else if (ipParts[0] >= 224 && ipParts[0] <= 239) ipClass = "Class D (Multicast)";
    else if (ipParts[0] >= 240 && ipParts[0] <= 255) ipClass = "Class E (Reserved)";
    else if (ipParts[0] === 127) ipClass = "Loopback";

    // Determine IP type
    const ipType =
      ipParts[0] === 10 ||
      (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) ||
      (ipParts[0] === 192 && ipParts[1] === 168)
        ? "Private"
        : "Public";

    setResult({
      networkAddress: networkParts.join("."),
      broadcastAddress: broadcastParts.join("."),
      firstHost: firstHostParts.join("."),
      lastHost: lastHostParts.join("."),
      numHosts: numHosts,
      wildcard: [wildcard >>> 24, (wildcard >> 16) & 0xff, (wildcard >> 8) & 0xff, wildcard & 0xff].join("."),
      subnetMask: maskParts.join("."),
      cidr: `${cidrNum}`,
      ipClass,
      ipType,
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const reset = () => {
    setIpAddress("");
    setCidr("24");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {/* Info */}
      <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Network className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
              Kalkulator Subnet - TKJ
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Menghitung subnet mask, network address, broadcast address, dan range IP address untuk pembelajaran jaringan komputer.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="card-elevated p-8 mb-8">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-blue-600" />
          Hitung Subnet
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* IP Address */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              IP Address
            </label>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="192.168.1.1"
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-slate-500 mt-1">Format: xxx.xxx.xxx.xxx</p>
          </div>

          {/* CIDR */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              CIDR (Prefix Length)
            </label>
            <select
              value={cidr}
              onChange={(e) => setCidr(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[...Array(33)].map((_, i) => (
                <option key={i} value={i}>
                  /{i} ({i <= 30 ? Math.pow(2, 32 - i) + " total" : i})
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Subnet mask: {Array(4).fill(0).map((_, i) => Math.min(255, (parseInt(cidr) - i * 8) > 0 ? Math.pow(2, Math.max(0, 8 - Math.max(0, parseInt(cidr) - i * 8))) - 1 << (Math.max(0, parseInt(cidr) - i * 8) > 8 ? 0 : Math.max(0, 8 - Math.max(0, parseInt(cidr) - i * 8))) : 0)).join(".")}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={calculateSubnet}
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Hitung Subnet
          </button>

          <button
            onClick={reset}
            className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="card-elevated p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Info className="w-6 h-6" />
            Hasil Perhitungan
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <CopyField label="IP Address" value={ipAddress} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="Network Address" value={result.networkAddress} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="Subnet Mask" value={`${result.subnetMask} (/${result.cidr})`} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="Broadcast Address" value={result.broadcastAddress} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="First Host" value={result.firstHost} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="Last Host" value={result.lastHost} onCopy={copyToClipboard} copied={copied} />
            <CopyField label="Wildcard Mask" value={result.wildcard} onCopy={copyToClipboard} copied={copied} />
            <div className="p-4 bg-white/20 rounded-xl">
              <div className="text-sm opacity-80 mb-1">Usable Hosts</div>
              <div className="text-xl font-bold">{result.numHosts.toLocaleString()}</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm opacity-80">IP Class</div>
                <div className="font-bold">{result.ipClass}</div>
              </div>
              <div>
                <div className="text-sm opacity-80">IP Type</div>
                <div className="font-bold">{result.ipType}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Common Subnets */}
      <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Subnet Umum:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Small Network", cidr: "/24", hosts: "254", mask: "255.255.255.0" },
            { name: "Medium Network", cidr: "/22", hosts: "1,022", mask: "255.255.252.0" },
            { name: "Large Network", cidr: "/16", hosts: "65,534", mask: "255.255.0.0" },
            { name: "Point-to-Point", cidr: "/30", hosts: "2", mask: "255.255.255.252" },
          ].map((subnet, i) => (
            <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl">
              <div className="font-bold text-slate-900 dark:text-white">{subnet.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {subnet.cidr} | {subnet.mask} | {subnet.hosts} hosts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CopyField({ label, value, onCopy, copied }: { label: string; value: string; onCopy: (text: string, label: string) => void; copied: string | null }) {
  return (
    <div className="p-4 bg-white/20 rounded-xl flex items-center justify-between">
      <div>
        <div className="text-sm opacity-80 mb-1">{label}</div>
        <div className="font-mono font-bold">{value}</div>
      </div>
      <button
        onClick={() => onCopy(value, label)}
        className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
      >
        {copied === label ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
}
