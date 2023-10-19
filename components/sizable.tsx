"use client";

export interface SizableProps {
  width: number;
  className: string;
  children: string | JSX.Element;
}

export default function Sizable({ width, children, className }: SizableProps) {
  return (
    <div
      className={className}
      style={{
        width: "" + width + "vw",
        position: "relative",
        left: "50%",
        marginLeft: "-" + width / 2 + "vw",
      }}
    >
      {children}
    </div>
  );
}
