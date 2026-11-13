import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "USDT Chhattisgarh: buy and sell USDT via CDM or counter cash across Chhattisgarh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/usdt-chhattisgarh-logo.jpg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f1f7f4",
          background: "radial-gradient(900px 500px at 85% -10%, rgba(0,192,135,0.28), transparent 60%), linear-gradient(180deg, #0f2a24 0%, #0a1714 60%, #08130f 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img alt="" src={`data:image/jpeg;base64,${logo}`} width={88} height={88} style={{ borderRadius: 44, border: "2px solid rgba(212,175,55,0.5)" }} />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>
            USDT <span style={{ color: "#d4af37", marginLeft: 12 }}>Chhattisgarh</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Buy & sell USDT across Chhattisgarh</div>
          <div style={{ fontSize: 32, color: "#a7bdb5" }}>CDM and counter cash settlement · Min 100 USDT · TRC20 / BEP20</div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#00c087" }}>
          {["Raipur", "Bilaspur", "Durg-Bhilai", "Korba", "Ambikapur", "Jagdalpur", "Raigarh"].map((c) => (
            <div key={c} style={{ display: "flex", padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(0,192,135,0.4)" }}>{c}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
