'use client'

import { useState } from 'react'
import { X, Zap } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-foreground text-primary-foreground">
      <div className="container-custom flex items-center justify-center gap-2 py-2.5 text-sm tracking-wide">
        <Zap className="h-3.5 w-3.5 text-accent fill-accent flex-shrink-0" />
        <p>
          <span className="font-semibold text-accent">Verified Seller</span>
          <span className="mx-2 opacity-40">|</span>
          All items personally tested &amp; listed — fast UK delivery
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
