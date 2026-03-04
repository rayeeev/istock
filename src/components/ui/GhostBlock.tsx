interface GhostBlockProps {
  className?: string;
}

export default function GhostBlock({ className = "" }: GhostBlockProps) {
  return <div aria-hidden="true" className={`ghost-skeleton ${className}`} />;
}
