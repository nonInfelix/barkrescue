import { serverSupabaseClient } from "#supabase/server";
import type dogInfo from "~/interfaces/dogInfo";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data } = await client.from("dogs").select("*");
  return { data };
});
