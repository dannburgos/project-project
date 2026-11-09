'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiDayStrip } from '../molecules/planti-day-strip';
import { PlantiReminderCard } from '../molecules/planti-reminder-card';

type PlantiRoutineScreenProps = {
  // En el recorrido, el día elegido y el día que se está tocando los marca la
  // escena; solo, la persona elige tocando
  selectedDay?: string;
  tappedDay?: string;
};

// Pestaña Rutina: donde termina el flujo. Los avisos ya están activos, se ve
// la semana y, al tocar un día, lo que toca ese día con su hora. Arranca en
// hoy, que es jueves.
export function PlantiRoutineScreen({
  selectedDay,
  tappedDay
}: PlantiRoutineScreenProps) {
  const { tab } = plantiMessages.routine;
  const [chosenKey, setChosenKey] = useState<string>('thu');
  const selectedKey = selectedDay ?? chosenKey;
  const selected = tab.days.find(day => day.key === selectedKey) ?? tab.days[0];
  const task = 'task' in selected ? selected.task : undefined;

  return (
    <div className="planti-screen planti-routine">
      <h1 className="planti-routine__title">{tab.title}</h1>
      <p className="planti-routine__status">
        <Bell aria-hidden="true" />
        {tab.status}
      </p>
      <PlantiDayStrip
        days={tab.days.map(day => ({
          key: day.key,
          label: day.label,
          number: day.number,
          care: 'care' in day ? day.care : undefined,
          isToday: 'isToday' in day ? day.isToday : undefined,
          isSelected: day.key === selectedKey
        }))}
        onSelect={setChosenKey}
        tappedKey={tappedDay}
      />
      <h2 className="planti-reminders__day">{selected.heading}</h2>
      {task ? (
        <ol
          key={selected.key}
          className="planti-reminders planti-reminders--tab"
        >
          <PlantiReminderCard
            title={task.title}
            hour={task.hour}
            period={task.period}
            how={task.how}
            careKey={task.careKey}
            care={task.care}
            frequency={task.frequency}
          />
        </ol>
      ) : (
        <p className="planti-routine__empty">{tab.empty}</p>
      )}
    </div>
  );
}
