import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal, Activity, Server, Shield, HardDrive, Cpu, Network,
  AlertCircle, CheckCircle2, ChevronRight, Monitor, BookOpen,
  Wrench, Mail, Clock, ShieldAlert, Zap, Lock, Code, Database,
  Menu, X, ShieldCheck, Users, FileCode2
} from "lucide-react";

// --- CORE SYSTEM DATA ---
const SYS_DATA = {
  engineer: {
    name: "Macharia Joseph Chiori",
    designation: "Multi-Disciplinary IT Systems Engineer",
    base: "Nairobi, Kenya",
    education: "Kiambu National Polytechnic and Cisco Networking academy",
    status: "ONLINE",
    clearance: "Level 9 - Admin"
  },
  metrics: {
    uptime: "99.998%",
    activeServices: 42,
    ticketsResolved: 1205,
    avgResponse: "12ms"
  }
};

const INCIDENT_REPORTS = [
  {
    id: "INC-2026-05A",
    title: "Financial Data OCR Extraction Pipeline",
    status: "RESOLVED",
    severity: "HIGH",
    category: "Automation / Data Processing",
    problem: "Previous extraction models were guessing missing values and adding unverified columns to multi-page bank statements.",
    diagnostic: "Analyzed OCR output layers. Found inference engine compensating for scan noise.",
    solution: "Implemented strict zero-inference data extraction protocol. Enforced exact 1-to-1 table conversion (TRANS DATE, DEBIT, REMARKS) with strict exclusion of unverified page columns.",
    outcome: "100% extraction accuracy achieved. Zero data hallucination.",
    tech: ["Python", "OCR", "Regex", "Data Automation"]
  },
  {
    id: "INC-2025-11B",
    title: "Hardware Form Factor Optimization",
    status: "DEPLOYED",
    severity: "MEDIUM",
    category: "Hardware Diagnostics",
    problem: "Client required portability without compromising dual-pane workflow visibility.",
    diagnostic: "Comparative physical and thermal diagnostic between 13.3-inch and 14-inch display architectures.",
    solution: "Deployed 14-inch chassis with optimized scaling. Calibrated display drivers for maximum screen real estate. Printer Diagnosis. Computer Servicing and Software updates. Account Password reset",
    outcome: "Increased user productivity by 22% with negligible footprint increase.",
    tech: ["Hardware Analytics", "Display Calibration", "Ergonomics"]
  },
  {
    id: "INC-2024-08C",
    title: "Enterprise Web Infrastructure Deployment",
    status: "RESOLVED",
    severity: "CRITICAL",
    category: "Web Ops / Hosting",
    problem: "Legacy hosting environment suffered from SSL dropouts and high latency in East Africa region.",
    diagnostic: "Traced packet loss to inefficient routing and expired certificate chains.",
    solution: "Migrated to high-availability servers. Automated SSL renewal via InfinityFree integrations. Deployed React/Node.js stack with optimized caching.",
    outcome: "Zero-downtime deployment. Latency reduced by 64%.",
    tech: ["React", "Node.js", "SSL", "Server Admin"]
  }
];

// --- COMPONENTS ---

// 1. Navigation Pane (Responsive Sidebar)
const Sidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  const navItems = [
    { id: "overview", label: "System Overview", icon: Activity },
    { id: "profile", label: "Engineer Profile", icon: Terminal },
    { id: "incidents", label: "Incident Reports", icon: AlertCircle },
    { id: "hardware", label: "Hardware & Diagnostics", icon: Cpu },
    { id: "security", label: "Security & Audits", icon: ShieldAlert },
    { id: "tutoring", label: "Training Hub", icon: BookOpen },
    { id: "support", label: "Support Console", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false); // Close menu on mobile after selection
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col h-full z-50`}>
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="font-mono text-sm font-bold text-zinc-300 tracking-wider">SYS_CTRL_NODE</span>
          </div>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-zinc-400 hover:text-zinc-100">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 py-4 flex flex-col gap-1 px-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-mono text-xs transition-all duration-200 ${
                  isActive 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[inset_0_0_12px_rgba(16,185,129,0.1)]" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                }`}
              >
                <Icon size={16} className={isActive ? "text-emerald-400" : "text-zinc-600"} />
                {item.label}
                {isActive && <ChevronRight size={14} className="ml-auto opacity-50" />}
              </button>
            );
          })}
        </div>
        <div className="p-4 border-t border-zinc-800">
          <div className="text-[10px] font-mono text-zinc-600 space-y-1">
            <p>OPR: {SYS_DATA.engineer.name}</p>
            <p>LOC: {SYS_DATA.engineer.base}</p>
            <p>STATUS: <span className="text-emerald-500">SECURE</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

