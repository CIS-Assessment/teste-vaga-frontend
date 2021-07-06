const toBr = (date) => {
  return date.split("-").reverse().join("/");
};

export { toBr };
