import { useDeleteTask } from '../hooks/useDeleteTask';
import { useTaskDebounce } from '../hooks/useTaskDebounce';
import styles from './KanbanView.module.scss';
import Checkbox from '@/app/components/ui/checkbox';
import { TransParentField } from '@/app/components/ui/fields/TransParentField';
import SingleSelect from '@/app/components/ui/task-edit/SingleSelect';
import DatePicker from '@/app/components/ui/task-edit/date-picker/DatePicket';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import cn from 'clsx';
import { GripVertical, Loader, Trash } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IKanbanCard {
	item: ITaskResponse;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	});

	useTaskDebounce({ watch, itemId: item.id });

	const { deleteTask, isDeletePending } = useDeleteTask();

	return (
		<div
			className={cn(
				styles.card,
				{
					[styles.completed]: watch('isCompleted')
				},
				'animation-opacity'
			)}
		>
			<div className={styles.cardHeader}>
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
			</div>

			<div className={styles.cardBody}>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
							position='left'
						/>
					)}
				/>

				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className={styles.cardActions}>
				<button
					onClick={() =>
						item.id
							? deleteTask(item.id)
							: setItems(prev => prev?.slice(0, -1))
					}
					className='opacity-50 transition-opacity hover:opacity-100'
				>
					{isDeletePending ? (
						<Loader size={15} />
					) : (
						<Trash size={15} />
					)}
				</button>
			</div>
		</div>
	);
}
