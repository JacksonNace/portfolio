"use client"

import { motion } from "framer-motion"

// Hero dimensions
const heroWidth = 800
const heroHeight = 600
const safeRadius = 300 // untouchable center
const stars = [
  { x: 50, y: 50, size: 50, color: "#ffffff", rotate: 15, twinkleDelay: 0 },
  { x: 700, y: 50, size: 60, color: "#7bf5ff", rotate: -10, twinkleDelay: 0.5 },
  { x: 150, y: 550, size: 55, color: "#f5d07f", rotate: 20, twinkleDelay: 1 },
  { x: 650, y: 500, size: 65, color: "#ffffff", rotate: -15, twinkleDelay: 1.5 },
  { x: 50, y: 300, size: 50, color: "#7bf5ff", rotate: 10, twinkleDelay: 0.3 },
  { x: 750, y: 350, size: 60, color: "#f5d07f", rotate: -5, twinkleDelay: 0.7 },
  { x: 400, y: 580, size: 60, color: "#ffffff", rotate: 25, twinkleDelay: 1.2 },
  { x: 100, y: 150, size: 55, color: "#ffffff", rotate: -20, twinkleDelay: 0.4 },
  { x: 700, y: 200, size: 50, color: "#7bf5ff", rotate: 15, twinkleDelay: 0.6 },
  { x: 250, y: 500, size: 60, color: "#f5d07f", rotate: -10, twinkleDelay: 0.8 },
  { x: 600, y: 550, size: 65, color: "#ffffff", rotate: 20, twinkleDelay: 1.0 },
  { x: 50, y: 450, size: 50, color: "#7bf5ff", rotate: -15, twinkleDelay: 0.2 },
  { x: 750, y: 100, size: 55, color: "#f5d07f", rotate: 10, twinkleDelay: 0.9 },
  { x: 400, y: 50, size: 60, color: "#ffffff", rotate: -25, twinkleDelay: 1.3 },
]

export default function HeroShapes() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${heroWidth} ${heroHeight}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      {stars.map((star, i) => {
        const s = star.size / 2
        const path1 = `M ${-s} 0 L ${s} 0`
        const path2 = `M 0 ${-s} L 0 ${s}`

        return (
          <motion.g
            key={i}
            transform={`translate(${star.x}, ${star.y}) rotate(${star.rotate})`}
          >
            {/* X shape drawn */}
            <motion.path
              d={path1}
              stroke={star.color}
              strokeWidth={4}
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            />
            <motion.path
              d={path2}
              stroke={star.color}
              strokeWidth={4}
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: i * 0.3 + 0.1 }}
            />

            {/* Twinkle effect */}
            <motion.circle
              cx={0}
              cy={0}
              r={2 + Math.random() * 2}
              fill={star.color}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                repeatType: "loop",
                delay: star.twinkleDelay,
              }}
            />
          </motion.g>
        )
      })}
    </motion.svg>
  )
}
