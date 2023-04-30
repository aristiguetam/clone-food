// import { SanityClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: "3v4k5elg",
    dataset: 'production',
    useCdn: true,
    apiVersion: "2023-04-27"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;