import { defineCollection, z } from "astro:content";

const main = defineCollection({
	type: "content",
	schema: z.object({
		s1heading: z.string(),
		s1display: z.string(),
    s1title: z.string(),
    s2trailerheading: z.string(),
    s2fulllengthheading: z.string(),

    s3heading: z.string(),
    s3body1: z.string(),
    s3body2: z.string(),

    s4heading: z.string(),
    s4body1: z.string(),
    s4body2: z.string(),

    s5heading: z.string(),
    s5body1: z.string(),
    s5body2: z.string(),

    s6heading: z.string(),
    s6body1: z.string(),
    s6body2: z.string(),

    s7heading: z.string(),
    s7subheading: z.string(),
    s7body1: z.string(),
    s7body2: z.string(),
	}),
});

export const collections = {
	main,
};
