import { z } from "zod";
export declare const signupinput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type signupParams = z.infer<typeof signupinput>;
