const convert = (r,g,b) => {
  let c = 0, m = 0, y = 0, k = 0;

  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const white = Math.max(red, green, blue);

  if (white === 0) {
    k = 1;
  } else {
    c = (white - red) / white;
    m = (white - green) / white;
    y = (white - blue) / white;
    k = 1 - white;
  }
  
  return [c,m,y,k];
}

export { convert };