import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface IntakeAmountSelectorProps {
	/** Callback when an amount is selected */
	onSelect: (amountMl: number) => void;
	/** Default amount shown in custom input */
	defaultAmount?: number;
	/** Preset amounts to show as quick options */
	presets?: number[];
}

const DEFAULT_PRESETS = [100, 250, 500, 750];

/**
 * Component for selecting custom water intake amounts
 * Shows preset buttons and a custom input field
 */
export function IntakeAmountSelector({
	onSelect,
	defaultAmount = 250,
	presets = DEFAULT_PRESETS,
}: IntakeAmountSelectorProps) {
	const [customAmount, setCustomAmount] = useState(defaultAmount.toString());

	const handlePresetClick = (amount: number) => {
		onSelect(amount);
	};

	const handleCustomSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const amount = parseInt(customAmount, 10);
		if (amount > 0 && amount <= 2000) {
			onSelect(amount);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCustomAmount(e.target.value);
	};

	return (
		<div className="space-y-4">
			<div className="grid grid-cols-4 gap-2">
				{presets.map((amount) => (
					<Button
						key={amount}
						variant="outline"
						onClick={() => handlePresetClick(amount)}
						className="text-sm"
						aria-label={`Log ${amount}ml`}
					>
						{amount}ml
					</Button>
				))}
			</div>

			<form onSubmit={handleCustomSubmit} className="flex gap-2 items-end">
				<div className="flex-1">
					<Label htmlFor="custom-amount" className="text-sm text-gray-600">
						Custom amount (ml)
					</Label>
					<Input
						id="custom-amount"
						type="number"
						min="1"
						max="2000"
						value={customAmount}
						onChange={handleInputChange}
						placeholder="Enter amount"
						aria-describedby="custom-amount-hint"
					/>
					<span id="custom-amount-hint" className="sr-only">
						Enter a custom amount between 1 and 2000 milliliters
					</span>
				</div>
				<Button type="submit" variant="secondary">
					Add
				</Button>
			</form>
		</div>
	);
}
