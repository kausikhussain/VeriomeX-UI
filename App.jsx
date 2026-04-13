import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Search, Database, Wallet, Dna, Zap, ArrowRight, 
  Lock, Trash2, Activity, Globe, Scale, FlaskConical, CheckCircle2 
} from 'lucide-react';

// --- THEME CONSTANTS ---
const COLORS = {
  bg: "#0B0E14",
  glass: "rgba(255, 255, 255, 0.03)",
  border: "rgba(255, 255, 255, 0.1)",
  cyan: "#22D3EE",
  green: "#2ECC71", // Bioluminescent Green
  purple: "#A855F7"
};

const glassStyle = "backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]";

// --- REUSABLE COMPONENTS ---

const StatCard = ({ icon: Icon, label, value, subtext }) => (
  <div className={`${glassStyle} p-6 flex flex-col items-center text-center group hover:border-cyan-400/50 transition-all duration-500`}>
    <div className="p-3 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-cyan-400" size={24} />
    </div>
    <div className="text-3xl font-bold tracking-tight mb-1">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-semibold">{label}</div>
    {subtext && <div className="text-[9px] mt-2 text-green-400 font-mono italic">{subtext}</div>}
  </div>
);

export default function VariomexApp() {
  const [queryStatus, setQueryStatus] = useState('idle');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scrollytelling Transforms
  const helixRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const pipelineSteps = [
    { icon: Database, color: "text-cyan-400", title: "Data Ingestion", desc: "Securely ingest VCF files via IPFS with automatic indexing." },
    { icon: Lock, color: "text-purple-400", title: "ZK-Commitment", desc: "Generate cryptographic commitments without exposing raw genomics." },
    { icon: CheckCircle2, color: "text-green-400", title: "Query Verification", desc: "Execute trait queries via succinct zero-knowledge proofs." }
  ];

  const cohorts = ["Type-2 Diabetes", "Hypertension", "Alzheimer's"];

  const regulations = ["GDPR", "HIPAA", "SOC2", "FDA 21 CFR Part 11"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },);

  return (
    <div className="min-h-screen bg- text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 w-full z- transition-all duration-500 px-6 py-4 ${scrolled? 'backdrop-blur-xl bg-black/40 border-b border-white/5 py-3' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative p-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl">
                <Dna size={22} className="text-black" />
              </div>
            </div>
            <span className="font-black text-2xl tracking-tighter text-white">VARIOMEX</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">
            <a href="#vault" className="hover:text-cyan-400 transition-colors">The Vault</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">ZK-Pipeline</a>
            <a href="#query" className="hover:text-cyan-400 transition-colors">Researcher Portal</a>
          </div>

          <button className="px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Connect Identity
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Visuals */}
        <motion.div style={{ rotate: helixRotate }} className="absolute opacity-[0.03] pointer-events-none">
          <Dna size={800} strokeWidth={0.5} />
        </motion.div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

        <motion.div style={{ opacity: heroOpacity }} className="max-w-5xl text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[10px] font-black mb-8 tracking-[0.3em] uppercase"
          >
            <ShieldCheck size={14} /> Decentralized Science (DeSci) // Protocol v0.4
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-white">
            INSIGHTS, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500">
              NOT THE DNA.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Unlock the 97% of siloed clinical-genomic data. 
            Verify traits using <span className="text-white">Zero-Knowledge Proofs</span> without moving 
            a single byte of raw VCF data.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
              Secure My Genome
            </button>
            <button className="px-12 py-5 border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              Request Access <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* PERFORMANCE METRICS */}
        <div className="mt-24 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <StatCard icon={Zap} label="Query Latency" value="5.83ms" subtext="90.0% Accuracy Verified" />
          <StatCard icon={FlaskConical} label="Clinical ROI" value="2.6x" subtext="Trial Success Uplift" />
          <StatCard icon={Globe} label="Network Resilience" value="100%" subtext="High-Fault Tolerance" />
          <StatCard icon={Database} label="Indexed Variants" value="35M+" subtext="Bloom Filter Optimized" />
        </div>
      </section>

      {/* 3. THE ZK-PIPELINE (SCROLLYTELLING) [1, 2, 3] */}
      <section id="pipeline" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Architecture of Trust</h2>
            <p className="opacity-40 uppercase tracking-[0.2em] text-xs font-bold">Hybrid Storage + ZK-Verification Pipeline</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {pipelineSteps.map((step, i) => (
              <div key={i} className={`${glassStyle} p-10 relative overflow-hidden group`}>
                <div className={`mb-6 ${step.color}`}>
                  <step.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed mb-6">{step.desc}</p>
                <div className="text-[10px] font-mono opacity-30">PIPELINE_STAGE_0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESEARCHER PORTAL SIMULATION [4, 5, 6] */}
      <section id="query" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className={`${glassStyle} p-1 mr-4`}>
            <div className="bg-black/60 rounded-[2rem] p-8 md:p-12">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Environment: PROD_MAINNET</div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Select Target Cohort</label>
                  <div className="flex gap-3">
                    {cohorts.map(c => (
                      <button key={c} className="flex-1 py-2 px-4 rounded-xl border border-white/10 text-[10px] font-bold hover:border-cyan-400 transition-colors uppercase">{c}</button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Target Gene</label>
                    <select className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 font-mono text-sm">
                      <option>BRCA1</option>
                      <option>JAK2</option>
                      <option>CFTR</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest opacity-40">Variant Type</label>
                    <select className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 font-mono text-sm text-cyan-400">
                      <option>SNP (rs6025_AG)</option>
                      <option>INDEL (c.5266dupC)</option>
                      <option>CNV</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setQueryStatus('processing');
                    setTimeout(() => setQueryStatus('success'), 2000);
                  }}
                  className="w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3"
                >
                  {queryStatus === 'processing'? <Activity className="animate-spin" /> : <Search size={18} />}
                  {queryStatus === 'processing'? 'Generating ZK-SNARK...' : 'Execute Trait Verification'}
                </button>

                <AnimatePresence>
                  {queryStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      className="p-6 border border-green-500/30 bg-green-500/5 rounded-2xl space-y-4"
                    >
                      <div className="flex items-center gap-3 text-green-400 font-bold text-sm">
                        <CheckCircle2 size={18} /> PROOF_VERIFIED_ON_CHAIN
                      </div>
                      <div className="font-mono text-[10px] opacity-60 leading-relaxed">
                        Result: <span className="text-white">MATCH_FOUND</span><br />
                        Proof: 0x8f2a...3e1c (Succinct)<br />
                        Latency: 5.8ms // Data Residency: MAINTAINED
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
              Accelerate Discovery <br /> Without Exposure.
            </h2>
            <p className="text-lg opacity-50 mb-10 leading-relaxed font-medium">
              Pharmaceutical partners can now query massive, diverse cohorts in seconds. 
              By leveraging our ZK-Layer, you gain the genetic evidence required to increase trial success by 2.6x 
              without the legal risk of bulk data transfer.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-cyan-400 font-black mb-2 uppercase text-[10px] tracking-widest">Compliance</div>
                <div className="text-sm font-bold text-white">DOJ Bulk Data Rule 2025 Ready</div>
              </div>
              <div>
                <div className="text-cyan-400 font-black mb-2 uppercase text-[10px] tracking-widest">Efficiency</div>
                <div className="text-sm font-bold text-white">70% Clinical Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DATA OWNER VAULT (BIO-SOVEREIGNTY) [1, 7] */}
      <section id="vault" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white tracking-tighter">Your Genome. Your Capital.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${glassStyle} p-10 hover:border-cyan-400/50 transition-all cursor-pointer`}>
              <Activity className="text-green-400 mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-1">98.4</div>
              <div className="text-[10px] uppercase font-black tracking-widest opacity-40">Proof-of-Reputation</div>
            </div>
            <div className={`${glassStyle} p-10 border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.1)]`}>
              <Wallet className="text-cyan-400 mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-1">1.2K <span className="text-xs opacity-30">$GMX</span></div>
              <div className="text-[10px] uppercase font-black tracking-widest opacity-40">Yield Generated</div>
            </div>
            <div className={`${glassStyle} p-10 group hover:border-red-500/50 transition-all cursor-pointer`}>
              <Trash2 className="text-red-400 mx-auto mb-4 group-hover:animate-pulse" size={32} />
              <div className="text-xl font-bold text-white mb-1">Kill Switch</div>
              <div className="text-[10px] uppercase font-black tracking-widest opacity-40 group-hover:text-red-400 transition-colors">Revoke All Access</div>
            </div>
          </div>
          <div className="mt-16 p-8 rounded-[2rem] border border-white/5 opacity-40 italic font-medium text-sm">
            "Variomex enforces the 'Right to be Forgotten' via smart contract key deletion. 
            We never store your DNA; we only index your sovereignty." [7, 8]
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE FOOTER  */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="flex flex-wrap justify-center gap-10 mb-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {regulations.map(law => (
            <div key={law} className="px-6 py-2 border border-white/20 rounded-lg text-[9px] font-black tracking-[0.3em] uppercase">{law}</div>
          ))}
        </div>
        <div className="text-[10px] font-mono opacity-20 uppercase tracking-[0.5em]">
          Variomex Protocol // Sui Network // IPFS Content Addressing // Alpha v0.4.1
        </div>
      </footer>
    </div>
  );
}