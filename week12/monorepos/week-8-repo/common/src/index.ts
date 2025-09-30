
import { z } from "zod";
export const signupinput = z.object({
  username : z.string(),
  password : z.string(),
})

export type signupParams = z.infer<typeof signupinput>;