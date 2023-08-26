"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return <CartProvider
    currency="USD"
    shouldPersist
    cartMode="checkout-session"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
  >
    {/* The theme provider will wrap the children  and also to toggle between light and dark mode*/}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  </CartProvider>
}
