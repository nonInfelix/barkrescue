import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    return { error: "Nicht authentifiziert" };
  }

  const { data, error } = await supabase
    .from("shelters")
    .select(
      `*,
    shelter_dogs!inner(*)
    `
    )
    .eq("user_id", user.id);

  return { data, error };
});
