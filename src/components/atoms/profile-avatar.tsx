type ProfileAvatarProps = {
  className?: string;
};

// Avatar ilustrado de una persona usuaria: un retrato de línea simple, para
// no confundirla con una persona real. Es decorativo.
export function ProfileAvatar({ className }: ProfileAvatarProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="16" r="7" />
      <path d="M13 14c2-6 12-6 14 0" />
      <path d="M8 35c2-7 7-10 12-10s10 3 12 10" />
      <circle cx="17.5" cy="16.5" r="0.6" fill="currentColor" />
      <circle cx="22.5" cy="16.5" r="0.6" fill="currentColor" />
      <path d="M18 19.5c1 0.8 3 0.8 4 0" />
    </svg>
  );
}
