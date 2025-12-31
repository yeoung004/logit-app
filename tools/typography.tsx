export const createTypography = (fontFamily: string) => ({
  h1: {
    fontFamily,
    fontSize: 32,
    fontWeight: "700" as const,
    lineHeight: 40,
  },
  h2: {
    fontFamily,
    fontSize: 24,
    fontWeight: "700" as const,
    lineHeight: 32,
  },
  h3: {
    fontFamily,
    fontSize: 20,
    fontWeight: "600" as const,
    lineHeight: 28,
  },
  subtitle: {
    fontFamily,
    fontSize: 18,
    fontWeight: "500" as const,
    lineHeight: 24,
  },
  body: {
    fontFamily,
    fontSize: 16,
    fontWeight: "400" as const,
    lineHeight: 22,
  },
  caption: {
    fontFamily,
    fontSize: 12,
    fontWeight: "400" as const,
    lineHeight: 16,
  },
});

export type TypographyVariant = keyof ReturnType<typeof createTypography>;
