import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
  locals.pb.authStore.clear();
  return new Response(null, {
    status: 302,
    headers: {
      location: '/login',
    },
  });
};