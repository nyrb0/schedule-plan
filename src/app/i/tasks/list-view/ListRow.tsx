import { useTaskDebounce } from '../hooks/useDebounceTask';
import { useDeleteTask } from '../hooks/useDeleteTask';
import styles from './ListRow.module.scss';
import Checkbox from '@/app/components/ui/checkbox';
import { TransParentField } from '@/app/components/ui/fields/TransParentField';
import SingleSelect from '@/app/components/ui/task-edit/SingleSelect';
import DatePicket from '@/app/components/ui/task-edit/date-picker/DatePicket';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import cn from 'clsx';
import { GripVertical } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';

/* eslint-disable */

interface IListRow {
	item: ITaskResponse;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const ListRow = ({ item, setItems }: IListRow) => {
	const { watch, register, control } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	});

	const { deleteTask } = useDeleteTask();
	useTaskDebounce({ watch, itemId: item.id });
	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className='inline-flex items-center gap-2.5 w-full'>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.grip} />
					</button>

					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value}
							/>
						)}
					/>

					<TransParentField {...register('name')} />
				</span>
			</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicket
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							onChange={onChange}
							data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<button
					onClick={() =>
						item.id
							? deleteTask(item.id)
							: setItems(prev => prev?.slice(0, -1))
					}
					className='opacity-50 transition-opacity hover:opacity-100'
				></button>
			</div>
		</div>
	);
};

export default ListRow;
