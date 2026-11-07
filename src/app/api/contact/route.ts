import { Resend } from "resend";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  const name = String(b?.name ?? "").trim();
  const email = String(b?.email ?? "").trim();
  const domain = String(b?.domain ?? "").trim();
  const role = String(b?.role ?? "").trim().slice(0, 60);
  const message = String(b?.message ?? "").trim();
  if (
    !name ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 200 ||
    message.length < 10 ||
    message.length > 4000
  )
    return Response.json({ error: "Invalid input" }, { status: 400 });

  // from-address domain must be verified in Resend
  const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from: "Impact Matrix <info@gryffindorlab.com>",
    to: "info@gryffindorlab.com",
    replyTo: email,
    subject: `New enquiry from ${name.replace(/[\r\n]/g, " ")}`,
    html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(role || "Role not given")} · Domain: ${esc(domain || "not specified")}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
  });
  if (error) return Response.json({ error: "Send failed" }, { status: 502 });
  return Response.json({ ok: true });
}
