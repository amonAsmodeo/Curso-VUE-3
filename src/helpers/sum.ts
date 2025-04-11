export function sum(a: number, b: number) {
  return a + b;
}

// recibe un arreglo de numeros y regresa el reduce del mismo (sua todos los elementos del arreglo)
export const addArray = (arr: number[]): number => {
  // regresa el total de los numeros
  //  el 0 al final es el valor por default
  return arr.reduce((acumulado, actual) => acumulado + actual, 0);
};
