let nextEntryId = 0
export const addEntry = (name) => {
  return {
    type: 'ADD_ENTRY',
    id: nextEntryId++,
    name
  }
}
