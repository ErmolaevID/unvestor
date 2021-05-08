export const useProportions = () => {
  const [
    wHD, 
    hHD, 
  ] = [
    100 / 1440,
    100 / 900,
  ];
  return { wHD, hHD };
};