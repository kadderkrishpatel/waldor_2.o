import { Pool } from "pg";
import { randomBytes } from "crypto";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

function generateId() {
  return randomBytes(12).toString("hex");
}

export async function saveContactSubmission(data: {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  treatment: string[];
  message: string;
}) {
  const query = `
    INSERT INTO contact_submissions (id, "firstName", "lastName", email, phone, treatment, message, status, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
  `;

  await pool.query(query, [
    generateId(),
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.treatment,
    data.message,
    "new",
  ]);
}

export async function saveCareersSubmission(data: {
  firstName: string;
  lastName: string | null;
  email: string;
  subject: string;
  message: string;
}) {
  const query = `
    INSERT INTO careers_submissions (id, "firstName", "lastName", email, subject, message, status, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
  `;

  await pool.query(query, [
    generateId(),
    data.firstName,
    data.lastName,
    data.email,
    data.subject,
    data.message,
    "new",
  ]);
}
