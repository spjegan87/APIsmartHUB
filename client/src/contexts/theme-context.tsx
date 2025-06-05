import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"
type AccessibilityMode = "normal" | "high-contrast" | "large-text"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  accessibilityMode: AccessibilityMode
  setTheme: (theme: Theme) => void
  setAccessibilityMode: (mode: AccessibilityMode) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  accessibilityMode: "normal",
  setTheme: () => null,
  setAccessibilityMode: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  
  const [accessibilityMode, setAccessibilityMode] = useState<AccessibilityMode>(
    () => (localStorage.getItem("accessibility-mode") as AccessibilityMode) || "normal"
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove all accessibility classes
    root.classList.remove("high-contrast", "large-text")
    
    // Apply accessibility mode
    if (accessibilityMode !== "normal") {
      root.classList.add(accessibilityMode)
    }
  }, [accessibilityMode])

  const value = {
    theme,
    accessibilityMode,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    setAccessibilityMode: (mode: AccessibilityMode) => {
      localStorage.setItem("accessibility-mode", mode)
      setAccessibilityMode(mode)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}