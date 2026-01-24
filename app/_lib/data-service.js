import supabase from "./supabase";

// export async function getVideos(ids) {
//   const { data, error } = await supabase
//     .from("videos")
//     .select("*")
//     .in("id", ids);

//   if (error) {
//     console.error(error);
//     throw new Error("Videos could not be loaded");
//   }

//   return data || [];
// }

// export async function getFeatureVideo(id) {
//   const { data, error } = await supabase
//     .from("videos")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Videos could not be loaded");
//   }

//   return data || [];
// }
export async function getFeatureVideo() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) throw new Error("Feature video could not be loaded");

  return data;
}

export async function getOtherVideos(featureId) {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .neq("id", featureId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Videos could not be loaded");

  return data || [];
}
