export const pathFromBezierCurve = cubicBazierCurve => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis
  } = cubicBazierCurve;
  
  return `
    M ${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};
