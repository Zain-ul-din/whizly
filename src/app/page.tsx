import { Lights } from "@/components/lights";
import Link from "next/link";
import React from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Lights />
        {/* bg-gradient-to-r from-[#7928CA] to-[#FF0080] */}
        <section className="w-full relative py-12 md:py-24 lg:py-32 pb-12 ">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="space-y-4 text-neutral-900">
              <h1 className="text-4xl font-bold leading-9 sm:text-5xl md:text-6xl">
                Automate Your Business with <br />
                <h1 className="my-2 italic text-5xl md:text-6xl leading-relaxed text-transparent text-clip bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  Whizly
                </h1>
              </h1>
              <p className="max-w-[700px] mx-auto text-lg  md:text-xl">
                Whizly is a powerful business automation tool that streamlines
                your workflows, boosts productivity, and helps you focus on what
                matters most.
              </p>
              <div className="flex justify-center pt-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  pb-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-[#00b4db] to-[#0083b0] rounded-lg p-6 text-primary-foreground">
                <div className="flex flex-col items-center justify-center h-full">
                  <WorkflowIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">WhatsApp Ping</h3>
                  <p className="text-sm  text-center text-white">
                    Send Whatsapp messages in bulk and stay ahead from your
                    competitors
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ee7752] to-[#e73c7e] rounded-lg p-6 text-primary-foreground">
                <div className="flex flex-col items-center justify-center h-full">
                  <CalendarIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email automation</h3>
                  <p className="text-sm text-center text-white">
                    Effortlessly send myriads of mails on one click.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] rounded-lg p-6 text-primary-foreground">
                <div className="flex flex-col items-center justify-center h-full">
                  <SignalIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Intelligent Analytics
                  </h3>
                  <p className="text-sm text-center text-white">
                    Stay on top of your business with customer analytics.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-lg p-6 text-primary-foreground">
                <div className="flex flex-col items-center justify-center h-full">
                  <CheckIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Silky AI-Powered Content
                  </h3>
                  <p className="text-sm text-center text-white">
                    Experience the smoothness of AI-crafted content that flows
                    effortlessly and engages your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Whizly. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SignalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function WorkflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}
