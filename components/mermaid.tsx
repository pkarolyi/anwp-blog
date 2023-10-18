"use client";
import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

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
    <div
      className="mermaid my-8"
      style={
        width
          ? {
              width: "" + width + "vw",
              position: "relative",
              left: "50%",
              marginLeft: "-" + width / 2 + "vw",
            }
          : {}
      }
    >
      {chart}
    </div>
  );
}
