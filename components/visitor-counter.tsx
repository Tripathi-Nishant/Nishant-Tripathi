"use client"

import { useEffect, useRef, useState } from "react"

const COUNTER_URL = "https://api.counterapi.dev/v1/nishant-portfolio/page-visits/up"

export function VisitorCounter() {
  const hasCounted = useRef(false)
  const [visits, setVisits] = useState<number | null>(null)

  useEffect(() => {
    if (hasCounted.current) return
    hasCounted.current = true

    fetch(COUNTER_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Visitor counter unavailable")
        return response.json()
      })
      .then((result) => {
        const count = result?.count ?? result?.data?.count
        if (typeof count === "number") setVisits(count)
      })
      .catch(() => {
        // Keep the compact counter hidden if the external service is unavailable.
      })
  }, [])

  if (visits === null) return null

  return (
    <div
      className="mt-2 flex justify-center px-2 font-mono text-[10px] tracking-[0.16em] text-neutral-400 dark:text-neutral-500"
      aria-label={`${visits} portfolio visits`}
    >
      {String(visits).padStart(6, "0")}
    </div>
  )
}
