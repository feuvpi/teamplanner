import { serializeNonPOJOs } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load = (({ locals }) => {
    if (locals.user && locals.user.profile) {
        return { profile: serializeNonPOJOs(locals.user) }
    } 
    // -- if reaches here, user is not auth, return forbidden and redirect to /login
    throw redirect(303, '/login')
}) satisfies LayoutServerLoad;