"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
//const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitNewsletterSubscription(data: { name: string, email: string }) {
  console.log("newsletter action called")
/* 
  try {
    const { error } = await resend.emails.send({
      from: "Website Formular <webform@gabrielakramer.de>",
      to: "noekel@namaste-websites.de",
      subject: "Newsletter Anmeldung",
      html: 
      `<div>
        <h3>Newsletter Anmeldung</h3>
        <p>
            <strong>URL:</strong> ${data.name}<br />
            <strong>Mail:</strong> ${data.email}
        </p>
       </div> 
    `,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Resend Error:", error);
    // Hier keinen Wert zurückgeben, sondern den Fehler für das System bestehen lassen
    throw new Error("Mail-Versand fehlgeschlagen");
  }
  redirect("/danke");
  */
}