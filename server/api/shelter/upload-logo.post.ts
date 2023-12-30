import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  //liest formdata aus Anfrage (body)
  const formData = await readMultipartFormData(event);

  if (formData !== undefined) {
    const file = Buffer.from(formData[0].data);
    const fileName = formData[0].filename as string;

    const { data, error } = await client.storage
      .from("logos")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    return { data, error };
  }
});
