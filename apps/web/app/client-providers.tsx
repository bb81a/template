"use client";

import { api } from "@template/utility/trpc-next-client";

export function ClientProviders({ children }: React.PropsWithChildren) {
  return <api.Provider>{children}</api.Provider>;
}