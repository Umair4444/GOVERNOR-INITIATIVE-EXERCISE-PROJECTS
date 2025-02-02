import { client } from "@/sanity/lib/client";

export const uploadImage = async (file: File) => {
  try {
    const imageAsset = await client.assets.upload("image", file);
    return imageAsset._id;
  } catch (error) {
    console.error("❌ Image upload failed:", error);
    return null;
  }
};

export const createFoodItem = async (foodData: any) => {
  const imageId = await uploadImage(foodData.image);
  if (!imageId) return;

  //   const slug = foodData.title.toLowerCase().replace(/\s+/g, "-");

  // Ensure slug is always a valid string
  const slug = foodData.title
    ? foodData.title.toLowerCase().replace(/\s+/g, "-")
    : `food-${Date.now()}`;

  try {
    const response = await client.create({
      _type: "food",
      title: foodData.title,
      slug: { _type: "slug", current: slug },
      category: foodData.category,
      price: foodData.price,
      discount: foodData.discount,
      tags: foodData.tags,
      toppings: foodData.toppings,
      flavors: foodData.flavors,
      description: foodData.description,
      available: foodData.available,
      image: { _type: "image", asset: { _ref: imageId } },
    });

    console.log("✅ Food item created:", response);
  } catch (error) {
    console.error("❌ Error creating food item:", error);
  }
};
