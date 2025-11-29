import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatGPTIntegration, useChatGPTToolOutput } from "./integration";

// Guitar data type matching example-guitars.ts
interface Guitar {
	id: number;
	name: string;
	image: string;
	description: string;
	shortDescription: string;
	price: number;
}

// Guitar Widget UI Component
function GuitarWidget() {
	const guitar = useChatGPTToolOutput<Guitar>();

	if (!guitar) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="flex flex-col items-center gap-3">
					<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
					<div className="text-gray-500 text-sm">Loading guitar...</div>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
			{/* Guitar Image */}
			<div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200">
				<img
					src={guitar.image}
					alt={guitar.name}
					className="w-full h-full object-cover"
					onError={(e) => {
						e.currentTarget.src =
							"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3EGuitar Image%3C/text%3E%3C/svg%3E";
					}}
				/>
				<div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
					${guitar.price}
				</div>
			</div>

			{/* Guitar Info */}
			<div className="p-6">
				{/* Title and ID */}
				<div className="mb-4">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						{guitar.name}
					</h2>
					<p className="text-sm text-gray-500">Product ID: {guitar.id}</p>
				</div>

				{/* Short Description */}
				{guitar.shortDescription && (
					<div className="mb-4">
						<p className="text-lg text-gray-700 font-medium leading-relaxed">
							{guitar.shortDescription}
						</p>
					</div>
				)}

				{/* Full Description */}
				{guitar.description && (
					<div className="mb-6">
						<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
							Description
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{guitar.description}
						</p>
					</div>
				)}

				{/* Price and Actions */}
				<div className="flex items-center justify-between pt-6 border-t border-gray-200">
					<div className="flex flex-col">
						<span className="text-sm text-gray-500 mb-1">Price</span>
						<span className="text-3xl font-bold text-blue-600">
							${guitar.price}
						</span>
					</div>
					<div className="flex gap-3">
						<button
							type="button"
							className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
						>
							Add to Cart
						</button>
						<button
							type="button"
							className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors"
						>
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// Widget Bootstrap
const rootElement = document.getElementById("tanstack-app-root");
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<ChatGPTIntegration>
				<GuitarWidget />
			</ChatGPTIntegration>
		</StrictMode>,
	);
}
