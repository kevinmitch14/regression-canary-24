"use server";

import { revalidatePath } from "next/cache";

export async function testActionHome(formData: FormData) {
  revalidatePath("/");
}
export async function testActionTestPage(formData: FormData) {
  revalidatePath("/test");
}
