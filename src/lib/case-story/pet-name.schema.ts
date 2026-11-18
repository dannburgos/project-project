import { z } from 'zod';

export type PetNameRules = {
  requiredMessage: string;
  tooLongMessage: string;
  maxLength: number;
};

// Nombre de la mascota en el campo de prueba del sistema de diseño. Los
// mensajes llegan del contenido del caso
export function createPetNameSchema({
  requiredMessage,
  tooLongMessage,
  maxLength
}: PetNameRules) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, requiredMessage)
      .max(maxLength, tooLongMessage)
  });
}

export type PetNameInput = z.infer<ReturnType<typeof createPetNameSchema>>;
