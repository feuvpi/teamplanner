import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { z } from 'zod';

const registrationSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  }).refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const load = (({ locals }) => {
    if(locals.pb.authStore.isValid){
        console.log(locals.pb.authStore)
        throw redirect(302, '/app')
    }
}) satisfies PageServerLoad;



/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        try{
            const validatedData = registrationSchema.parse(data);
            console.log(validatedData)
            const newUser = await locals.pb.collection('users').create(validatedData);
            console.log(newUser)
            // -- send email verification
            // await locals.pb.collection('users').requestVerification(data.email);
        } catch(error){
            if (error instanceof z.ZodError) {
                // Handle validation errors
                const errors = error.errors.map((err) => err.message);
                return {
                  status: 400,
                  body: {
                    errors,
                  },
                };
              } else {
                // Handle other errors
                console.error(error);
                return {
                  status: 500,
                  body: {
                    error: 'An error occurred',
                  },
                };
              }
        }
        throw redirect(303, '/login')
} 
} satisfies Actions