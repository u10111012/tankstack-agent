import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { handleMcpRequest } from "../utils/mcp-handler";
import { config } from "../lib/config";

import guitars from "../data/example-guitars";

const server = new McpServer({
	name: "guitar-app",
	version: "1.0.0",
});

const resourceOrigin = (() => {
	try {
		return new URL(config.baseURL).origin;
	} catch {
		return "http://localhost:3000";
	}
})();

server.registerResource(
	"show-guitar-html",
	"ui://widget/show-guitar.html",
	{},
	async () => ({
		contents: [
			{
				uri: "ui://widget/show-guitar.html",
				mimeType: "text/html+skybridge",
				text: `
<link rel="stylesheet" href="${config.baseURL}chatgpt-widget.css">
<div id="tanstack-app-root"></div>
<script src="${config.baseURL}chatgpt-widget.js"></script>
        `.trim(),
				_meta: {
					"openai/widgetDomain": "https://chatgpt.com",
					"openai/widgetDescription": "Displays a guitar product with styling",
					"openai/widgetCSP": {
						connect_domains: [resourceOrigin],
						resource_domains: [resourceOrigin],
					},
				},
			},
		],
	}),
);

server.registerTool(
	"getGuitars",
	{
		title: "Get all guitars",
		description: "Get all guitar products from the database",
	},
	async () => {
		return {
			content: [{ type: "text" as const, text: JSON.stringify(guitars) }],
		};
	},
);

server.registerTool(
	"showGuitar",
	{
		title: "Show a guitar",
		description: "Show a guitar product from the database",
		inputSchema: {
			id: z.number().describe("The id of the guitar to show"),
		},
		_meta: {
			"openai/outputTemplate": "ui://widget/show-guitar.html",
			"openai/toolInvocation/invoking": "Showing a guitar...",
			"openai/toolInvocation/invoked": "Showed a guitar!",
		},
	},
	async ({ id }) => {
		const guitar = guitars.find((guitar) => guitar.id === +id);
		if (!guitar) {
			return {
				content: [{ type: "text" as const, text: "Guitar not found" }],
			};
		}
		return {
			content: [
				{
					type: "text" as const,
					text: JSON.stringify(guitars.find((guitar) => guitar.id === +id)),
				},
			],
			structuredContent: guitar,
		};
	},
);

export const Route = createFileRoute("/mcp")({
	server: {
		handlers: {
			GET: async () => {
				return new Response(
					JSON.stringify({
						name: "guitar-app",
						version: "1.0.0",
						description: "Guitar eCommerce MCP Server",
						capabilities: {
							tools: true,
							resources: true,
						},
					}),
					{
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
						},
					},
				);
			},
			POST: async ({ request }) => {
				return await handleMcpRequest(request, server);
			},
			OPTIONS: async () => {
				return new Response(null, {
					status: 200,
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
						"Access-Control-Allow-Headers": "*",
						"Access-Control-Max-Age": "86400",
					},
				});
			},
		},
	},
});
