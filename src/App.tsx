/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import pptxgen from 'pptxgenjs';
import { 
  ArrowRight, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Camera, 
  Zap, 
  Database, 
  Cpu, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  ChevronRight,
  Globe,
  Download
} from 'lucide-react';

// --- Components ---

const LinkPreviewCard = ({ url, title, description, icon: Icon, variant = 'light' }: { url: string; title: string; description?: string; icon?: any; variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group block p-8 ${isDark ? 'bg-white/5 border-white/10 hover:border-brand-cyan hover:bg-white/10' : 'bg-white border border-brand-blue/10 hover:border-brand-blue/40'} rounded-2xl transition-all hover:shadow-[0_20px_40px_rgba(0,102,255,0.08)] hover:-translate-y-1 relative overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${isDark ? 'bg-brand-cyan/5' : 'bg-brand-blue/5'} rounded-full -mr-16 -mt-16 blur-3xl group-hover:opacity-100 transition-colors`} />
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className={`p-4 ${isDark ? 'bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-ink-primary' : 'bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'} rounded-2xl transition-all duration-500 shadow-sm`}>
          {Icon ? <Icon size={24} /> : <ExternalLink size={24} />}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className={`text-[10px] font-bold ${isDark ? 'text-brand-cyan' : 'text-brand-blue'} uppercase tracking-widest`}>Visit Link</span>
          <ArrowRight size={16} className={isDark ? 'text-brand-cyan' : 'text-brand-blue'} />
        </div>
      </div>
      <h4 className={`text-lg font-black ${isDark ? 'text-white group-hover:text-brand-cyan' : 'text-ink-primary group-hover:text-brand-blue'} mb-2 uppercase tracking-tight transition-colors relative z-10`}>{title}</h4>
      {description && <p className={`text-[11px] ${isDark ? 'text-white/70' : 'text-ink-secondary'} leading-relaxed uppercase tracking-wider mb-4 relative z-10`}>{description}</p>}
      <div className={`pt-4 ${isDark ? 'border-white/10' : 'border-black/5'} flex items-center gap-2 relative z-10`}>
        <Globe size={12} className={isDark ? 'text-brand-cyan' : 'text-brand-blue/40'} />
        <span className={`text-[10px] font-mono ${isDark ? 'text-brand-cyan' : 'text-brand-blue/60'} truncate`}>{url.replace('https://', '')}</span>
      </div>
    </a>
  );
};

const Capsule = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <span className={`capsule-tag ${className}`} {...props}>{children}</span>
);

const SectionTitle = ({ title, subtitle, titleColor = "text-ink-primary" }: { title: string; subtitle?: string; titleColor?: string }) => (
  <div className="mb-16">
    <h2 className={`display-title mb-4 ${titleColor}`}>{title}</h2>
    {subtitle && <p className="text-[11px] uppercase tracking-[0.4em] text-brand-blue font-bold">{subtitle}</p>}
    <div className="minimal-line mt-10 opacity-10" />
  </div>
);

const BackgroundVisuals = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-blue/5 blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, -10, 0],
        x: [0, -40, 0],
        y: [0, 60, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-[100px]" 
    />
    
    {/* Abstract Grid Lines */}
    <div className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} 
    />
  </div>
);

// --- Slides ---

const Slide1 = () => (
  <section className="slide-section bg-white relative">
    <div className="slide-content justify-center">
      <div className="z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-4xl">
            <Capsule className="mb-8">Qwen 2026</Capsule>
            <h1 className="display-title mb-16">
              千问大模型<br />
              高质量数据基座<br />
              <span className="text-brand-blue">构建者与把控者</span>
            </h1>
            
            <div className="max-w-md">
              <LinkPreviewCard 
                title="数据寻源建设" 
                description="Strategic Data Sourcing Infrastructure"
                url="https://alidocs.dingtalk.com/i/nodes/QOG9lyrgJP3AjnZwiwbXXXG3VzN67Mw4?utm_scene=person_space"
                icon={Database}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-16 flex flex-col items-end gap-10 z-20">
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mb-3">汇报人</p>
          <p className="text-3xl font-black tracking-tighter">闫睿琛</p>
          <p className="text-[10px] font-mono text-ink-secondary mt-1">Dullya</p>
        </div>
        <div className="w-12 h-px bg-black/10" />
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mb-3">主管</p>
          <p className="text-3xl font-black tracking-tighter">韩松直</p>
        </div>
      </div>
      
      {/* 3D Abstract Shape Placeholder */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0066FF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00E5FF', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <motion.path
            animate={{ 
              d: [
                "M40,100 C40,60 60,40 100,40 C140,40 160,60 160,100 C160,140 140,160 100,160 C60,160 40,140 40,100",
                "M50,100 C50,50 70,30 110,30 C150,30 170,50 170,100 C170,150 150,170 110,170 C70,170 50,150 50,100",
                "M40,100 C40,60 60,40 100,40 C140,40 160,60 160,100 C160,140 140,160 100,160 C60,160 40,140 40,100"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#grad1)"
          />
        </svg>
      </div>
    </div>
  </section>
);

const Slide2 = () => {
  return (
    <section className="slide-section bg-surface">
      <div className="slide-content">
        <SectionTitle title="能力画像" subtitle="Cross-Disciplinary Vision" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bento-card relative overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl font-bold">核心角色</h3>
              </div>
              <p className="text-sm text-ink-secondary mb-8 leading-relaxed">
                现任阿里千问文生图数据采集项目负责人。操盘百人众包军团，全链路赋能“第一开源文生图模型”Z-image 及 Qwen-image 2.0。
              </p>
              
              <div className="mt-auto space-y-4">
                <LinkPreviewCard 
                  title="Z-Image Turbo" 
                  description="Open Source Image Model"
                  url="https://github.com/Tongyi-MAI/Z-Image"
                />
                <LinkPreviewCard 
                  title="Qwen-Image 2.0" 
                  description="Multimodal Breakthrough"
                  url="https://www.xiaohongshu.com/discovery/item/698af978000000000b0105f8?source=webshare&xhsshare=pc_web&xsec_token=CBfms_MZzSJaObQ3ANpenuvV2Jt60zZWM7Py4j6mlexM4=&xsec_source=pc_share"
                />
              </div>
            </div>

            <div className="bento-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-cyan rounded-full flex items-center justify-center text-white">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold">专注领域</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {['全球化寻源策略', 'SFT/RLHF 高美学标准', '供应商培训与质检'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <LinkPreviewCard 
                title="业务深度洞察" 
                url="https://aliyuque.antfin.com/yo59wy/kg7h1z/ed59gmzsef1lxhip"
              />
            </div>
          </div>

          <div className="bento-card bg-brand-blue text-white border-none">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold">教育背景</h3>
            </div>
            <div className="space-y-8">
              <div>
                <Capsule className="bg-white/10 border-white/20 text-white mb-3">本科 | 合肥工业大学 (211/双一流)</Capsule>
                <p className="text-sm font-bold mb-1">高分子材料与工程</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">国家卓越工程师计划</p>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <Capsule className="bg-white/10 border-white/20 text-white mb-3">硕士 | 浙江理工大学</Capsule>
                <p className="text-sm font-bold mb-1">心理学 (视觉感知工程)</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">研究生一等奖学金 | SCD核心期刊</p>
              </div>
              <p className="text-xs text-white/80 leading-relaxed italic border-l-2 border-white/20 pl-4">
                "构筑了对图像审美、用户体验极其敏锐的拆解与洞察力。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Slide3 = () => (
  <section className="slide-section bg-ink-primary text-white relative">
    {/* Dark Background with subtle gradient */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-primary via-black to-ink-primary opacity-80" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full" />
    </div>

    <div className="slide-content z-10">
      <SectionTitle title="关于我" subtitle="Experience & Portfolio" titleColor="text-white" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-cyan mb-8">职场实战 / Experience</h3>
          {[
            { company: "科大讯飞 | 讯飞星火", role: "校招生", period: "2024.07-2025.03", desc: "主导C端产品实现0到1的百万级生态矩阵搭建。" },
            { company: "海康威视 | 萤石", role: "产品经理/用研实习", period: "2024.08-12", desc: "主导萤石云APP竞品分析与多款新型设备体验优化。" },
            { company: "网易游戏 | 雷火", role: "用户研究实习", period: "2024.04-08", desc: "深入用户体验中心，支撑千万级爆款产品的美学 and 游戏体验重塑。" }
          ].map((exp, i) => (
            <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-brand-cyan transition-colors">
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" />
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                <span className="text-[10px] font-mono text-white/40">{exp.period}</span>
              </div>
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-2">{exp.role}</p>
              <p className="text-sm text-white/60 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">艺术积淀 / Awards & Exhibitions</h3>
            <div className="space-y-6">
              <div className="bento-card-dark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-blue/20 rounded-xl text-brand-blue">
                    <Award size={24} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-white">Awards (AIGC)</h4>
                </div>
                <p className="text-[13px] text-white leading-relaxed">
                  通义万相入围奖、Vidu AI视觉单元二等奖、阿里通义首尾帧挑战赛二等奖及人气奖、WANACE 2.1优秀奖、华为故事接龙优秀奖、复新全球影像大赛入围、AAIA入围、海螺AI×上戏电影节展出。
                </p>
              </div>
              <div className="bento-card-dark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-cyan/20 rounded-xl text-brand-cyan">
                    <Camera size={24} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-white">Photography Exhibitions</h4>
                </div>
                <p className="text-[13px] text-white leading-relaxed">
                  法国巴黎卢浮宫艺术周参展（Chinese 100）。中国龙奖（摄影类铜奖）、平遥国际摄影大展、丽水摄影展、FIAP世界摄影人大会、第十五届中国摄影艺术节参展、上海富士x-space、小红书线上摄影展、杭州天目里 屋书店、北京青年艺术100等多地参展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex items-center gap-8 w-full md:w-auto">
          <div className="w-full md:w-[400px]">
            <LinkPreviewCard 
              title="Personal Portfolio" 
              description="Explore full works and creative journey"
              url="https://dullya.is.rcyan.top/"
              icon={Globe}
              variant="dark"
            />
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-3">REMARK</p>
          <p className="text-2xl font-black tracking-tight text-white">AIGC导演，摄影艺术家，互联网人</p>
        </div>
      </div>
    </div>
  </section>
);

const Slide4 = () => (
  <section className="slide-section bg-surface">
    <div className="slide-content">
      <SectionTitle title="核心战果" subtitle="Competence: Core Business Penetration" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        {[
          {
            title: "高质量数据寻源",
            tag: "解决预训练数据荒",
            desc: "覆盖微博、小红书、Instagram及百万级垂直专业站点，构建精准筛选与采集系统，彻底解决预训练阶段数据量级不足的问题。",
            icon: Database,
            color: "bg-brand-blue"
          },
          {
            title: "高审美数据采集",
            tag: "攻克SFT审美瓶颈",
            desc: "利用团队90%以上的设计/艺术背景优势，实施100%人工精筛与60+专项品类攻坚，产出极高转化率的审美数据。",
            icon: Zap,
            color: "bg-brand-cyan"
          },
          {
            title: "底座模型深度赋能",
            tag: "Qwen-Image 2.0 突破",
            desc: "全链路支撑通义“Z-image”数据生产，推动知识类与书法寻源项目，直接推动了 Qwen-image 2.0 在中文图文混排与书法能力的突破。",
            icon: Cpu,
            color: "bg-ink-primary"
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            className="bento-card flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8`}>
              <item.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <Capsule className="mb-6 self-start">{item.tag}</Capsule>
            <p className="text-sm text-ink-secondary leading-relaxed flex-grow">{item.desc}</p>
            <div className="mt-8 pt-8 border-t border-black/5">
              <LinkPreviewCard 
                title="战果详情" 
                url="https://alidocs.dingtalk.com/i/nodes/r1R7q3QmWew5lo02fz3Xrlq4JxkXOEP2?utm_scene=person_space"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Slide5 = () => (
  <section className="slide-section bg-ink-primary text-white">
    <div className="slide-content">
      <SectionTitle title="顶层战略重塑" subtitle="Strategy: From Scale to Boutique" titleColor="text-white" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight text-white">从“规模化扩张”到<br /><span className="text-brand-cyan">“精品化数据演进架构”</span></h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              摒弃单纯数量堆砌，确立基于160万数据规模的“精品化”路线。重新定义RLHF与DPO是从“60分可用”向“90分卓越”跨越的核心质量提升工具。
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-cyan flex items-center justify-center text-brand-cyan font-bold text-xs shrink-0">01</div>
              <div>
                <h4 className="text-sm font-bold uppercase mb-2 text-white">广度寻源 / Width</h4>
                <p className="text-xs text-white/40 mb-4">双重寻源 → 链式扩散 → 智能筛选 → 全局去重自动化闭环。</p>
                <LinkPreviewCard title="广度寻源链路" url="https://alidocs.dingtalk.com/i/nodes/a9E05BDRVQRkezKGCpwRZP42J63zgkYA?utm_scene=person_space" variant="dark" />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-blue flex items-center justify-center text-brand-blue font-bold text-xs shrink-0">02</div>
              <div>
                <h4 className="text-sm font-bold uppercase mb-2 text-white">深度雕琢 / Depth</h4>
                <p className="text-xs text-white/40 mb-4">定向采集 → 人工SFT → 三级质检机制全量保障高审美。</p>
                <LinkPreviewCard title="深度雕琢链路" url="https://alidocs.dingtalk.com/i/nodes/N7dx2rn0Jbdd0md5iQQwp1qpWMGjLRb3?utm_scene=person_space" variant="dark" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Abstract 3D Strategy Visualization */}
          <div className="aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
            <div className="z-10 text-center space-y-4">
              <div className="text-6xl font-black text-brand-cyan">1.6M</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Boutique Data Scale</div>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Slide6 = () => (
  <section className="slide-section bg-surface text-ink-primary">
    <div className="slide-content">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-ink-primary">攻坚数据荒</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-blue font-semibold">Execution: The Data Ocean</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
        {[
          { label: "基础资产规模", val: "3.1亿+", sub: "图文对资源沉淀", detail: "Instagram 1.16亿 | 网页截屏 1.11亿" },
          { label: "视频模态拓展", val: "865万+", sub: "视频总存量", detail: "2816个高质量YouTube博主分类" },
          { label: "社媒生态包揽", val: "786万+", sub: "微博优质图像", detail: "18.6万条优质Channel工程导流" },
          { label: "PDF资源转化", val: "2400万+", sub: "预估转化规模", detail: "40+高优站点，覆盖十一大类" }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className="p-8 border border-black/5 rounded-3xl bg-white flex flex-col justify-between shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ink-secondary mb-4">{stat.label}</p>
              <div className="text-4xl font-black text-brand-blue mb-2">{stat.val}</div>
              <p className="text-sm font-bold mb-4 text-ink-primary">{stat.sub}</p>
            </div>
            <p className="text-[10px] text-ink-secondary leading-relaxed uppercase tracking-wider">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-brand-blue rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-xl font-bold mb-2 text-white">前沿探索：自动化寻源 Agent</h4>
          <p className="text-sm text-white/80">主子Agent架构实现小红书平台博主主页的高效抓取与自动化过滤。</p>
        </div>
        <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all">
          View Pipeline
        </button>
      </div>
    </div>
  </section>
);

const Slide7 = () => (
  <section className="slide-section bg-ink-primary text-white relative">
    {/* Dark Background with subtle grid */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-ink-primary" />
      <div className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>

    <div className="slide-content z-10">
      <SectionTitle title="前沿技术落地" subtitle="Innovation: Agent Pipeline" titleColor="text-white" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-grow">
          <div className="space-y-6">
            <div className="bento-card-dark p-8 border-white/5">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-white">
                <Cpu size={24} className="text-brand-cyan" />
                自动化寻源管线重构
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed mb-8">
                针对小红书等高防爬社交平台，主导规划并落地了基于大模型的自动化寻源 Agent 开发。
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />
                  <h4 className="text-xs font-bold uppercase text-brand-blue mb-2">阶段一：Channel 获取的无人化</h4>
                  <p className="text-[12px] text-white/40 leading-relaxed">
                    部署主 Agent 持续爬取博主主页链接，汇总传递至子 Agent 进行全局去重与整合，生成标准化目标源。
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan" />
                  <h4 className="text-xs font-bold uppercase text-brand-cyan mb-2">阶段二：URL 提取与规则强过滤</h4>
                  <p className="text-[12px] text-white/40 leading-relaxed">
                    主 Agent 介入对产能数据进行清洗、格式转化，并严格执行算法预设过滤规则（如发帖量阈值），最终由子 Agent 输出绝对纯净的高质量目标帖 URL，彻底替代人工低效初筛。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card-dark flex flex-col justify-center items-center text-center p-12 relative overflow-hidden border-white/5">
            <div className="relative z-10">
              <div className="relative w-48 h-48 mb-8 mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-brand-cyan/30 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu size={48} className="text-brand-cyan" />
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-tight text-white">AI Agent Efficiency</h4>
              <p className="text-xs text-white/40 uppercase tracking-widest">Replacing Manual Bottlenecks with Intelligence</p>
            </div>
          </div>
      </div>
    </div>
  </section>
);

const Slide8 = () => (
  <section className="slide-section bg-surface text-ink-primary">
    <div className="slide-content">
      <div className="mb-16">
        <h2 className="display-title text-ink-primary mb-4">突破认知极限</h2>
        <p className="text-[11px] uppercase tracking-[0.4em] text-brand-blue font-bold">Precision: Fine-Grained Knowledge</p>
        <div className="h-[0.5px] bg-black/10 w-full mt-10" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bento-card">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-ink-primary">
            <TrendingUp size={20} className="text-brand-blue" />
            冲刺顶级榜单保障
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-8">
            系统筛选古典名画、摄影大师与当代艺术作品，累计交付超12万张高分辨率、高美学原始图像，强势支撑艺术设计方向的模型冲榜任务。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/10">
              <div className="text-2xl font-black text-brand-blue">120K+</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-ink-secondary">High-Res Images</div>
            </div>
            <div className="p-4 bg-brand-cyan/5 rounded-xl border border-brand-cyan/10">
              <div className="text-2xl font-black text-brand-cyan">Top 1</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-ink-secondary">Artistic Benchmark</div>
            </div>
          </div>
        </div>

        <div className="bento-card">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-ink-primary">
            <Layers size={20} className="text-brand-blue" />
            物理世界真实细粒度还原
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-8">
            切分并执行 46 个复杂多品类真实图采集战役，精准覆盖历史档案、稀缺游戏 IP、UI 界面及 5000 万社媒人物群像。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LinkPreviewCard title="明星采集" url="https://alidocs.dingtalk.com/i/nodes/2Amq4vjg89gPeQBLupzDezvrV3kdP0wQ?utm_scene=person_space" variant="light" />
            <LinkPreviewCard title="视频采集" url="https://alidocs.dingtalk.com/i/nodes/XPwkYGxZV3bbBKbYivM0EPRnWAgozOKL?utm_scene=person_space" variant="light" />
          </div>
        </div>
      </div>

      <div className="bento-card bg-brand-blue text-white border-none p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-left">
            <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight text-white">海量图库的沙里淘金</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              在庞大的 769 万挑图系统中，通过严密规则精筛出 35,449 张极品数据；并在 31,679 张经典图库中严筛近万张核心资产。
            </p>
          </div>
          <div className="text-right">
            <div className="text-6xl font-black text-brand-cyan">35,449</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Elite Data Points</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Slide9 = () => (
  <section className="slide-section bg-ink-primary text-white">
    <div className="slide-content">
      <SectionTitle title="清扫业务卡点" subtitle="Management: Clearing Blockers" titleColor="text-white" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow items-stretch">
        <div className="flex flex-col">
          <div className="bento-card-dark flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">资源协调与冲突消解</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              在面临算法需求突增与各项目线人力冲突时，建立统一的需求调控中枢。通过与算法对齐标准，实现复杂供应链的弹性调度。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <LinkPreviewCard title="中台需求表" url="https://aliyuque.antfin.com/yo59wy/kg7h1z/yzhvf3d1fnveo9zh#RZTp" variant="dark" />
              <LinkPreviewCard title="通义需求表" url="https://aliyuque.antfin.com/yo59wy/kg7h1z/zobreck3id4u2sg6#KzPA" variant="dark" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bento-card-dark border-brand-blue/20 bg-brand-blue/5 flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">标准歧义防线</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              建立严密的向上反馈机制与横向拉齐流程。在面对诸如“caption精标”等复杂任务时，敏锐识别标注理解偏差，迅速拉齐算法需求并重构规则文档。
            </p>
            <div className="space-y-6 mt-auto">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">供应商试标合格率</h4>
                  <div className="text-3xl font-black text-white">跃升至 90% +</div>
                </div>
                <div className="shrink-0">
                  <LinkPreviewCard title="标注进度表" url="https://alidocs.dingtalk.com/i/nodes/vy20BglGWOdd4wd6iqXPGRXkVA7depqY?utm_scene=person_space" variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Slide10 = () => (
  <section className="slide-section bg-surface">
    <div className="slide-content">
      <SectionTitle title="组织资产沉淀" subtitle="Methodology: Organizational Asset" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
        <div className="bento-card flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-8">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">团队知识库建设</h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8">
              深度结合心理学视知觉理论，将业内模糊的“好看”主观评价，转化为涵盖“构图、色彩、光影、主题、技术”的五维量化评估指标。
            </p>
            <LinkPreviewCard title="团队知识库" url="https://aliyuque.antfin.com/yo59wy/kg7h1z" />
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {['构图', '色彩', '光影', '主题', '技术'].map((tag, i) => (
              <Capsule key={i} className="bg-brand-blue/5 border-brand-blue/10 text-brand-blue">{tag}</Capsule>
            ))}
          </div>
        </div>

        <div className="bento-card flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-brand-cyan/10 rounded-3xl flex items-center justify-center text-brand-cyan mb-8">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">跨团队协作效率法则</h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8">
              总结在并行统筹多个高并发项目时的链路管理经验，形成了可复用的项目路由与异常阻断机制。改变行业内粗放的主观二元评判模式。
            </p>
          </div>
          <div className="p-8 bg-brand-blue text-white rounded-2xl">
            <div className="text-4xl font-black mb-1">80%+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">SFT Aesthetic Excellence Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Slide11 = () => (
  <section className="slide-section bg-ink-primary text-white">
    <div className="slide-content">
      <SectionTitle title="未来战略蓝图 & 终局收束" subtitle="Future Roadmap & Closing" titleColor="text-white" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          { title: "多模态与多视角数据深耕", desc: "针对性攻克大模型物理与空间逻辑短板。全面推进 Avatar 数字人高拟真视频数据建设及视频数据集，打通多模态策略融合的数据大动脉。" },
          { title: "质寻源管线升级", desc: "持续深化 openclaw 以及 skills Agent在寻源中的自动化应用；推进多模型协同（VLM），加速高质量提示词自动化构建，将人工精力彻底释放到最高维度的价值判定上。" },
          { title: "供应商能力认证体系进阶", desc: "针对百人外部团队，构建更为严格的能力矩阵与认证通道，打造高并发、高可用率的数据加工铁军。" }
        ].map((item, i) => (
          <div key={i} className="bento-card-dark border-white/5">
            <h4 className="text-sm font-black text-brand-cyan uppercase tracking-widest mb-4">0{i+1} / {item.title}</h4>
            <p className="text-[12px] text-white/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-16 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-10">
            <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-tight text-white italic border-l-4 border-brand-cyan pl-8">
              "在 AIGC 愈发残酷的技术军备竞赛中，算力与架构决定了模型天花板的理论上限。然而，在生成变得廉价，只有审美偏好、判断力与深邃世界知识的数据基座，才是支撑大模型真正触碰甚至击穿该上限的唯一现实阶梯。我将持续以工程的严密与感知的敏锐，为业务的持续爆发注入最高纯度的燃料。"
            </p>
            <LinkPreviewCard 
              title="Team Space" 
              description="Strategic Data Asset Management"
              url="https://alidocs.dingtalk.com/i/nodes/YMyQA2dXW7gYo6Mzcpz9DDdvWzlwrZgb?utm_scene=team_space"
              icon={Layers}
              variant="dark"
            />
          </div>
          <div className="text-right">
            <h2 className="display-title text-brand-cyan opacity-5 mb-[-1vw]">ARCHITECT</h2>
            <p className="text-3xl font-black uppercase tracking-[0.2em] text-white">闫睿琛</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-cyan mt-4">AIGC Data Architect</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PPT Export Logic ---

const exportToPpt = () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: 'FFFFFF' },
  });

  // Slide 1: Cover
  let slide1 = pptx.addSlide();
  slide1.addText('Qwen 2026', { x: 0.5, y: 0.5, fontSize: 14, color: '0066FF', bold: true });
  slide1.addText('千问大模型\n高质量数据基座\n构建者与把控者', { x: 0.5, y: 1.5, fontSize: 44, bold: true, color: '111827' });
  slide1.addText('汇报人: 闫睿琛\n主管: 韩松直', { x: 6.5, y: 4.5, fontSize: 18, align: 'right', bold: true });

  // Slide 2: Capability
  let slide2 = pptx.addSlide();
  slide2.addText('能力画像', { x: 0.5, y: 0.3, fontSize: 32, bold: true });
  slide2.addText('阿里千问文生图数据采集项目负责人\n操盘百人众包军团，全链路赋能 Z-image 及 Qwen-image 2.0', { x: 0.5, y: 1.2, fontSize: 14, color: '6B7280' });
  slide2.addText('教育背景:\n本科 | 合肥工业大学 (211/双一流)\n硕士 | 浙江理工大学', { x: 0.5, y: 3.5, fontSize: 16, bold: true });

  // Slide 3: About Me
  let slide3 = pptx.addSlide();
  slide3.background = { color: '111827' };
  slide3.addText('关于我', { x: 0.5, y: 0.3, fontSize: 32, bold: true, color: 'FFFFFF' });
  slide3.addText('职场实战:\n- 科大讯飞 | 讯飞星火\n- 海康威视 | 萤石\n- 网易游戏 | 雷火', { x: 0.5, y: 1.5, fontSize: 14, color: 'FFFFFF' });
  slide3.addText('艺术积淀:\n- Awards (AIGC): 通义万相入围奖等\n- Photography Exhibitions: 卢浮宫艺术周参展等', { x: 5.0, y: 1.5, fontSize: 14, color: 'FFFFFF' });

  // Slide 4: Results
  let slide4 = pptx.addSlide();
  slide4.addText('核心战果', { x: 0.5, y: 0.3, fontSize: 32, bold: true });
  slide4.addText('1. 高质量数据寻源: 解决预训练数据荒\n2. 高审美数据采集: 攻克SFT审美瓶颈\n3. 底座模型深度赋能: Qwen-Image 2.0 突破', { x: 0.5, y: 1.5, fontSize: 18 });

  // Slide 5: Strategy
  let slide5 = pptx.addSlide();
  slide5.background = { color: '111827' };
  slide5.addText('顶层战略重塑', { x: 0.5, y: 0.3, fontSize: 32, bold: true, color: 'FFFFFF' });
  slide5.addText('从“规模化扩张”到“精品化数据演进架构”', { x: 0.5, y: 1.5, fontSize: 24, bold: true, color: '00E5FF' });
  slide5.addText('1.6M Boutique Data Scale', { x: 0.5, y: 3.0, fontSize: 20, color: 'FFFFFF' });

  // Slide 6: Execution
  let slide6 = pptx.addSlide();
  slide6.addText('攻坚数据荒', { x: 0.5, y: 0.3, fontSize: 32, bold: true });
  slide6.addText('基础资产: 3.1亿+ | 视频模态: 865万+\n社媒生态: 786万+ | PDF资源: 2400万+', { x: 0.5, y: 2.0, fontSize: 20, bold: true, color: '0066FF' });

  // Slide 7: Agent
  let slide7 = pptx.addSlide();
  slide7.background = { color: '111827' };
  slide7.addText('前沿技术落地', { x: 0.5, y: 0.3, fontSize: 32, bold: true, color: 'FFFFFF' });
  slide7.addText('自动化寻源管线重构 (Agent Pipeline)', { x: 0.5, y: 1.5, fontSize: 20, color: '00E5FF' });
  slide7.addText('阶段一: Channel 获取无人化\n阶段二: URL 提取与规则强过滤', { x: 0.5, y: 2.5, fontSize: 16, color: 'FFFFFF' });

  // Slide 8: Knowledge
  let slide8 = pptx.addSlide();
  slide8.addText('突破认知极限', { x: 0.5, y: 0.3, fontSize: 32, bold: true });
  slide8.addText('120K+ 高清图像支撑艺术设计冲榜\n46个复杂多品类真实图采集战役', { x: 0.5, y: 2.0, fontSize: 18 });

  // Slide 9: Blockers
  let slide9 = pptx.addSlide();
  slide9.background = { color: '111827' };
  slide9.addText('清扫业务卡点', { x: 0.5, y: 0.3, fontSize: 32, bold: true, color: 'FFFFFF' });
  slide9.addText('资源协调与冲突消解\n标准歧义防线: 供应商试标合格率跃升至 90%+', { x: 0.5, y: 2.0, fontSize: 18, color: 'FFFFFF' });

  // Slide 10: Assets
  let slide10 = pptx.addSlide();
  slide10.addText('组织资产沉淀', { x: 0.5, y: 0.3, fontSize: 32, bold: true });
  slide10.addText('团队知识库: 五维量化评估指标\n协作效率法则: 项目路由与异常阻断机制', { x: 0.5, y: 2.0, fontSize: 18 });

  // Slide 11: Future
  let slide11 = pptx.addSlide();
  slide11.background = { color: '111827' };
  slide11.addText('未来战略蓝图', { x: 0.5, y: 0.3, fontSize: 32, bold: true, color: 'FFFFFF' });
  slide11.addText('1. 多模态与多视角数据深耕\n2. 质寻源管线升级\n3. 供应商能力认证体系进阶', { x: 0.5, y: 1.5, fontSize: 16, color: 'FFFFFF' });
  slide11.addText('闫睿琛 | AIGC Data Architect', { x: 6.5, y: 4.5, fontSize: 18, align: 'right', bold: true, color: '00E5FF' });

  pptx.writeFile({ fileName: 'Qwen_2026_Strategic_Report.pptx' });
};

// --- Main App ---

export default function App() {
  return (
    <div className="slide-container">
      <BackgroundVisuals />
      
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />

      {/* PPT Export Button */}
      <button 
        onClick={exportToPpt}
        className="fixed left-8 bottom-8 z-50 p-4 bg-brand-blue text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        title="Download PPT"
      >
        <Download size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">Download PPT</span>
      </button>

      {/* Navigation Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[...Array(11)].map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-1 rounded-full bg-black/20 transition-all hover:scale-150 hover:bg-brand-blue" 
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
