import React from "react";

export default function PageWrap({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow scroll-smooth min-h-screen w-full h-full bg-brandcolor/5">
      {children}
    </main>
  );
}
