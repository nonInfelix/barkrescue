import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);

  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("shelter_dogs")
    .select(
      `
    *, 
    shelters!inner(*)`
    )
    .eq("shelters.location", params.location as String);

  return { data, error };
});
