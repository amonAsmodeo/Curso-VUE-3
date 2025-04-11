// Se crea una promesa que tarda un segundo en responder

export const Sleep = (seconds: number = 1) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
