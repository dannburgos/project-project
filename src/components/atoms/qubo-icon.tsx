import {
  Bell,
  CalendarDays,
  CircleHelp,
  MessageCircle,
  Percent,
  QrCode,
  Receipt,
  ShieldCheck,
  Store,
  TrendingUp,
  User,
  WalletCards,
  type LucideIcon
} from 'lucide-react';

import type { QuboIconId } from '@/content/qubo-story.types';

const ICONS: Record<QuboIconId, LucideIcon> = {
  store: Store,
  wallet: WalletCards,
  qr: QrCode,
  sales: TrendingUp,
  percent: Percent,
  receipt: Receipt,
  calendar: CalendarDays,
  shield: ShieldCheck,
  chat: MessageCircle,
  bell: Bell,
  user: User,
  help: CircleHelp
};

type QuboIconProps = {
  id: QuboIconId;
  className?: string;
};

// Íconos de línea fina de la app de Pulso
export function QuboIcon({ id, className }: QuboIconProps) {
  const Icon = ICONS[id];

  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
