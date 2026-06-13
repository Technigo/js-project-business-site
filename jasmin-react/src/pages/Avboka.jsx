import emailjs from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const EMAILJS_SERVICE_ID = "service_mjw4cpb";
const EMAILJS_TEMPLATE_CANCEL = "template_cancel"; // skapa detta template i EmailJS
const EMAILJS_PUBLIC_KEY = "y7Yu8QbgFj3NM0VeM";

const supabase = createClient(
  "https://besnxjxiadkapxgmabdz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlc254anhpYWRrYXB4Z21hYmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzY0OTIsImV4cCI6MjA5NDI1MjQ5Mn0.VEH6QtlFEieEYtQTuWvXPNPVwAB_Lw19wk-NGYz0oNY"
);

export default function Avboka() {
  const [booking, setBooking] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | found | cancelled | error | notfound

  const bookingId = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    if (!bookingId) {
      setStatus("notfound");
      return;
    }
    supabase
      .from("bookings")
      .select("*")
      .eq("booking_id", bookingId)
      .single()
      .then(({ data, error }) => {
        if (error || !data) setStatus("notfound");
        else {
          setBooking(data);
          setStatus("found");
        }
      });
  }, [bookingId]);

  async function handleCancel() {
    setStatus("loading");
    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("booking_id", bookingId);
    if (error) {
      setStatus("error");
      return;
    }
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_CANCEL,
      {
        customer_name: booking.customer_name,
        treatment: booking.treatment,
        date: booking.date,
        time: booking.time,
        to_email: "jasminhedlund@gmail.com",
      },
      EMAILJS_PUBLIC_KEY
    );
    setStatus("cancelled");
  }

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "80px auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ color: "#3F5B6B" }}>Avboka tid</h2>

      {status === "loading" && <p>Laddar...</p>}

      {status === "notfound" && <p>Bokningen hittades inte.</p>}

      {status === "error" && (
        <p>Något gick fel. Kontakta healthbyjasmin@gmail.com</p>
      )}

      {status === "found" && booking && (
        <>
          <p>Du är på väg att avboka följande tid:</p>
          <div
            style={{
              background: "#f5f5f5",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <p>
              <strong>Behandling:</strong> {booking.treatment}
            </p>
            <p>
              <strong>Datum:</strong> {booking.date}
            </p>
            <p>
              <strong>Tid:</strong> {booking.time}
            </p>
            <p>
              <strong>Namn:</strong> {booking.customer_name}
            </p>
          </div>
          <button
            onClick={handleCancel}
            style={{
              background: "#3F5B6B",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Bekräfta avbokning
          </button>
        </>
      )}

      {status === "cancelled" && (
        <div style={{ color: "#3F5B6B" }}>
          <p>✓ Din bokning är avbokad.</p>
          <a href="/" style={{ color: "#3F5B6B" }}>
            Gå tillbaka och boka en ny tid
          </a>
        </div>
      )}
    </div>
  );
}
