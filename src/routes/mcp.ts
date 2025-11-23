import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { handleMcpRequest } from "../utils/mcp-handler";
import { config } from "../lib/config";

// ========================================
// 1. 建立 MCP Server 實例
// ========================================
const server = new McpServer({
	name: "tankstack-agent",
	version: "1.0.0",
});

// ========================================
// 2. 註冊 Tools（示例）
// ========================================

// 示例 Tool 1: 簡單查詢（無參數）
server.registerTool(
	"getData",
	{
		title: "Get Data",
		description: "Get some data from the database",
	},
	async () => {
		// 👈 你的業務邏輯 - 這裡使用模擬資料
		const data = {
			items: [
				{ id: 1, name: "Item 1", description: "First item" },
				{ id: 2, name: "Item 2", description: "Second item" },
				{ id: 3, name: "Item 3", description: "Third item" },
			],
			total: 3,
		};

		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(data, null, 2),
				},
			],
		};
	},
);

// 示例 Tool 2: 帶參數（使用 Zod 驗證）
server.registerTool(
	"getItemById",
	{
		title: "Get Item by ID",
		description: "Get a specific item from the database",
		inputSchema: {
			id: z.number().describe("The id of the item"),
		},
	},
	async ({ id }) => {
		// 👈 你的業務邏輯 - 這裡使用模擬資料
		const items = [
			{ id: 1, name: "Item 1", description: "First item" },
			{ id: 2, name: "Item 2", description: "Second item" },
			{ id: 3, name: "Item 3", description: "Third item" },
		];

		const item = items.find((item) => item.id === id);

		if (!item) {
			return {
				content: [{ type: "text", text: "Item not found" }],
			};
		}

		return {
			content: [{ type: "text", text: JSON.stringify(item, null, 2) }],
		};
	},
);

// ========================================
// 3. 註冊 Widget Resource（可選）
// ========================================

const resourceOrigin = (() => {
	try {
		return new URL(config.baseURL).origin;
	} catch {
		return "http://localhost:3000";
	}
})();

server.registerResource(
	"tankstack-widget-html",
	"ui://widget/tankstack.html",
	{},
	async () => ({
		contents: [
			{
				uri: "ui://widget/tankstack.html",
				mimeType: "text/html+skybridge",
				text: `
<link rel="stylesheet" href="${config.baseURL}chatgpt-widget.css">
<div id="tanstack-app-root"></div>
<script src="${config.baseURL}chatgpt-widget.js"></script>
      `.trim(),
				_meta: {
					"openai/widgetDomain": "https://chatgpt.com",
					"openai/widgetDescription":
						"Display TanStack data in a beautiful UI",
					"openai/widgetCSP": {
						connect_domains: [resourceOrigin],
						resource_domains: [resourceOrigin],
					},
				},
			},
		],
	}),
);

// 示例 Tool 3: 帶 Widget 的 Tool
server.registerTool(
	"showItemWithWidget",
	{
		title: "Show Item with Widget",
		description: "Show an item with a beautiful UI widget in ChatGPT",
		inputSchema: {
			id: z.number().describe("The id of the item"),
		},
		_meta: {
			"openai/outputTemplate": "ui://widget/tankstack.html",
			"openai/toolInvocation/invoking": "Loading item...",
			"openai/toolInvocation/invoked": "Item loaded!",
		},
	},
	async ({ id }) => {
		// 👈 你的業務邏輯 - 這裡使用模擬資料
		const items = [
			{
				id: 1,
				name: "TanStack Router",
				description: "Type-safe routing for React applications",
			},
			{
				id: 2,
				name: "TanStack Query",
				description: "Powerful asynchronous state management",
			},
			{
				id: 3,
				name: "TanStack Table",
				description: "Headless UI for building powerful tables",
			},
		];

		const item = items.find((item) => item.id === id);

		if (!item) {
			return {
				content: [{ type: "text", text: "Item not found" }],
			};
		}

		return {
			content: [{ type: "text", text: JSON.stringify(item, null, 2) }],
			structuredContent: item, // 👈 這個資料會注入到 Widget
		};
	},
);

// ========================================
// 4. 匯出路由（暴露 HTTP 端點）
// ========================================
export const Route = createFileRoute("/mcp")({
	server: {
		handlers: {
			// GET /mcp - 回傳 Server Capabilities
			GET: async () => {
				return new Response(
					JSON.stringify({
						name: "tankstack-agent",
						version: "1.0.0",
						description: "TanStack MCP Server with Widget support",
						capabilities: {
							tools: true,
							resources: true,
						},
					}),
					{
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
						},
					},
				);
			},

			// POST /mcp - 處理 JSON-RPC 請求
			POST: async ({ request }) => {
				return await handleMcpRequest(request, server);
			},

			// OPTIONS /mcp - CORS 預檢
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
