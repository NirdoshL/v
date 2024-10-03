import React from "react";

export default function PageWrap({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow max-w-[1600px] mx-auto scroll-smooth min-h-screen w-full h-full">
      {children}
    </main>
  );
}
