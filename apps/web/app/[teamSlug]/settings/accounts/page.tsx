import { ConnectedAccounts } from "@template/feature/settings/server";
import { Metadata } from "next";

export default async function AccountsSettings() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Connected accounts
      </h2>
      <ConnectedAccounts />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Connected accounts",
  description: "Manage your connected accounts",
};