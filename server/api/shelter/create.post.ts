import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const shelter = {
    ...body.shelter,
    user_id: body.user_id,
  };
  console.log(body);
  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("shelters")
    .insert(shelter)
    .select();

  return { data, error };
});
