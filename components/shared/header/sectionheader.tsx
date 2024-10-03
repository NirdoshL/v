import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  title: string;
  link?: string;
  linkclass?: string;
  mainClassName?: string;
};

export default function SectionHeader({
  className,
  linkclass,
  title,
  link,
  mainClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between max-w-[1400px] items-center text-center px-2 pt-4 my-3 lg:my-8",
        mainClassName
      )}
    >
      <h1
        className={cn(
          " font-bold text-xl lg:text-3xl capitalize tracking-wide w-full text-start",
          className
        )}
      >
        {title}
      </h1>

      <Link
        className={cn(
          "mx-1 w-[110px] flex items-center justify-center font-bold text-sm md:text-md tracking-wider text-black ",
          linkclass
        )}
        href={`${link}`}
      >
        See All
        <ChevronRight />
      </Link>
    </div>
  );
}
