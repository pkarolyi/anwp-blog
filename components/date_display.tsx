export default function DateDisplay({
  dateStr,
  className,
}: {
  dateStr: string;
  className?: string;
}) {
  const date = new Date(dateStr);
  return (
    <time className={className} dateTime={date.toISOString()}>
      {date.toLocaleString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </time>
  );
}
