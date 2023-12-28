import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const client = await serverSupabaseClient(event);

  if (user) {
    const { data } = await client
      .from("shelters")
      .select("*")
      .eq("user_id", user.id);
    return { data };
  } else return null;
});
