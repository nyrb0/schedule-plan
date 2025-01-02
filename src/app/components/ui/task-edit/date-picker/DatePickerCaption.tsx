import dayjs from 'dayjs';

const seasonEmoji: Record<string, string> = {
	winter: '⛄️',
	spring: '🌸',
	summer: '🌻',
	autumn: '🍂'
};

const getSeason = (month: Date): keyof typeof seasonEmoji => {
	const monthNumber = month.getMonth() + 1;
	if (monthNumber >= 3 && monthNumber <= 5) return 'spring';
	if (monthNumber >= 6 && monthNumber <= 8) return 'summer';
	if (monthNumber >= 9 && monthNumber <= 11) return 'autumn';

	return 'winter'; // Зима: декабрь-февраль
};

export const formatCaption = (month: Date) => {
	const season = getSeason(month);

	return (
		<>
			<span
				role='img'
				aria-label={season}
				className='mr-2'
			>
				{seasonEmoji[season]}
			</span>
			{dayjs(month).format('MMMM')}
		</>
	);
};
