import { Avatar, Card, SectionTitle, Tooltip } from "@my-design-system/ui-react";

const AVATARS = [
  { in: "SM", name: "Spider-Man", i: 0 },
  { in: "ST", name: "Storm", i: 1 },
  { in: "WV", name: "Wolverine", i: 3 },
  { in: "IM", name: "Iron Man", i: 2 },
  { in: "CA", name: "Captain America", i: 4 },
];

export function AvatarTooltipsSection() {
  return (
    <section>
      <div className="app__bubble-stack">
        <SectionTitle number="10" title="Avatar/Tooltips" />

        <Card>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "flex-end",
            }}
          >
            {AVATARS.map((a) => (
              <div
                key={a.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Tooltip tip={a.name}>
                  <Avatar initials={a.in} index={a.i} size={56} />
                </Tooltip>
                <span
                  style={{
                    fontFamily: "Bangers, cursive",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {a.in}
                </span>
              </div>
            ))}
            <p
              style={{
                fontFamily: "Comic Neue, cursive",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#888",
                alignSelf: "center",
                marginLeft: 8,
              }}
            >
              ← hover for names
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
