"use client";
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({
  chart,
  theme = "default",
}: {
  chart: string;
  theme: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async (div: HTMLDivElement) => {
      mermaid.initialize({
        theme,
      });

      const { svg } = await mermaid.render(window.crypto.randomUUID(), chart);
      div.innerHTML = svg;
    };
    if (divRef.current !== null) {
      renderDiagram(divRef.current);
    }
  }, [divRef, chart, theme]);

  return <div className="mermaid" ref={divRef}></div>;
}
