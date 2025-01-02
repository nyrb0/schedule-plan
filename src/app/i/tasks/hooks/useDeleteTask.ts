import { taskService } from '@/services/task.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteTask = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (id: string) => taskService.deleteTaks(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			});
		}
	});

	return { deleteTask, isDeletePending };
};
