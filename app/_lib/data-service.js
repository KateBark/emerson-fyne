import supabase from "./supabase";

export async function getVideos(ids) {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .in("id", ids);

  if (error) {
    console.error(error);
    throw new Error("Videos could not be loaded");
  }

  return data || [];
}

export async function getFeatureVideo(id) {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Videos could not be loaded");
  }

  return data || [];
}
