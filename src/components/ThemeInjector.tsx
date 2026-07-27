import { getTenantConfig } from "@/lib/tenants";

export function ThemeInjector() {
  const { theme } = getTenantConfig();

  const css = `
    :root {
      --background: ${theme.background};
      --foreground: ${theme.text};
      --card: ${theme.surface};
      --card-foreground: ${theme.text};
      --popover: ${theme.surface};
      --popover-foreground: ${theme.text};
      --primary: ${theme.primary};
      --primary-foreground: #FFFFFF;
      --muted-foreground: ${theme.textMuted};
      --border: ${theme.border};
      --input: ${theme.border};
      --ring: ${theme.primary};
      --sidebar-primary: ${theme.primary};
      --sidebar-border: ${theme.border};
      --sidebar-ring: ${theme.primary};
      --navy: ${theme.secondary};
      --brand-emerald: ${theme.accent};
      --brand-success: ${theme.success};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}