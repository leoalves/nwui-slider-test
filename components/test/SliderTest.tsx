import * as React from 'react';

import { Slider } from '~/components/nativewindui/Slider';

export default function SliderExample() {
  const [sliderValue, setSliderValue] = React.useState(0.5);
  return <Slider value={sliderValue} onValueChange={setSliderValue} />;
}