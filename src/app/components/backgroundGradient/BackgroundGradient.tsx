"use client"

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react"
import { useEffect, useState } from "react"

export default function BackgroundGradient() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Evita hidratação incorreta
  }

  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        pointerEvents: "none", // Permite clicar através do gradiente
      }}
    >
      <ShaderGradient
        animate="on"
        brightness={0.8}
        color1="#26c2ff"
        color2="#333333"
        color3="#0791e1"
        envPreset="city"
        type="plane"
        uDensity={1.4}
        uSpeed={0.4}
        uStrength={2.5}
        uAmplitude={2.0}
        uFrequency={1.5}
        enableTransition={true}
      />
    </ShaderGradientCanvas>
  )
}