import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~/types/supabase";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  //liest formdata aus Anfrage (body)
  const formData = await readMultipartFormData(event);

  if (formData !== undefined) {
    const file = Buffer.from(formData[0].data);
    const fileName = formData[0].filename as string;

    const { data, error } = await client.storage
      .from("logos")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: true,
      });
    console.log(data);
    if (data !== null) {
      let path = data.path;

      const { data: url } = await client.storage
        .from("logos")
        .getPublicUrl(path);
      console.log("public URL:  ", url.publicUrl);
      let publicUrl: string = url.publicUrl;

      if (user !== null) {
        const { data: imgData, error: imgError } = await supabase
          .from("shelters")
          .update({ logo_img: publicUrl })
          .eq("user_id", user.id)
          .select();

        console.log("imgData:  ", imgData);
      }
    }

    return { data, error };
  }
});
