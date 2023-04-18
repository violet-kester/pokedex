// Picks a random item from an array
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
};

// Removes an specific item from an array of items
function remove(items, item) {
  const idx = items.indexOf(item)
  if ( idx === -1) {
    return undefined
  } else {
    return items.splice(idx, 1)[0];
  }
}


export { choice, remove };

