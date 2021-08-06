export const asyncLocalStorage = {
	setItem: async (key, value) => {
		try {
			await Promise.resolve();
			window.localStorage.setItem(key, value);
		} catch (err) {
			throw err;
		}
	},
	getItem: async (key) => {
		try {
			await Promise.resolve();
			return window.localStorage.getItem(key);
		} catch (err) {
			throw err;
		}
	},
	removeItem: async (key) => {
		try {
			await Promise.resolve();
			return window.localStorage.removeItem(key);
		} catch (err) {
			throw err;
		}
	},
};
