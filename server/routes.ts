import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);

      // Send email if Resend is configured
      if (resend) {
        try {
          await resend.emails.send({
            from: "Mikro Website <onboarding@resend.dev>",
            to: ["sales@mikroindia.com"],
            subject: `New Contact Inquiry: ${input.subject || "No Subject"}`,
            html: `
              <h2>New Contact Message from ${input.name}</h2>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Phone:</strong> ${input.phone || "N/A"}</p>
              <p><strong>Address:</strong> ${input.address || "N/A"}</p>
              <p><strong>Subject:</strong> ${input.subject || "N/A"}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message}</p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We don't fail the request if email fails, as the message is already saved to DB
        }
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
