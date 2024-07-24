// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            pb: PocketBase,
			currentUser: pb.authStore.model
        }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
