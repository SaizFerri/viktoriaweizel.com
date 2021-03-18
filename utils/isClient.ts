const isClient = () => {
  if (typeof window !== "undefined") {
    return true;
  }

  return false;
};

export default isClient;
