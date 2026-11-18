import { z } from "zod";

export const membershipSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  email: z.union([z.literal(""), z.string().email().max(254)]).optional(),
  state: z.string().trim().min(2).max(100),
  district: z.string().trim().min(2).max(100),
  constituency: z.string().max(120).optional(),
  address: z.string().trim().min(5).max(1000),
  organization_wing: z.string().min(1).max(100),
  age: z.union([z.literal(""), z.coerce.number().int().min(18).max(120)]).optional(),
  consent: z.literal(true),
});

export type MembershipSubmission = z.infer<typeof membershipSchema>;

export function toMembershipInsert(value: MembershipSubmission) {
  return {
    ...value,
    email: value.email || null,
    constituency: value.constituency?.trim() || null,
    age: typeof value.age === "number" ? value.age : null,
    status: "pending" as const,
  };
}

export const contactSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(5).max(5000),
});

export type ContactSubmission = z.infer<typeof contactSchema>;