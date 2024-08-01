import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (({ locals }) => {
    if(locals.pb.authStore.isValid){
        throw redirect(302, '/app')
    }
}) satisfies PageServerLoad;

// Type guard to check if the error is an authentication error
function isAuthError(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ locals, request }) => {
      const data = await request.formData();
      const email = data.get('email') as string;
      const password = data.get('password') as string;
      try {
        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        if (token) {
          locals.user = locals.pb.authStore.model
          throw redirect(303, '/app');
        }
      } catch (error) {
        if (isAuthError(error)) {
          return {
            error: 'Invalid email or password',
          };
        } else {
          console.error(error);
          return {
            error: 'An error occurred',
          };
        }
      }
    },
  } satisfies Actions;