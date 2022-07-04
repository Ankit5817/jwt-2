import React from 'react'

export default function Hoc(Component) {
  const finalComponent = () => {
    return <Component />
  }
  return finalComponent;
}
