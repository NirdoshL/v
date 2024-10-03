import React from "react";

export default function SectionWrap({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-full mb-4 px-4 lg:px-6">{children}</section>
  );
}
