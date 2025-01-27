export default function Input({ label, textarea, ...props }) {
	const classes =
		'w-full px-4 py-2 border border-stone-500 rounded-md focus:outline-none focus:ring focus:ring-stone-400';

	return (
		<p className="flex flex-col gap-1 my-4">
			<label className="text-sm font-bold uppercase text-stone-500">{label}</label>
			{textarea ? (
				<textarea className={classes} {...props} />
			) : (
				<input className={classes} {...props} />
			)}
		</p>
	);
}
