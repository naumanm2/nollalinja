import { defineCollection, z } from "astro:content";

const main = defineCollection({
	type: "content",
	schema: z.object({
		s1heading: z.string().optional(),
		s1display: z.string().optional(),
    s1subtitle: z.string().optional(),
    s2trailerheading: z.string().optional(),
    s2fulllengthheading: z.string().optional(),

    s3heading: z.string().optional(),
    s3body1: z.string().optional(),
    s3body2: z.string().optional(),

    card3: z.string().optional(),
    card1: z.string().optional(),
    card2: z.string().optional(),
    card4: z.string().optional(),

    s4heading: z.string().optional(),
    s4body1: z.string().optional(),
    s4body2: z.string().optional(),

    s5heading: z.string().optional(),
    s5body1: z.string().optional(),
    s5body2: z.string().optional(),

    s6heading: z.string().optional(),
    s6body1: z.string().optional(),
    s6body2: z.string().optional(),
    s6bodylink: z.string().optional(),
    s6bodylinktext: z.string().optional(),
    
    s6body3: z.string().optional(),
    
    s7heading: z.string().optional(),
    s7subheading: z.string().optional(),
    s7subheading2: z.string().optional(),
    s7body1: z.string().optional(),
    s7body2: z.string().optional(),

    s8heading: z.string().optional(),

    cookieConsent: z.string().optional(),
    cookieConsentHeadline: z.string().optional(),
    cookieConsentButton: z.string().optional(),

	}),
});

export const collections = {
	main,
};
