import { useState } from 'react';

export function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return [value, () => setValue((value) => value + 1)]; // update the state to force render
}
