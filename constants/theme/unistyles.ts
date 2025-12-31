import { createTypography } from "@/tools/typography";

export const lightTheme = {
  colors: {
    text: "#000000",
    subText: "#8E8E93",
    primary: "#007AFF",
  },
  // 가변 글꼴 이름을 전달하여 생성
  typography: createTypography("PretendardVariable"),
} as const;
