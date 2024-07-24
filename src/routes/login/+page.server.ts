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
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;
        console.log(email)
        console.log(password)
        // const pb = new PocketBase('http://127.0.0.1:8090');
        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        
        if(token){
            console.log("tem token")
            throw redirect(303, '/app')
        } else {
            return {fail: true}
        }
	},
} satisfies Actions;