import { writable } from 'svelte/store';

const sidebarOpen = writable(false);

const openSidebar = () => {
    sidebarOpen.update(value => !value);
};

const closeSidebar = () => {
	sidebarOpen.update(() => false);
};

export { sidebarOpen, openSidebar, closeSidebar };
