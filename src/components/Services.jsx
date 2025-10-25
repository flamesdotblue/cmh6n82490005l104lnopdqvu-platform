import React from 'react';
import { Bot, PhoneCall, Cpu, Network, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Sales and support chat that understands context, connects to your data, and resolves queries instantly across web, Slack, and email.'
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agents',
    desc: 'Natural-sounding calling agents for inbound and outbound calls: appointment booking, reminders, qualification, and follow-ups.'
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    desc: 'Orchestrate multi-step processes across CRMs, ticketing, spreadsheets, and internal tools with robust logic and human-in-the-loop.'
  },
  {
    icon: Network,
    title: 'Custom Integrations',
    desc: 'Secure connectors to your stack (HubSpot, Salesforce, Notion, Zendesk, Airtable, WhatsApp, Twilio) and private APIs.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[10%] h-[50vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),rgba(168,85,247,0.1),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI solutions that drive outcomes</h2>
          <p className="mt-3 text-white/70">We design, build, and operate production-ready AI that plugs into your business and delivers measurable ROI.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/30 via-blue-500/30 to-orange-400/30 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Deployed and monitored by Taskmation</span>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to automate your business?</h3>
              <p className="mt-1 text-sm text-white/70">Tell us your goals. We will propose a tailored automation plan and timeline.</p>
            </div>
            <a href="mailto:hello@taskmation.ai" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">
              hello@taskmation.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
