const foo = async () => {
  return await Promise.resolve('bar');
};

foo();
