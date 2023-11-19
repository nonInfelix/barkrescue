import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const body = await readBody(event);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  // auf die Benutzerdaten zugreifen
  const user = data.user;

  if (data && data.session) {
    // Setzt Cookie mit dem Access Token
    event.node.res.setHeader(
      "Set-Cookie",
      `accessToken=${data.session.access_token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
    );
  }

  return { data, error };
});
