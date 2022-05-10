import { TaskContainer, TaskHeader, TaskData } from '../components';
import { useParams } from 'react-router-dom';
import { useCategories } from '../global';
import { useEffect, useState } from 'react';
import { Task } from '../components/CategoryScreen/Task';
import { Task as ITask } from '../interfaces';

export const TaskScreen = () => {
  const { id } = useParams()
  const { getTaskData } = useCategories()

  const [taskData, setTaskData] = useState<ITask>();

  useEffect(
    () => {
      setTaskData(
        getTaskData(id!)
      )
    }, [id]
  )

  return (
    <TaskContainer>
      <TaskHeader />
      <TaskData
        taskName={taskData?.title}
        status={taskData?.status}
        date={taskData?.date}
        desc={taskData?.desc}
      />
    </TaskContainer>
  )
}
