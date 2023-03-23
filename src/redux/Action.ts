export function increment(): object {
  return {
    type: 'INCREMENT',
  };
}
export function decrement(): object {
  return {
    type: 'DECREMENT',
  };
}
export function reset(): object {
  return { type: 'RESET' };
}
