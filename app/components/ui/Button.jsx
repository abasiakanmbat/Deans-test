function Button({
	icon,
	text,
	containerClassName
}) {
	return (
		<div className={`rounded-full px-4 py-2 text-white bg-background w-fit cursor-pointer ${containerClassName}`}>
			{icon}
			<span>{text}</span>
		</div>
	);
}

export default Button;