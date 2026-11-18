'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';

import {
  TYPE_SAMPLE_MAX_LENGTH,
  typeSampleSchema,
  type TypeSampleInput
} from '@/lib/case-story/type-sample.schema';

// Texto que la persona escribe para verlo en toda la escala tipográfica
export function useTypeSample() {
  const { register, control } = useForm<TypeSampleInput>({
    resolver: zodResolver(typeSampleSchema),
    defaultValues: { sample: '' }
  });

  const sample = useWatch({ control, name: 'sample' });
  const field = register('sample');

  return { field, sample, maxLength: TYPE_SAMPLE_MAX_LENGTH };
}
