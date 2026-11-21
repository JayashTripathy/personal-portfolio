"use client";
interface CallToActionProps {
  linkText?: string;
  linkUrl?: string;
  preText?: string;
}

export default function CallToAction({
  linkText = "Book a Free Call",
  linkUrl = "https://cal.com/jayash-tripathy/15min",
  preText = "If you're building with vision AI or VLMs, I'd love to talk.",
}: CallToActionProps) {
  return (
    <div className="mt-4 sm:mt-6 pb-6 sm:pb-8 px-6 sm:px-8 sm:flex sm:justify-between sm:items-center w-full flex-col">
      <p className="text-neutral-600 dark:text-neutral-400 font-[family-name:var(--font-instrument-serif)] italic text-base sm:text-xl mb-3 sm:mb-3">
        {preText}
      </p>
      <div className="gradient bg-gradient-to-b from-zinc-800 to-zinc-700 dark:from-zinc-800 dark:to-zinc-700 rounded-lg p-[1px] relative overflow-hidden w-full sm:w-auto mt-3 sm:mt-0">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient h-full bg-zinc-900 dark:bg-zinc-900 rounded-lg text-white text-sm sm:text-md px-4 sm:px-6 py-3 sm:py-2 w-full flex items-center justify-center transition-all group relative overflow-hidden touch-manipulation active:opacity-75"
          style={
            {
              "--x": "-90.45457%",
              "--spread": "90deg",
              "--shimmer-color": "#ffffff",
              "--radius": "8px",
              "--speed": "3s",
              "--cut": "0.05em",
              WebkitTapHighlightColor: "transparent",
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              userSelect: "none",
            } as React.CSSProperties
          }
        >
          {/* Shimmer Effect Layer */}
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />

          <div className="flex items-center relative z-20">
            <span
              className="whitespace-nowrap relative block text-sm sm:text-base"
              style={{
                maskImage:
                  "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.1) calc(var(--x) + 30%), rgba(0,0,0,1) calc(var(--x) + 100%))",
              }}
            >
              {linkText}
            </span>
          </div>
          <span
            className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),transparent_calc(var(--x)+100%))] p-px"
            style={{
              mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
            }}
          />
        </a>
      </div>
    </div>
  );
}
