import { describe, expect, it } from "vitest";
import { membershipSchema, toMembershipInsert } from "./ainnmkk-membership";

const validApplication = {
  full_name: "கயல் விழி",
  mobile: "9876543210",
  email: "",
  state: "தமிழ்நாடு",
  district: "சென்னை",
  constituency: "",
  address: "முதல் தெரு, சென்னை",
  organization_wing: "மகளிர் அணி",
  age: "",
  consent: true,
};

describe("membership application rules", () => {
  it("accepts valid applications with a 10-digit Indian mobile number and consent", () => {
    expect(membershipSchema.safeParse(validApplication).success).toBe(true);
  });

  it("rejects mobile numbers that do not begin with 6–9 and contain 10 digits", () => {
    expect(membershipSchema.safeParse({ ...validApplication, mobile: "5876543210" }).success).toBe(false);
    expect(membershipSchema.safeParse({ ...validApplication, mobile: "987654321" }).success).toBe(false);
  });

  it("requires explicit application consent", () => {
    expect(membershipSchema.safeParse({ ...validApplication, consent: false }).success).toBe(false);
  });

  it("starts each submitted application in the pending review state", () => {
    const parsed = membershipSchema.parse(validApplication);
    expect(toMembershipInsert(parsed).status).toBe("pending");
  });
});