'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  createPetNameSchema,
  type PetNameInput,
  type PetNameRules
} from '@/lib/case-story/pet-name.schema';

// Campo de prueba del sistema de diseño: valida el nombre, sacude el campo si
// falla y confirma cuando queda guardado
export function usePetNameField(rules: PetNameRules) {
  const [savedName, setSavedName] = useState<string | null>(null);
  const [shakeCount, setShakeCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PetNameInput>({
    resolver: zodResolver(createPetNameSchema(rules)),
    defaultValues: { name: '' }
  });

  const onSubmit = handleSubmit(
    data => setSavedName(data.name),
    () => {
      setSavedName(null);
      setShakeCount(count => count + 1);
    }
  );

  const field = register('name', { onChange: () => setSavedName(null) });

  return { field, onSubmit, errors, savedName, shakeCount };
}
