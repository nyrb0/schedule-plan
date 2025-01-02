import { taskService } from '@/services/task.service';
import { TypeTaskFormState } from '@/types/task.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateTask = () => {
	const queryClient = useQueryClient();

	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (task: TypeTaskFormState) => taskService.createTask(task),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			});
		}
	});

	return { createTask };
};
