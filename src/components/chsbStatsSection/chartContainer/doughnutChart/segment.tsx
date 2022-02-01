import React from 'react'

type Props = {
  segmentData: {
    color: string
    rotation?: number
    strokeDasharray: number
  }
}

const Segment = ({
  segmentData: { color, rotation, strokeDasharray },
}: Props) => (
  <circle
    cx='76.5'
    cy='76.5'
    fill='transparent'
    opacity='1'
    r='60'
    stroke={color}
    strokeDasharray={`${strokeDasharray} 1880`}
    strokeWidth='20'
    style={{ transform: `rotateZ(${rotation}deg)` }}
  />
)

export default Segment
