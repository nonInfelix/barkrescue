import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data } = await client.from("shelter_dogs").select(
    `
  *, 
  shelters!inner(location),
  dogs!inner(name)`
  );
  return { data };
});
