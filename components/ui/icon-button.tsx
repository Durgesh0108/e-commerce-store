import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	icon: React.ReactElement;
	className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	onClick,
	className,
	icon,
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"rounded-full flex items-center bg-white shadow-md p-2 hover:scale-100 transition",
				className
			)}
		>
			{icon}
		</button>
	);
};

export default IconButton;
