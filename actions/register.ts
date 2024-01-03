"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { registerSchema } from "@/schemas";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof registerSchema>) => {
  console.log(values);
  const validateFields = registerSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid feilds" };
  }

  const { email, name, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO: Send Verification Token Email

  return { succsess: "User Created" };
};
