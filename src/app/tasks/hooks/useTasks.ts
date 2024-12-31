import { taskService } from '@/services/task.service';
import { useQuery } from '@tanstack/react-query';

export const useTasks = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks()
	});

	return { tasks: data?.data, isLoading, isError, error };
};
