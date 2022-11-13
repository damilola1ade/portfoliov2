import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: '13d6rytu',
  dataset: "production",
  apiVersion: "2022-04-25",
  useCdn: true,
  token: 'skXCazxTI6WIkhMwr0CEgIK36P27dfi9gphlxWQQ8VyXtBC74dLo7BZKGYFZxRa5gXEwvcGOQBubgwJW9o0PYfMHQlFycItoiBdZH5JoQAIqMIJrRjItVW0SDC3UkWIQ4qzzC5BZjR3PJ2vZikV2uSX5gn4Y8czXb4Z4tHENpe6J6RrCjJoH',
});

const builder = imageUrlBuilder(client);  

export const urlFor = (source) => builder.image(source);
