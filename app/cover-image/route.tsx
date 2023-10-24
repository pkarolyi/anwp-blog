/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const inter = await fetch(
    new URL("https://anwp.blog/inter-regular.ttf")
  ).then((res) => res.arrayBuffer());
  const interMedium = await fetch(
    new URL("https://anwp.blog/inter-medium.ttf")
  ).then((res) => res.arrayBuffer());
  const interSemiBold = await fetch(
    new URL("https://anwp.blog/inter-semibold.ttf")
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const imagePath = searchParams.get("imagePath");
  const authorName = searchParams.get("authorName");
  const authorImagePath = searchParams.get("authorImagePath");
  const date = searchParams.get("date");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontFamily: "Inter",
          color: "rgb(28, 25, 23)",
        }}
      >
        <img
          src={`https://anwp.blog/${imagePath}`}
          width={size.width}
          height={size.height}
          style={{ width: "100vw", height: "100vh", position: "absolute" }}
        />
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundImage:
              "linear-gradient(to right, rgba(214, 211, 209, 1), rgba(231, 229, 228, 0.8) 40%, rgba(250, 250, 249, 0) 60%)",
          }}
        />
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
          }}
        >
          <div style={{ display: "flex", fontWeight: 500 }}>
            <div style={{ fontSize: 72 }}>anwp.blog</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              width: "75%",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "rgb(250, 250, 249)",
                textShadow: "4px 4px rgb(28, 25, 23)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                alignItems: "center",
                fontSize: 24,
              }}
            >
              <img
                src={`https://anwp.blog/${authorImagePath}`}
                width={96}
                height={96}
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 9999,
                  borderColor: "rgb(250, 250, 249)",
                  borderWidth: 2,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontWeight: 600 }}>{authorName}</div>
                <div>
                  {new Date(date || 0).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: inter,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "Inter",
          data: interSemiBold,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
