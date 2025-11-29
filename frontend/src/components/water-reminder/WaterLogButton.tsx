import { Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface WaterLogButtonProps {
	/** Callback when water is logged */
	onLog?: (amountMl: number) => void;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Default amount to log in ml */
	defaultAmount?: number;
}

/**
 * Quick water log button - logs water intake with a single tap
 */
export function WaterLogButton({
	onLog,
	disabled = false,
	defaultAmount = 250,
}: WaterLogButtonProps) {
	const handleClick = () => {
		onLog?.(defaultAmount);
	};

	return (
		<Button
			onClick={handleClick}
			disabled={disabled}
			className="w-full h-16 text-lg"
			size="lg"
			aria-label={`Log ${defaultAmount}ml of water`}
		>
			<Droplet className="mr-2 h-6 w-6" />
			Log Water ({defaultAmount}ml)
		</Button>
	);
}
