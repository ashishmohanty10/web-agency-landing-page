"use client";

export function ProjectsScroll() {
  return (
    <>
      <div className="flex items-center gap-5 py-5 overflow-hidden">
        <div className="flex animate-infinite-scroll [--animation-delay:60s] gap-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center "
              style={{ animationDelay: `${(index + 1) * 4}s` }} //
            >
              <div className="min-w-[50rem] rounded-3xl bg-gradient-to-tr from-black to-black/30 h-[60rem]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