// 2. System Overview Module
const SystemOverview = () => {
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto space-y-6">
      <header className="mb-6 md:mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <Activity className="text-emerald-500" /> LIVE SYSTEMS OVERVIEW
        </h1>
        <p className="text-zinc-500 font-mono text-xs md:text-sm mt-2">Real-time infrastructure and operations telemetry.</p>
      </header>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "SYS_UPTIME", value: SYS_DATA.metrics.uptime, icon: Clock, color: "text-emerald-400", border: "border-emerald-500/30" },
          { label: "ACTIVE_NODES", value: SYS_DATA.metrics.activeServices, icon: Server, color: "text-cyan-400", border: "border-cyan-500/30" },
          { label: "RESOLVED_INCIDENTS", value: SYS_DATA.metrics.ticketsResolved, icon: CheckCircle2, color: "text-zinc-300", border: "border-zinc-700" },
          { label: "NETWORK_LATENCY", value: SYS_DATA.metrics.avgResponse, icon: Network, color: "text-amber-400", border: "border-amber-500/30" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={i} 
            className={`bg-zinc-950 border ${stat.border} p-4 rounded-lg relative overflow-hidden`}
          >
            <div className="absolute -right-4 -top-4 opacity-5"><stat.icon size={80} /></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest">{stat.label}</span>
              <stat.icon size={14} className={stat.color} />
            </div>
            <div className={`text-2xl md:text-3xl font-mono font-bold ${stat.color}`}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Animated Architecture Map */}
      <div className="border border-zinc-800 bg-zinc-950 p-4 md:p-6 rounded-lg relative overflow-hidden mt-6 overflow-x-auto">
        <h3 className="font-mono text-xs text-zinc-400 mb-6 flex items-center gap-2">
          <Network size={14} /> ARCHITECTURE TOPOLOGY
        </h3>
        <div className="flex items-center justify-between relative h-32 min-w-125 max-w-3xl mx-auto px-4">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-linear-to-r from-transparent via-emerald-500 to-transparent w-32 opacity-50"
              animate={{ x: [-100, 800] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
          
          {/* Nodes */}
          {[
            { label: "CLIENT_REQ", icon: Monitor },
            { label: "LOAD_BALANCER", icon: Network },
            { label: "REACT_UI", icon: Code },
            { label: "NODE_API", icon: Server },
            { label: "DATA_LAKE", icon: Database }
          ].map((node, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <node.icon size={20} className="text-zinc-300" />
              </div>
              <span className="text-[9px] font-mono text-zinc-500 text-center">{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Engineer Profile (Terminal Style + Image)
const EngineerProfile = () => {
  return (
    <div className="p-4 md:p-6 h-full flex flex-col">
      <header className="mb-6 border-b border-zinc-800 pb-4">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <Terminal className="text-cyan-500" /> WHOAMI
        </h1>
      </header>

      <div className="flex-1 bg-black border border-zinc-800 rounded-lg p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-emerald-500 opacity-20" />
        
        <p className="text-zinc-400 mb-4">$ sysinfo --user Chiori --format extended</p>
        
        <div className="flex flex-col md:flex-row gap-8 mt-6 items-center md:items-start">
          
          {/* PROFILE IMAGE*/}
          <div className="relative group shrink-0">
            <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              src="/profile.png" 
              alt={SYS_DATA.engineer.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-emerald-500 object-cover" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Macharia+Joseph+Chiori&background=0D1117&color=10B981&size=200"; // Fallback if image is missing
              }}
            />
          </div>

          <div className="text-zinc-300 space-y-2 flex-1 w-full text-center md:text-left">
            <p><span className="text-cyan-400 font-bold">OP_NAME:</span>   {SYS_DATA.engineer.name}</p>
            <p><span className="text-cyan-400 font-bold">ROLE:</span>      {SYS_DATA.engineer.designation}</p>
            <p><span className="text-cyan-400 font-bold">BASE:</span>      {SYS_DATA.engineer.base}</p>
            <p><span className="text-cyan-400 font-bold">POLY_INST:</span> {SYS_DATA.engineer.education}</p>
            <br className="hidden md:block" />
            <div className="w-full h-px bg-zinc-800 my-4 md:hidden"></div>
            <p className="text-zinc-500">----------- SKILL MATRIX -----------</p>
            <div className="space-y-2 text-left bg-zinc-950 p-4 rounded border border-zinc-800/50 mt-2">
              <p><span className="text-emerald-400 font-bold block md:inline">DEV_STACK:</span>  React, Next.js, Node.js, Python, Tailwind</p>
              <p><span className="text-emerald-400 font-bold block md:inline">INFRA:</span>      Windows 11 Mult-v, Office 2021, InfinityFree, SSL</p>
              <p><span className="text-emerald-400 font-bold block md:inline">HARDWARE:</span>   Component Diagnostics, Screen Form Factor Analytics</p>
              <p><span className="text-emerald-400 font-bold block md:inline">DATA_OPS:</span>   High-Precision OCR, Table Formatting, Zero-Inference</p>
              <p><span className="text-emerald-400 font-bold block md:inline">EDU_OPS:</span>    IT Tutoring, Programming Workflows, Support</p>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 mt-8 mb-2">$ cat /var/log/clearance.log</p>
        <p className="text-amber-400 bg-amber-500/5 p-3 border-l-2 border-amber-500"> Authorized to execute remote support, automate deployment pipelines, and configure network topologies. No unauthorized data extrapolation permitted.</p>
        
        <div className="mt-8 flex items-center gap-2 text-zinc-500">
          <span className="text-emerald-500 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

// 4. Incident Reports (Case Studies)
const IncidentReports = () => {
  const [selectedIncident, setSelectedIncident] = useState(INCIDENT_REPORTS[0]);

  return (
    <div className="p-4 md:p-6 h-full flex flex-col">
      <header className="mb-4 md:mb-6 border-b border-zinc-800 pb-4">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <AlertCircle className="text-amber-500" /> INCIDENT / CASE LOGS
        </h1>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden">
        {/* Ticket List */}
        <div className="w-full lg:w-1/3 border border-zinc-800 bg-zinc-950 rounded-lg overflow-y-auto custom-scrollbar flex flex-col max-h-[40vh] lg:max-h-full shrink-0">
          <div className="p-3 border-b border-zinc-800 bg-zinc-900/50 text-[10px] font-mono text-zinc-500 sticky top-0 backdrop-blur">
            TICKET_QUEUE (DESC)
          </div>
          {INCIDENT_REPORTS.map((inc) => (
            <button
              key={inc.id}
              onClick={() => setSelectedIncident(inc)}
              className={`p-4 border-b border-zinc-800/50 text-left transition-colors flex flex-col gap-2 ${
                selectedIncident.id === inc.id ? "bg-zinc-900 border-l-2 border-l-emerald-500" : "hover:bg-zinc-900/50 border-l-2 border-l-transparent"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-mono text-cyan-400">{inc.id}</span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                  inc.status === "RESOLVED" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                }`}>
                  {inc.status}
                </span>
              </div>
              <span className="text-sm text-zinc-300 font-semibold truncate">{inc.title}</span>
            </button>
          ))}
        </div>

        {/* Ticket Details */}
        <div className="flex-1 border border-zinc-800 bg-black rounded-lg p-4 md:p-6 overflow-y-auto custom-scrollbar font-mono text-sm relative">
          <div className="absolute top-4 right-4 opacity-5 pointer-events-none hidden sm:block">
            <Shield size={100} />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
            <Wrench className="text-zinc-500 hidden sm:block" />
            <h2 className="text-lg md:text-xl text-zinc-100">{selectedIncident.title}</h2>
          </div>

          <div className="space-y-6 text-zinc-300 relative z-10">
            <div>
              <h4 className="text-amber-500 text-xs mb-1"> DETECTED_PROBLEM</h4>
              <p className="bg-zinc-900/50 p-3 border-l-2 border-amber-500/50 rounded-r-md text-xs md:text-sm">{selectedIncident.problem}</p>
            </div>
            
            <div>
              <h4 className="text-cyan-500 text-xs mb-1"> DIAGNOSTIC_PROCESS</h4>
              <p className="bg-zinc-900/50 p-3 border-l-2 border-cyan-500/50 rounded-r-md text-xs md:text-sm">{selectedIncident.diagnostic}</p>
            </div>

            <div>
              <h4 className="text-emerald-500 text-xs mb-1"> DEPLOYED_SOLUTION</h4>
              <p className="bg-zinc-900/50 p-3 border-l-2 border-emerald-500/50 rounded-r-md text-xs md:text-sm">{selectedIncident.solution}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="border border-zinc-800 p-4 rounded bg-zinc-950">
                <h4 className="text-zinc-500 text-[10px] mb-2">OUTCOME_METRICS</h4>
                <p className="text-zinc-300 text-xs">{selectedIncident.outcome}</p>
              </div>
              <div className="border border-zinc-800 p-4 rounded bg-zinc-950">
                <h4 className="text-zinc-500 text-[10px] mb-2">TOOLS_USED</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIncident.tech.map(t => (
                    <span key={t} className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Hardware Diagnostics
const HardwareDiagnostics = () => {
  return (
    <div className="p-4 md:p-6 h-full flex flex-col overflow-y-auto">
      <header className="mb-6 border-b border-zinc-800 pb-4 shrink-0">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <HardDrive className="text-blue-500" /> HARDWARE & DIAGNOSTICS
        </h1>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <div className="border border-zinc-800 bg-zinc-950 rounded-lg p-4 md:p-6 font-mono">
          <h3 className="text-zinc-400 text-xs mb-6 flex items-center gap-2"><Cpu size={14}/> SYSTEM BENCH TELEMETRY</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-zinc-300">CPU Thermal Load</span>
                <span className="text-amber-400">62°C</span>
              </div>
              <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div className="h-full bg-amber-500" initial={{ width: 0 }} animate={{ width: "62%" }} transition={{ duration: 1 }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-zinc-300">RAM Integrity Test</span>
                <span className="text-emerald-400">PASS</span>
              </div>
              <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-zinc-300">Storage I/O (SSD Health)</span>
                <span className="text-cyan-400">98% OPTIMAL</span>
              </div>
              <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div className="h-full bg-cyan-500" initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ duration: 1.2 }} />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-800 bg-black rounded-lg p-4 md:p-6 font-mono relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />
          <h3 className="text-zinc-400 text-xs mb-4 flex items-center gap-2"><Monitor size={14}/> REPAIR & MOD WORKFLOWS</h3>
          <ul className="space-y-3 text-xs text-zinc-300 relative z-10">
            <li className="flex items-start gap-3 p-3 hover:bg-zinc-900 rounded transition-colors border-l-2 border-zinc-800 hover:border-blue-500">
              <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-zinc-200">Laptop Form Factor Scaling</p>
                <p className="text-zinc-500 mt-1">Analyzing 13.3" vs 14" chassis dimensions for optimal screen-to-body ratios and thermal dissipation.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 hover:bg-zinc-900 rounded transition-colors border-l-2 border-zinc-800 hover:border-blue-500">
              <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-zinc-200">OS Provisioning & Driver Config</p>
                <p className="text-zinc-500 mt-1">Windows 11 base image deployment via SCCM/Intune with pre-configured Office 2021 setups.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 hover:bg-zinc-900 rounded transition-colors border-l-2 border-zinc-800 hover:border-blue-500">
              <Activity size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-zinc-200">Component Level Troubleshooting</p>
                <p className="text-zinc-500 mt-1">Identifying localized short circuits and motherboard power rail failures.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 6. Security & Audits (NEW)
const SecurityAudits = () => {
  return (
    <div className="p-4 md:p-6 h-full flex flex-col overflow-y-auto">
      <header className="mb-6 border-b border-zinc-800 pb-4 shrink-0">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <ShieldAlert className="text-red-500" /> SECURITY & AUDITS
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
        {/* Network Firewall Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-lg font-mono">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">DEFCON LEVEL</span>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] rounded border border-emerald-500/20">NORMAL</span>
            </div>
            <div className="flex justify-center py-6">
              <div className="relative flex items-center justify-center">
                <ShieldCheck size={80} className="text-emerald-500 opacity-20 absolute" />
                <span className="text-4xl font-bold text-zinc-100 relative z-10">99.8<span className="text-lg text-zinc-500">%</span></span>
              </div>
            </div>
            <p className="text-center text-[10px] text-zinc-500 mt-2">SYSTEM INTEGRITY SCORE</p>
          </div>

          <div className="bg-black border border-zinc-800 p-5 rounded-lg font-mono text-xs">
            <h3 className="text-zinc-400 mb-3 flex items-center gap-2"><Lock size={14}/> ACTIVE PROTOCOLS</h3>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex justify-between"><span>SSL/TLS ENCRYPTION</span> <span className="text-emerald-400">ACTIVE</span></li>
              <li className="flex justify-between"><span>PORT 22 (SSH)</span> <span className="text-amber-400">RESTRICTED</span></li>
              <li className="flex justify-between"><span>DDoS MITIGATION</span> <span className="text-emerald-400">ROUTED</span></li>
              <li className="flex justify-between"><span>OCR PIPELINE AUTH</span> <span className="text-emerald-400">SECURE</span></li>
            </ul>
          </div>
        </div>

        {/* Live Threat Log */}
        <div className="lg:col-span-2 bg-black border border-zinc-800 rounded-lg p-5 font-mono flex flex-col">
          <h3 className="text-xs text-zinc-400 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
            <Server size={14}/> FIREWALL TRAFFIC LOG (TAIL -F)
          </h3>
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2 text-[11px] bg-zinc-950 p-4 rounded border border-zinc-800/50 h-64 lg:h-auto">
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">11:41:02</span> <span>[INFO]</span> <span className="text-zinc-300">Auth success for admin_chiori from 192.168.1.104</span></div>
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">11:38:15</span> <span>[WARN]</span> <span className="text-amber-400">Multiple failed login attempts detected on port 21</span></div>
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">11:38:16</span> <span>[ACTN]</span> <span className="text-emerald-400">IP 45.33.xx.xx auto-banned for 24 hours.</span></div>
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">11:15:00</span> <span>[INFO]</span> <span className="text-zinc-300">Automated backup script completed. (Size: 4.2GB)</span></div>
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">10:59:44</span> <span>[INFO]</span> <span className="text-zinc-300">SSL Certificate renewed via ZeroSSL API.</span></div>
            <div className="text-zinc-500 flex gap-4"><span className="text-zinc-600">10:45:21</span> <span>[INFO]</span> <span className="text-zinc-300">Node JS server cluster restarted seamlessly.</span></div>
            <div className="animate-pulse text-zinc-600 mt-4">Waiting for new events...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. Training Hub (NEW)
const TrainingHub = () => {
  return (
    <div className="p-4 md:p-6 h-full flex flex-col overflow-y-auto">
      <header className="mb-6 border-b border-zinc-800 pb-4 shrink-0">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <BookOpen className="text-purple-500" /> IT TRAINING HUB
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        {/* Courses List */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-zinc-400 mb-2">ACTIVE MODULES / SYLLABUS</h3>
          
          <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg hover:border-purple-500/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-sm font-bold">
                <FileCode2 size={16} className="text-purple-400" />
                Frontend Web Engineering
              </div>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono rounded">ACTIVE</span>
            </div>
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              Teaching modern React.js, Next.js frameworks, responsive design with Tailwind CSS, and state management logic to incoming developers.
            </p>
            <div className="flex gap-2 text-[10px] font-mono text-zinc-600">
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">React</span>
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">HTML/CSS</span>
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">JS/ES6</span>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg hover:border-purple-500/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-sm font-bold">
                <Terminal size={16} className="text-cyan-400" />
                Data Parsing & Automation
              </div>
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[9px] font-mono rounded">SCHEDULED</span>
            </div>
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              Workflow automation using Python. Focus on OCR text extraction, regex pattern matching, and zero-hallucination data structuring.
            </p>
            <div className="flex gap-2 text-[10px] font-mono text-zinc-600">
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">Python</span>
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">Regex</span>
              <span className="bg-black px-2 py-1 rounded border border-zinc-800">Automation</span>
            </div>
          </div>
        </div>

        {/* Tutoring Stats & Notice */}
        <div className="space-y-6">
          <div className="bg-black border border-zinc-800 rounded-lg p-5 font-mono">
             <h3 className="text-xs text-zinc-400 mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
               <Users size={14} /> MENTORSHIP METRICS
             </h3>
             <div className="grid grid-cols-2 gap-4 text-center">
               <div className="bg-zinc-950 p-4 rounded border border-zinc-800/50">
                 <div className="text-2xl text-purple-400 font-bold mb-1">24+</div>
                 <div className="text-[9px] text-zinc-500">STUDENTS MENTORED</div>
               </div>
               <div className="bg-zinc-950 p-4 rounded border border-zinc-800/50">
                 <div className="text-2xl text-cyan-400 font-bold mb-1">150h</div>
                 <div className="text-[9px] text-zinc-500">LOGGED SESSIONS</div>
               </div>
             </div>
          </div>

          <div className="bg-zinc-900 border-l-4 border-l-purple-500 p-4 rounded-r-lg font-mono text-xs text-zinc-300">
            <p className="mb-2"><span className="font-bold text-purple-400">SYSTEM NOTE:</span> Mentorship programs are tailored to practical, real-world deployment scenarios. Theory is minimized in favor of project-based building and live debugging.</p>
            <p className="text-zinc-500 mt-4">Use the Support Console to request a 1-on-1 session.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 8. Support Portal (Contact)
const SupportPortal = () => {
  return (
    <div className="p-4 md:p-6 h-full flex flex-col overflow-y-auto">
      <header className="mb-6 border-b border-zinc-800 pb-4 shrink-0">
        <h1 className="text-xl md:text-2xl font-mono text-zinc-100 font-bold flex items-center gap-3">
          <Zap className="text-emerald-500" /> SUPPORT / DISPATCH PORTAL
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start pb-6">
        <div className="bg-zinc-950 border border-zinc-800 p-4 md:p-6 rounded-lg font-mono">
          <h3 className="text-xs text-zinc-400 mb-6 border-b border-zinc-800 pb-2">SUBMIT NEW TICKET</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] text-zinc-500 mb-1">REQUESTER_ID (Name)</label>
              <input type="text" className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-[10px] text-zinc-500 mb-1">COMMS_LINK (Email)</label>
              <input type="email" className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500" placeholder="user@domain.com" />
            </div>
            <div>
              <label className="block text-[10px] text-zinc-500 mb-1">SERVICE_CATEGORY</label>
              <select className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500">
                <option>Web Development / Design</option>
                <option>IT Infrastructure / OS Rollout</option>
                <option>Hardware Repair / Diagnostics</option>
                <option>Data Extraction / Automation</option>
                <option>IT Tutoring / Training Session</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-zinc-500 mb-1">INCIDENT_DESCRIPTION</label>
              <textarea rows={4} className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500" placeholder="Define the operational requirement..." />
            </div>
            <button className="w-full bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-zinc-300 px-4 py-2 rounded text-sm transition-colors flex items-center justify-center gap-2">
              <Mail size={16} /> DEPLOY REQUEST
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-black border border-zinc-800 p-4 md:p-6 rounded-lg font-mono">
             <h3 className="text-xs text-zinc-400 mb-4 flex items-center gap-2"><Lock size={14}/> COMMS PROTOCOLS</h3>
             <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-4">
               Direct communication channels are open for emergency IT support, enterprise contract negotiations, and remote troubleshooting sessions.
             </p>
             <div className="space-y-2 text-xs">
               <div className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800 pb-2 gap-1">
                 <span className="text-zinc-500">STANDARD_EMAIL</span>
                 <span className="text-cyan-400 break-all">josephchio21c@gmail.com</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800 pb-2 pt-2 gap-1">
                 <span className="text-zinc-500">EMERGENCY_LINK</span>
                 <span className="text-emerald-400">+254 797 211 844 (WhatsApp)</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:justify-between pt-2 gap-1">
                 <span className="text-zinc-500">REPO_ACCESS</span>
                 <a href="https://github.com/Chio-21c" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/Chio-21c</a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Interactive Command Palette (Floating Terminal)
const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "sys", text: "Chiori OS Terminal initialized." },
    { type: "sys", text: "Type 'help' for available commands." }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newOutput = [...output, { type: "user", text: `$ ${input}` }];
      
      switch (cmd) {
        case "help":
          newOutput.push({ type: "sys", text: "COMMANDS: help, ping, whoami, clear, date" });
          break;
        case "ping":
          newOutput.push({ type: "sys", text: "Pinging chiori-servers... 12ms. Connection stable." });
          break;
        case "whoami":
          newOutput.push({ type: "sys", text: `Engineer: ${SYS_DATA.engineer.name} | Clearance: Admin` });
          break;
        case "clear":
          setOutput([]);
          setInput("");
          return;
        case "date":
          newOutput.push({ type: "sys", text: new Date().toString() });
          break;
        case "":
          break;
        default:
          newOutput.push({ type: "err", text: `Command not found: ${cmd}` });
      }
      
      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-full md:max-w-md z-60">
      <div 
        className="bg-zinc-900 border-t md:border-l border-zinc-700 md:rounded-tl-lg flex items-center justify-between p-2 cursor-pointer shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono text-xs text-zinc-400 flex items-center gap-2 px-2">
          <Terminal size={14} className="text-emerald-500" /> CLI_INTERFACE
        </span>
        <ChevronRight size={14} className={`text-zinc-500 transition-transform ${isOpen ? "rotate-90" : "-rotate-90"}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 250, opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="bg-black md:border-l border-zinc-800 font-mono text-xs overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-1">
              {output.map((line, i) => (
                <div key={i} className={`
                  ${line.type === "sys" ? "text-zinc-400" : ""}
                  ${line.type === "user" ? "text-emerald-400" : ""}
                  ${line.type === "err" ? "text-red-400" : ""}
                  wrap-break-word
                `}>
                  {line.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="border-t border-zinc-800 p-2 flex items-center bg-zinc-950">
              <span className="text-emerald-500 mr-2">$</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent flex-1 outline-none text-zinc-200 w-full"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- MAIN APP CONTAINER ---

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <SystemOverview />;
      case "profile": return <EngineerProfile />;
      case "incidents": return <IncidentReports />;
      case "hardware": return <HardwareDiagnostics />;
      case "security": return <SecurityAudits />;
      case "tutoring": return <TrainingHub />;
      case "support": return <SupportPortal />;
      default: return <SystemOverview />;
    }
  };

  return (
    <div className="h-screen w-full bg-black text-zinc-200 flex flex-col overflow-hidden selection:bg-emerald-500/30">
      
      {/* Top Global Status Bar */}
      <div className="h-10 md:h-8 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-3 md:px-4 text-[10px] md:text-xs font-mono shrink-0 z-20">
        <div className="flex items-center gap-3 md:gap-4 text-zinc-500">
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
          <span className="flex items-center gap-1"><Shield size={12} className="text-emerald-500" /> <span className="hidden sm:inline">SECURE_CONN</span></span>
          <span className="hidden md:inline">IPV4: 192.168.1.104</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4 text-zinc-500">
          <span className="text-emerald-500">{SYS_DATA.metrics.uptime}</span>
          <span>{new Date().toISOString().split('T')[0]}</span>
        </div>
      </div>

      {/* Main Workspace Split-Pane */}
      <div className="flex-1 flex overflow-hidden relative">
        
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isMobileOpen={isMobileMenuOpen}
          setIsMobileOpen={setIsMobileMenuOpen}
        />
        
        {/* Content Area */}
        <main className="flex-1 bg-[#0a0a0a] relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] mask-[linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full relative z-10"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Floating CLI */}
      <CommandPalette />

      {/* Global Styles (Scrollbars & Utilities) */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}} />
    </div>
  );
}