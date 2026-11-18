import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactSchema } from "./ainnmkk-membership";

export const submitMembership = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => membershipInput(input))
  .handler(async ({ data }) => {
    const { supabase } = createPublicSubmissionClient();
    const { error } = await supabase.from("memberships").insert(toSafeMembership(data));
    if (error) {
      console.error("Membership submission failed.", error.message);
      throw new Error("We could not send your application. Please try again.");
    }
    return { success: true };
  });

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabase } = createPublicSubmissionClient();
    const { error } = await supabase.from("contact_messages").insert(data);
    if (error) {
      console.error("Contact enquiry submission failed.", error.message);
      throw new Error("We could not send your message. Please try again.");
    }
    return { success: true };
  });

import { membershipSchema, toMembershipInsert } from "./ainnmkk-membership";

function membershipInput(input: unknown) {
  return membershipSchema.parse(input);
}

function toSafeMembership(input: ReturnType<typeof membershipSchema.parse>) {
  return toMembershipInsert(input);
}

function createPublicSubmissionClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("Secure application forms are temporarily unavailable.");
  const supabase = createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
  return { supabase };
}