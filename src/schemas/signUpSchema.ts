import z from "zod";


export const usernameValidation = z
    .string()
    .min(3 , "username must be at least 3 characters long")
    .max(15 , "username must be no more than 15 chararacters")


export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6,{message : "password must be of 6 characters"})
})