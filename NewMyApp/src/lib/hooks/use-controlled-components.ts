import React from 'react';

export default function useControlledComponent<T>(initialValue: T) {
  const [value, setValue] = React.useState(initialValue);

  function onChangeText(newVlue: T) {
    setValue(newVlue);
  }

  return {
    value,
    onChangeText,
  };
}
