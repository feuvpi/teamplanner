import type { PageServerLoad } from './$types';

// /** @type {import('./$types').Actions} */
// export const load = (async ({ locals, request }) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries([...formData]);
//     console.log(data)

//     try{
//         const newAtleta = await locals.pb.collection('Atletas').create(data);
//     } catch(error) {

//     }
//     return {};
// }) satisfies PageServerLoad; 




// /** @type {import('./$types').Actions} */
// export const actions = {
// 	default: async ({ locals, request }) => {
// 		const formData = await request.formData();
//         const data = Object.fromEntries([...formData]);
//         console.log(data)
//         try{
//             const newUser = await locals.pb.collection('users').create(data);
//             // -- send email verification
//             await locals.pb.collection('users').requestVerification(data.email);
//         } catch(error){
            
//         }
//         redirect(303, '/login')
// } 
// } satisfies Actions