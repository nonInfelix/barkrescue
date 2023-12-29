import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const client = await serverSupabaseClient(event);

  const { data, error } = await client.storage
    .from("logos")
    .upload("logo", body.img, {
      cacheControl: "3600",
      upsert: false,
    });

  return { data, error };
});
