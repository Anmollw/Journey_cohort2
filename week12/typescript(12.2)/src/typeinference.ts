import { z } from 'zod';
import express from "express";
const app = express();
app.use(express.json());


const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type finaluserschema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);
  const updatedbody : finaluserschema = req.body;
})

// to avoid writing the same thing(zod schema, types) twice
// can be imported into frontend(monorepo)