'use client';

import { COLUMNS } from '../columns.data';
import { useTaskDnd } from '../hooks/useTaskDnd';
import { useTasks } from '../hooks/useTasks';
import styles from './ListRow.module.scss';
import { ListRowParent } from './ListRowParent';
import { DragDropContext } from '@hello-pangea/dnd';

/* eslint-disable */

export function ListView() {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Due date</div>
					<div>Priority</div>
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	);
}
