// The shape of the order object is:
// { id1: quantity, id2: quantity, ...}
// For example:
// { "425236b4-94a0-464f-873c-d3f18039c96a": 1, "deebcf71-685b-4e02-881f-376bbe615c20": 3 }

// Copies the order, decrements the quantity of the item in the order,
// and returns the copy.
// Usage:
// const updatedOrder = removeFromOrder(myOrder, someId);
// setOrder(updatedOrder)
export const removeFromOrder = (order, id) => {
  if (order[id]) {
    return { ...order, [id]: order[id] - 1 };
  }
  return order;
};

// Copies the order, increments the quantity of the item in the order,
// and returns the copy
// Usage:
// const updatedOrder = addToOrder(myOrder, someId);
// setOrder(updatedOrder)
export const addToOrder = (order, id) => {
  const currQuantity = order[id] || 0;
  return { ...order, [id]: currQuantity + 1 };
};
