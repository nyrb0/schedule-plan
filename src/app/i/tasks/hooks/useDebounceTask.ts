import { useCreateTask } from './useCreateTask';
import { useUpdateTask } from './useUpdateTask';
import { TypeTaskFormState } from '@/types/task.types';
import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>;
	itemId: string;
}

export const useTaskDebounce = ({ watch, itemId }: IUseTaskDebounce) => {
	const { createTask } = useCreateTask();
	const { updateTask } = useUpdateTask();

	const dCreateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData);
		}, 444),
		[]
	);

	const dUpdateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData });
		}, 444),
		[]
	);

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				dUpdateTask({
					...formData,
					priority: formData.priority || undefined
				});
			} else {
				dCreateTask(formData);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [watch(), dCreateTask, dUpdateTask]);
};
