import { ImageResponse } from "next/server";

export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          color: "rgb(12, 10, 9)",
          background:
            "linear-gradient(to right top, rgb(103, 232, 249), rgb(147, 197, 253))",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size.width / 4,
        }}
      >
        a
      </div>
    ),
    {
      ...size,
    }
  );
}
