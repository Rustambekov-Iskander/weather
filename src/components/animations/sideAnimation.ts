export const sideAnimation = (axis: 'x' | 'y', duration = null, px = -50) => {
  return {
    hidden: {
      [`${axis}`]: px,
      opacity: 0,
      transition: {duration: duration}
    },
    visible: {
      [`${axis}`]: 0,
      opacity: 1,
    }
  }
}
