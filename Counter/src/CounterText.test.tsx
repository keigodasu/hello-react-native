import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CounterText from '../src/CounterText';

describe('CounterText', () => {
  it('通常のCounterTextを描写できる', () => {
    const component = renderer.create(<CounterText count={0} />);
    expect(component).toMatchSnapshot();
  });
  it('カウントが10以上のときのテキストが表示されているCounterText', () => {
    const component = renderer.create(<CounterText count={10} />);
    expect(component).toMatchSnapshot();
  });
});
