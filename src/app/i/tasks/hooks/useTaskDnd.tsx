import { FILTERS } from '../columns.data';
import { useUpdateTask } from './useUpdateTask';
import { DropResult } from '@hello-pangea/dnd';

export const useTaskDnd = () => {
	const { updateTask } = useUpdateTask();

	const onGragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const destinationColumnId = result.destination.droppableId;

		if (destinationColumnId === result.source.droppableId) return;

		if (destinationColumnId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			});
		}

		const newCreatedAt = FILTERS[destinationColumnId].format();

		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		});
	};

	// filters

	return { onGragEnd };
};
