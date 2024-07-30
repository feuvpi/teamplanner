import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import PocketBase from 'pocketbase';

export const load = (({ locals }) => {
    if(locals.pb.authStore.isValid){
        throw redirect(302, '/app')
    }
}) satisfies PageServerLoad;



/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        console.log(data)
        try{
            const newUser = await locals.pb.collection('users').create(data);
            // -- send email verification
            await locals.pb.collection('users').requestVerification(data.email);
        } catch(error){
            
        }
        redirect(303, '/login')
} 
} satisfies Actions