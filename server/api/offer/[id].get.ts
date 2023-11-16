import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  if (!event.context.params) {
    return;
  }
  const id = event.context.params.id;

  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("shelter_dogs")
    .select(
      `
    *, 
    shelters!inner(*),
    dogs!inner(*)`
    )
    .eq("id", id as string);

  return { data, error };
});
