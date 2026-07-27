// import { meridian } from "./meridian";
import { dentistree } from "./dentistree";
import { TenantConfig } from "./types";

const tenants: Record<string, TenantConfig> = {
//   meridian,
  dentistree,
};

export function getTenantConfig(): TenantConfig {
  const slug = process.env.NEXT_PUBLIC_TENANT || "dentistree";
  const config = tenants[slug];
  if (!config) throw new Error(`Unknown tenant: ${slug}`);
  return config;
}