import { useEffect, EffectCallback } from 'react';

export const useEffectOnlyOnce = (func: EffectCallback) => useEffect(func, []);
