import { cn } from "@/lib/utils";

export const Lights: React.FC<{ className?: React.ReactNode }> = ({
  className
}) => (
  <div
    className={cn("w-full h-full absolute overflow-hidden invert-0", className)}
  >
    <div
      className={"w-full h-full relative invert-0"}
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%,var(--blue-500) 0deg,var(--cyan-400) 180deg,var(--yellow-400) 1turn)",
        filter: "blur(75px)",
        opacity: "20%"
      }}
    />
  </div>
);
