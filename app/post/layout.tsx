export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return <div style={{ color: "blue" }}>{children}</div>;
}
