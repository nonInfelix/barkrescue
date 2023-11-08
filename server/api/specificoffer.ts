import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const client = await serverSupabaseClient(event);
  const { data } = await client
    .from("shelter_dogs")
    .select("*, shelters!inner(*)")
    // optional chaining benötigt PosgREST syntax
    .or(`shelters.location.eq.${query.location}`)
    .or(`dog_id.eq.${query.breedID}`)
    .or(`gender.eq.${query.gender}`)
    .or(`age.lte.${query.age}`)
    .eq("isActive", true);

  return { data, query };
});
