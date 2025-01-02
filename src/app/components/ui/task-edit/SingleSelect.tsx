import { Badge } from '../Badge';
import { useOutside } from '@/hooks/useOutside';
import cn from 'clsx';
import { X } from 'lucide-react';

export interface IOption {
	label: string;
	value: string;
}

interface ISingleSelect {
	data: IOption[];
	onChange: (value: string) => void;
	value: string;
	isColorSelect?: boolean;
}

const SingleSelect = ({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) => {
	const { isShow, setIsShow, ref } = useOutside(false);

	const getValue = () => data.find(item => item.value === value)?.value;

	return (
		<div
			className={cn('relative min-w-36', { 'w-max': isColorSelect })}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault();
					setIsShow(!isShow);
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
				{value && (
					<button
						className='absolute top-0 right-0 opacity-30 hover:opacity-100 transition-opacity'
						onClick={e => {
							e.preventDefault();
							onChange('');
						}}
					>
						<X size={14} />
					</button>
				)}
			</button>
			{data.map(item => (
				<button
					onClick={e => {
						e.preventDefault();
						onChange(item.value);
						setIsShow(false);
					}}
					className='block mb-4 last:mb-0 capitalize rounded-lg'
					style={isColorSelect ? { backgroundColor: item.value } : {}}
					key={item.value}
				>
					<Badge variant={item.value}>{item.label}</Badge>
				</button>
			))}
		</div>
	);
};

export default SingleSelect;
