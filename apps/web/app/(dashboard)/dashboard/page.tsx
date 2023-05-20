import { Metadata } from "next";

export default async function Page({ children }: { children?: React.ReactNode }) {
  return <>Dashboard {children}</>;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your dashboard",
};