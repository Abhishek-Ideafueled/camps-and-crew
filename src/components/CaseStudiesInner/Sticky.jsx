import React, { useEffect, useRef, useState } from "react"

export default function Sticky(props) {
  const [offset, setOffset] = useState()
  const [height, setHeight] = useState(0)
  const [style, setStyle] = useState({})
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const boundingRect = elementRef.current.getBoundingClientRect()
      if (!offset) {
        setOffset(boundingRect.y)
      }

      if (height !== boundingRect.height) {
        setHeight(boundingRect.height)
      }
    }
  },[])

  useEffect(() => {
    if (offset) {
      setStyle({ position: "fixed", top: offset, zIndex: 99 })
    }
  }, [offset])

  return (
    <>
      <div ref={elementRef} style={style}>
        {props.children}
      </div>
      <div style={{ visibility: "hidden", height }} />
    </>
  )
}
