import { BarVisualizer } from "@/components/ui/bar-visualizer";
import ConversationDemo from "@/components/ui/conversation-demo/conversation-demo";
import OrbAutoPlay from "@/components/ui/orb-autoplay/orb-autoplay";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { ScrollingWaveform, StaticWaveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";
import Image from "next/image";

type FeatureContentKey = "multilingual" | "stt" | "access" | "ai";

const heroBubbles = [
  {
    text: "Nǐ hǎo",
    position: "left-[-40px] top-8",
    transform: "translate(-30%, -30%) rotate(-2deg)",
  },
  {
    text: "Selamat datang",
    position: "right-[-60px] top-[18px]",
    transform: "translate(30%, -20%) rotate(1deg)",
  },
  {
    text: "Apa khabar",
    position: "left-[-50px] bottom-4",
    transform: "translate(-25%, 25%) rotate(1deg)",
  },
  {
    text: "வணக்கம்",
    position: "right-[-70px] bottom-6",
    transform: "translate(35%, 20%) rotate(-1deg)",
  },
];

const mlBubbles = [
  {
    text: "Apa khabar?",
    className: "left-[clamp(24px,8vw,140px)] top-[54px]",
  },
  {
    text: "How are you?",
    className: "right-[clamp(24px,8vw,160px)] top-[78px]",
  },
  {
    text: "Nǐ hǎo ma?",
    className: "left-[clamp(24px,8vw,160px)] bottom-[52px]",
  },
  {
    text: "நலமா?",
    className: "right-[clamp(24px,8vw,120px)] bottom-[38px]",
  },
];

const featureCards: Array<{
  title: string;
  body: string;
  content: FeatureContentKey;
}> = [
  {
    title: "Multilingual Understanding",
    body:
      "Recognizes Malay, English, Mandarin, Tamil, and dialect nuances to keep every conversation clear.",
    content: "multilingual",
  },
  {
    title: "Accurate Speech-to-Text",
    body:
      "Advanced acoustic modeling delivers precise transcripts even in noisy, real-world environments.",
    content: "stt",
  },
  {
    title: "Cross-Platform Access",
    body:
      "Seamless deployment across web, mobile, and telephony with unified Suara APIs.",
    content: "access",
  },
  {
    title: "AI-Powered Precision",
    body:
      "RapidScreen insights continuously tune Suara voice models for faster, smarter responses.",
    content: "ai",
  },
];

export default function Home() {
  const renderFeatureContent = (content: FeatureContentKey) => {
    switch (content) {
      case "multilingual":
        return (
          <div
            className="relative h-[320px] overflow-hidden rounded-[22px]"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
            }}
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
                )}
              />
            </div>
            <div
              className="absolute left-1/2 top-[56%] grid h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
              style={{
                background:
                  "radial-gradient(75% 60% at 50% 35%, #e9f1ff, #dbe7ff)",
                boxShadow:
                  "0 10px 26px rgba(4,9,20,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
              }}
              aria-hidden="true"
            >
              <span
                className="absolute inset-[-18px] rounded-full"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(207,224,255,0.48), rgba(207,224,255,0) 70%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              />
              <Image
                src="/assets/microphone-blue.svg"
                alt="Microphone"
                width={33}
                height={33}
                className="relative drop-shadow-[0_1px_1px_rgba(4,9,20,0.12)]"
              />
            </div>
            {mlBubbles.map((bubble) => (
              <span
                key={bubble.text}
                className={cn(
                  "absolute rounded-[12px] bg-[#2563eb] px-4 py-3 text-sm font-bold text-white",
                  bubble.className
                )}
                style={{ boxShadow: "0 10px 24px rgba(37,99,235,0.18)" }}
              >
                {bubble.text}
                <span className="absolute bottom-[-14px] left-1/2 h-0 w-0 -translate-x-1/2 border-[8px] border-transparent border-t-[#2563eb] drop-shadow-[0_2px_2px_rgba(37,99,235,0.18)]" />
              </span>
            ))}
          </div>
        );
      case "stt":
        return (
          <div
            className="relative grid min-h-[260px] place-items-center overflow-hidden rounded-[22px]"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-90">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
                )}
              />
            </div>
            <div
              className="absolute left-[4%] top-1/2 h-[166px] w-[84px] -translate-y-1/2 rounded-full bg-[#2563eb1a]"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px rgba(37,99,235,0.1)",
              }}
            />
            <div
              className="absolute right-[12%] top-1/2 h-[166px] w-[84px] -translate-y-1/2 rounded-full bg-[#2563eb1a]"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px rgba(37,99,235,0.1)",
              }}
            />
            <div className="absolute left-[12%] top-1/2 flex h-[208px] w-[85px] -translate-y-1/2 items-center justify-center rounded-full bg-[#2563eb33] p-5">
              <ScrollingWaveform height={150} barWidth={4} barGap={3} barColor="#2563EB" />
            </div>
            <button
              className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full"
              style={{
                background:
                  "radial-gradient(65% 60% at 50% 35%, #0338c9, #2563EB)",
                boxShadow:
                  "0 16px 36px rgba(30,63,174,0.3), inset 0 -10px 22px rgba(0,0,0,0.25), inset 0 10px 16px rgba(255,255,255,0.22)",
              }}
              aria-label="Record"
            >
              <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-transparent">
                <Image src="/assets/microphone-2.svg" alt="" width={33} height={33} />
              </span>
            </button>
            <div className="absolute right-[12%] top-1/2 flex h-[208px] w-[85px] -translate-y-1/2 items-center justify-center rounded-full bg-[#2563eb33] p-5">
              <div className="flex h-[140px] w-[140px] items-center justify-center rotate-90 ml-3">
                <BarVisualizer state="listening" barCount={15} demo />
              </div>
            </div>
          </div>
        );
      case "access":
        return (
          <div
            className="relative h-[260px] overflow-hidden rounded-[18px]"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
            }}
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
                )}
              />
            </div>
            <div className="absolute inset-x-0  top-[20%] h-[600px] rounded-full border border-blue-500/60" />
            <div className="absolute left-[10%]  top-[40%] h-[600px] w-[80%] rounded-full border border-[#72A2F9]" />
            <div
              className="absolute left-[4%] top-[50%] grid h-[64px] w-[64px] place-items-center rounded-full text-white"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
                boxShadow:
                  "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Image src="/assets/icon-chat.svg" alt="Chat" width={26} height={26} />
            </div>
            <div
              className="absolute left-[40%] lg:left-[45%] top-[8%] grid h-[64px] w-[64px] place-items-center rounded-full text-white"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
                boxShadow:
                  "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Image src="/assets/icon-globe.svg" alt="Web" width={26} height={26} />
            </div>
            <div
              className="absolute right-[4%] top-[50%] grid h-[64px] w-[64px] place-items-center rounded-full text-white"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
                boxShadow:
                  "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Image src="/assets/icon-phone.svg" alt="Phone" width={24} height={24} />
            </div>
          </div>
        );
      case "ai":
        return (
          <div
            className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-[18px]"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
            }}
          >
            <GridPattern
              style={{ border: "none" }}
              width={40}
              height={40}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
              )}
            />
            <div className="relative h-full w-full">
              <div className="absolute left-[6%] lg:left-[22%] bottom-[45%] flex gap-5">
                {["/assets/chatgpt.png", "/assets/llama.png"].map((src) => (
                  <div
                    key={src}
                    className="w-max rounded-xl bg-white p-3 text-3xl font-semibold text-[#3E80F7]"
                    style={{ boxShadow: "inset 0 1px 6px rgba(37,99,235,0.1)" }}
                  >
                    <Image src={src} alt="Model" width={100} height={60} />
                  </div>
                ))}
              </div>
              <div
                className="absolute mt-4 left-[25%] lg:left-[35%] w-max rounded-xl bg-white px-6 py-4 text-3xl font-semibold text-[#3E80F7]"
                style={{ boxShadow: "inset 0 1px 6px rgba(37,99,235,0.1)" }}
              >
                <Image src="/assets/elevenlabs.png" alt="ElevenLabs" width={100} height={60} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const pulseDelays = [
    "0s",
    "calc(var(--pulse-duration) / 3)",
    "calc(2 * var(--pulse-duration) / 3)",
  ];

  return (
    <>
      <div className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center bg-[var(--bg)] px-4 pt-[97px] text-[var(--ink)] sm:px-6">
        <section className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl flex-col items-center text-center">
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb] bg-[#2563eb0f] px-[14px] py-[6px] text-[12px] font-medium tracking-[0.02em] text-[#40475a]">
              <span className="inline-flex text-[#2563eb]" aria-hidden="true">
                <Image src="/assets/flash.png" alt="" width={13} height={13} />
              </span>
              AI-Powered
            </span>
            <h1 className="flex flex-col items-center gap-3 text-[clamp(36px,6vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              <span>Cutting edge voice models</span>
              <span>
                for <span className="text-[clamp(46px,7vw,80px)] text-[#2563eb]">Malaysians.</span>
              </span>
            </h1>
            <p className="mt-2 text-[clamp(18px,2.2vw,24px)] leading-[1.4] text-[var(--muted)]">
              Empowering voices across Malaysia with cutting-edge AI technology
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(37,99,235,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                href="#contact"
              >
                <span className="inline-flex text-white" aria-hidden="true">
                  <Image src="/assets/microphone-2.svg" alt="" width={18} height={18} />
                </span>
                Speak to Suara
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb24] px-6 py-3 text-[15px] font-semibold text-[#2563eb] transition hover:-translate-y-0.5"
                href="#learn-more"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="relative mt-12 mx-auto flex h-[400px] w-full max-w-7xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-[320px] w-[320px] place-items-center z-20">
            <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
              {pulseDelays.map((delay) => (
                <span
                  key={delay}
                  className="pulse-ring-anim absolute block h-[44%] w-[44%] rounded-full bg-[#2563EB40]"
                  style={{
                    borderWidth: "var(--pulse-border)",
                    borderColor: "rgba(var(--pulse-color), var(--pulse-alpha))",
                    animationDelay: delay,
                    transform: "scale(0.7)",
                  }}
                />
              ))}
            </div>
            <button
              className="relative z-20 grid h-[140px] w-[140px] place-items-center rounded-full bg-[rgba(37,99,235,0.84)] text-white shadow-[0_18px_40px_rgba(30,64,175,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)] transition active:translate-y-[1px] active:scale-[0.995]"
              aria-label="Start speaking"
            >
              <Image src="/assets/microphone-2.svg" alt="" width={28} height={28} priority />
            </button>
            {heroBubbles.map((bubble) => (
              <span
                key={bubble.text}
                className={cn(
                  "absolute z-30 whitespace-nowrap rounded-2xl border border-[#d6e4ff] px-3 py-2 font-semibold text-[var(--chip-ink)] mx-20 lg:mx-0",
                  bubble.position
                )}
                style={{
                  backgroundColor: "var(--chip-bg)",
                  boxShadow: "var(--shadow)",
                  transform: bubble.transform,
                }}
              >
                {bubble.text}
              </span>
            ))}
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full max-w-[360px] lg:max-w-7xl justify-center opacity-90">
            <StaticWaveform
              height={140}
              barWidth={10}
              barGap={7}
              fadeEdges
              barColor="#90A4F3"
              className="w-full"
            />
          </div>
        </section>

        <section id="how" className="mt-28 flex w-full justify-center px-4">
          <div className="flex w-full max-w-7xl flex-col items-center gap-8 text-center">
            <h2 className="text-[clamp(48px,5.5vw,64px)] font-medium text-[var(--ink)]">
              How <span className="font-semibold text-[#2563eb]">Suara</span> Works
            </h2>
            <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.5] text-[#04091480]">
              Voice AI designed for real conversations with seamless integration with leading AI platforms.
            </p>
            <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
                <div className="relative z-10 px-8 pb-6 pt-8 md:mb-10">
                  <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Voice Input</h3>
                  <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                    Capture natural speech across Malay, English, Mandarin, and local dialects directly from web, phone, or WhatsApp.
                  </p>
                </div>
                <div className="relative z-10 mx-8 mb-6 h-20 rounded-[18px]">
                  <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                    <GridPattern
                      style={{ border: "none" }}
                      width={40}
                      height={40}
                      className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
                      )}
                    />
                  </div>
                  <StaticWaveform
                    height={150}
                    barWidth={4}
                    barGap={8}
                    barColor="#2563eb"
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
                  />
                  <ScrollingWaveform
                    height={150}
                    barWidth={4}
                    barGap={8}
                    speed={40}
                    fadeEdges
                    barColor="#2563eb"
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  />
                </div>
              </div>

              <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
                <div className="relative z-10 px-8 pb-6 pt-8">
                  <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">AI Processing</h3>
                  <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                    Smart language understanding powered by Ilmu GPT and Llama ensures accurate comprehension and transcription.
                  </p>
                </div>
                <div className="relative z-10 mx-8 mb-6 flex h-[240px] items-center justify-center overflow-hidden rounded-[22px]">
                  <div className="absolute bottom-[10%] flex h-full w-[690px] items-center justify-center">
                    <Image
                      src="/assets/wavy-lines.svg"
                      alt=""
                      width={200}
                      height={100}
                      style={{ width: "500px", height: "500px" }}
                      className="absolute"
                    />
                  </div>
                  <div className="relative grid h-full w-full place-items-center">
                    <span
                      className="absolute h-[95%] w-[65%] rounded-full"
                      aria-hidden="true"
                      style={{
                        background:
                          "radial-gradient(55% 55% at 50% 40%, rgba(147,180,255,0.35), rgba(147,180,255,0.12) 60%, rgba(147,180,255,0) 72%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 30px rgba(4,9,20,0.1)",
                        filter: "blur(0.3px)",
                      }}
                    />
                    <div
                      className="relative grid h-[150px] w-[150px] place-items-center overflow-hidden rounded-full"
                      style={{
                        boxShadow:
                          "0 22px 48px rgba(30,63,174,0.35), inset 0 -12px 30px rgba(0,0,0,0.25), inset 0 10px 18px rgba(255,255,255,0.22)",
                      }}
                    >
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            "radial-gradient(60% 60% at 50% 35%, #5a85ff 0%, #1e3fae 100%)",
                        }}
                      />
                      <OrbAutoPlay />
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            "radial-gradient(120% 80% at 40% 10%, rgba(255,255,255,0.45), rgba(255,255,255,0) 45%), radial-gradient(70% 60% at 60% 80%, rgba(255,255,255,0.1), rgba(255,255,255,0) 60%)",
                          mixBlendMode: "screen",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
                <div className="relative z-10 px-8 pb-6 pt-8">
                  <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Voice Output</h3>
                  <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                    Powered by Eleven Labs, generate smooth, natural responses with realistic voices for seamless conversations.
                  </p>
                </div>
                <div className="relative z-10 mx-8 mb-6 flex h-full items-end justify-center rounded-[22px]">
                  <div className="pointer-events-none absolute inset-0 opacity-85">
                    <GridPattern
                      style={{ border: "none" }}
                      width={40}
                      height={40}
                      className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]"
                      )}
                    />
                  </div>
                  <div className="relative flex w-full items-end justify-center px-6 pb-6">
                    <ConversationDemo />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="features" className="mt-28 flex w-full flex-col items-center px-4">
          <div className="flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-4xl font-semibold text-[#29282b]">
              Suara <span className="text-[#3e80f7]">×</span> RapidScreen
            </h2>
            <p className="max-w-xl text-2xl leading-[1.55] text-[#29282b80] lg:text-right">
              Our advanced AI models are trained to understand diverse Malaysian dialects and languages through RapidScreen AI, ensuring accurate voice recognition across all communities.
            </p>
          </div>

          <div className="mt-20 grid w-full max-w-7xl grid-cols-1 gap-7 md:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="relative flex min-h-[220px] flex-col gap-4 overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white p-8 shadow-[0_18px_38px_rgba(4,9,20,0.08)]"
              >
                <div className="relative z-10">
                  <h3 className="text-[28px] font-semibold text-[#29282b]">{card.title}</h3>
                  <p className="mt-3 text-xl leading-[1.6] text-[rgba(41,40,43,0.72)]">{card.body}</p>
                </div>
                <div className="relative z-10 mt-4 flex-1">
                  {renderFeatureContent(card.content)}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
              </div>
            ))}
          </div>
        </section>

        <footer className="relative mt-28 w-full overflow-hidden bg-white px-4 pb-10 pt-14">
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col">
              <div className="text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.01em] text-[#040914]">
                <span>Suara</span>
                <span className="text-[#2563eb]">.ai</span>
              </div>
              <p className="mt-3 text-base leading-[1.6] text-[rgba(4,9,20,0.65)]">
                Empowering voices across Malaysia with cutting-edge AI technology. Making voice AI accessible for everyone.
              </p>
            </div>
            <nav className="grid justify-items-start gap-6" aria-label="Footer">
              <div className="w-full">
                <h4 className="mb-3 font-semibold text-[#0b1323]">Resources</h4>
                <ul className="grid gap-3 text-[rgba(4,9,20,0.70)]">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#features", label: "Features" },
                    { href: "#how", label: "How It Works" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a className="transition hover:text-[#0b1323]" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <hr className="my-10 mx-auto max-w-7xl border-t border-[rgba(23,23,23,0.08)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-5 text-[rgba(4,9,20,0.75)] md:flex-row md:items-center md:justify-between">
            <div className="inline-flex items-center gap-2 text-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(4,9,20,0.20)] text-[12px]">
                ©
              </span>
              <span>{new Date().getFullYear()} Suara.ai. All rights reserved</span>
            </div>
            <div className="inline-flex items-center gap-6 text-sm" role="navigation" aria-label="Legal">
              <a className="border-b border-[rgba(4,9,20,0.18)] pb-[2px] transition hover:border-[rgba(4,9,20,0.36)]" href="/terms">
                Terms of Service
              </a>
              <a className="border-b border-[rgba(4,9,20,0.18)] pb-[2px] transition hover:border-[rgba(4,9,20,0.36)]" href="/privacy">
                Privacy Policy
              </a>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-[-22px] z-0 select-none text-center text-[20rem] font-extrabold leading-[0.9] text-transparent"
            style={{
              background: "linear-gradient(180deg, #2563EB, rgba(37,99,235,0.12))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              opacity: 0.2,
            }}
            aria-hidden="true"
          >
            Suara.ai
          </div>
        </footer>
      </div>
    </>
  );
}
