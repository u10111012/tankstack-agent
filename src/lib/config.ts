export const getBaseURL = () => {
	// 開發環境
	if (import.meta.env.DEV) {
		return "http://localhost:3000/";
	}

	// 生產環境（Cloudflare Workers）
	return (
		import.meta.env.VITE_APP_URL ||
		"https://tanstack-start-app.your-username.workers.dev/"
	);
};

export const config = {
	baseURL: getBaseURL(),
};
