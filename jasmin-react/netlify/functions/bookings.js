import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("bookings");

  // Hämta alla bokade tider
  if (req.method === "GET") {
    try {
      const data = await store.get("booked", { type: "json" });
      return Response.json(data || []);
    } catch {
      return Response.json([]);
    }
  }

  // Spara en ny bokad tid
  if (req.method === "POST") {
    try {
      const { key } = await req.json();
      const existing = (await store.get("booked", { type: "json" })) || [];
      if (!existing.includes(key)) {
        existing.push(key);
        await store.set("booked", JSON.stringify(existing));
      }
      return Response.json({ ok: true });
    } catch (e) {
      return Response.json({ ok: false }, { status: 500 });
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 });
};

export const config = {
  path: "/api/bookings",
};