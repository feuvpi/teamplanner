import { serializeNonPOJOs } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load = (({ locals }) => {
    console.log(locals.user)
    if (locals.pb.authStore.isValid && locals.pb.authStore.model) {
        console.log("entrei np pojo")
        return { profile: serializeNonPOJOs(locals.pb.authStore.model) }
    } 
    // -- if reaches here, user is not auth, return forbidden and redirect to /login
    console.log("passei aqui")
    throw redirect(303, '/login')
}) satisfies LayoutServerLoad;