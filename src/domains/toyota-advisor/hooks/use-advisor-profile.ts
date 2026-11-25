'use client';

import { useState } from 'react';

import { toyotaAdvisorMessages as copy } from '../messages';
import { TOYOTA_QUESTION_PARTS, TOYOTA_QUESTIONS } from '../toyota-questions';
import { rankModels } from '../toyota-score.util';
import {
  buildRail,
  joinList,
  lowerFirst,
  toggleAnswer
} from '../toyota-view.util';
import type { ToyotaAnswers } from '../types/toyota-advisor.types';

export type ToyotaReadingSegment = { text: string; isKey: boolean };

// Perfil: cada respuesta con lo que suma, la lectura del sistema (marcada
// como interpretación) y, si se está editando una parte, su borrador con el
// impacto en el ranking antes de guardar
export function useAdvisorProfile(
  answers: ToyotaAnswers,
  editingPartId?: string
) {
  const [draft, setDraft] = useState<ToyotaAnswers>(answers);

  const labelsOf = (partId: string, source: ToyotaAnswers = answers) => {
    const part = TOYOTA_QUESTION_PARTS.find(item => item.id === partId);
    return (part?.options ?? []).filter(
      option => (source[partId] ?? []).includes(option.id) && !option.isUnsure
    );
  };

  const rows = TOYOTA_QUESTION_PARTS.map(part => {
    const chosen = labelsOf(part.id);
    return {
      id: part.id,
      label: copy.profile.rows[part.id as keyof typeof copy.profile.rows],
      values: chosen.map(option => option.label),
      sums: chosen.flatMap(option =>
        option.tag ? [copy.tags[option.tag]] : []
      ),
      isEditing: part.id === editingPartId
    };
  });

  // Lectura en una frase, con lo que viene de las respuestas resaltado
  const reading = copy.profile.reading;
  const lower = (partId: string) =>
    labelsOf(partId).map(option => lowerFirst(option.label));
  const car = [...lower('body'), ...lower('engine')];
  const budget = labelsOf('budget')[0]?.label;
  const segments: ToyotaReadingSegment[] = [
    { text: reading.start, isKey: false },
    { text: joinList(lower('use')), isKey: true },
    { text: reading.people, isKey: false },
    { text: joinList(lower('people')), isKey: true },
    { text: reading.peopleEnd, isKey: false },
    ...(car.length > 0
      ? [
          { text: reading.car, isKey: false },
          { text: joinList(car), isKey: true }
        ]
      : []),
    { text: reading.priorities, isKey: false },
    { text: joinList(lower('priorities')), isKey: true },
    ...(budget
      ? [
          { text: reading.budget, isKey: false },
          { text: budget, isKey: true }
        ]
      : [{ text: reading.noBudget, isKey: false }]),
    { text: reading.end, isKey: false }
  ];

  const ranked = rankModels(answers);
  const inBudget = ranked.filter(item => item.isInBudget).length;
  const leader = ranked[0]?.model.name;

  // Borrador del panel de edición
  const editingPart = TOYOTA_QUESTION_PARTS.find(
    part => part.id === editingPartId
  );
  const editingQuestion = TOYOTA_QUESTIONS.find(question =>
    question.parts.some(part => part.id === editingPartId)
  );
  const draftSelected = editingPart ? (draft[editingPart.id] ?? []) : [];
  const handleDraftToggle = (optionId: string) => {
    if (!editingPart) return;
    setDraft(current => ({
      ...current,
      [editingPart.id]: toggleAnswer(
        editingPart,
        current[editingPart.id] ?? [],
        optionId
      )
    }));
  };
  const draftLeader = rankModels(draft)[0]?.model.name;

  return {
    rows,
    segments,
    inBudget,
    leader,
    rail: buildRail(),
    editingPart,
    editingQuestion,
    draftSelected,
    handleDraftToggle,
    draftLeader
  };
}
