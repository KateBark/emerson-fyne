import supabase from "./supabase";

export async function getFeatureVideo() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("artist_id", 1)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (error) throw new Error("Feature video could not be loaded");

  return data;
}

export async function getOtherVideos(featureId) {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("artist_id", 1)
    .neq("id", featureId)
    .order("created_at", { ascending: true });

  if (error) throw new Error("Videos could not be loaded");

  return data || [];
}
