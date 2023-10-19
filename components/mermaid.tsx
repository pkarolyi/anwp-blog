"use client";
import mermaid from "mermaid";
import { useEffect } from "react";
import Sizable from "./sizable";

export default function Mermaid({
  chart,
  width,
}: {
  chart: string;
  width: number;
}) {
  useEffect(() => {
    mermaid.initialize({
      theme: "default",
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    });
    mermaid.run();
  }, []);

  return (
    <Sizable className="mermaid my-8" width={width}>
      {chart}
    </Sizable>
  );
}
