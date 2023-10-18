export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl px-6 lg:px-0 mx-auto pt-12 pb-6">{children}</div>
  );
}
