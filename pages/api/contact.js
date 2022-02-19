import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message } = JSON.parse(req.body);
  console.log({ name, email, message });
  const msg = {
    to: "info@indigobalance.com", // Change to your recipient
    from: "exe@indigobalance.com", // Change to your verified sender
    subject: `Nuevo consulta - ${name}`,
    html: `<span>Nombre: ${name}</span><br><br><span>Email: ${email}</span><br><br><span>Mensaje: ${message}</span>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.json({ ok: true });
    })
    .catch((error) => {
      res.json({ ok: false, error });
    });
}
