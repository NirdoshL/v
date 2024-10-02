import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function SectionHeader({ title, description }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 py-14">
      <h1 className="text-5xl font-medium uppercase">{title}</h1>
      <p className="text-lg text-gray-600 max-w-[600px] mx-auto text-center">
        {description}
      </p>
    </div>
  );
}
