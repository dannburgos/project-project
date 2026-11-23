import { z } from 'zod';

export const TYPE_SAMPLE_MAX_LENGTH = 40;

// Texto libre para probar la escala tipográfica
export const typeSampleSchema = z.object({
  sample: z.string().max(TYPE_SAMPLE_MAX_LENGTH)
});

export type TypeSampleInput = z.infer<typeof typeSampleSchema>;
