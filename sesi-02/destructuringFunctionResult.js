// Destructuring Function Result

const getUser = () => {
  return {
    name: "Muhammad Irfan Zidni",
    handle: "@irfanzidni11",
    location: "Semarang, Indonesia",
  };
};

// extraction
const { name, handle, location } = getUser();

console.log(name, handle, location);
