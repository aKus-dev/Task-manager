import { TaskContainer, TaskData, TaskEdit } from '../components';
import { useCategories, editAtom } from '../global';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Task as ITask } from '../interfaces';
import { useAtom } from 'jotai';

export const TaskScreen = () => {

  const { id } = useParams()
  const { getTaskData, categories } = useCategories()

  const [taskData, setTaskData] = useState<ITask>();
  const [isEditable] = useAtom(editAtom);

  useEffect(
    () => {
      setTaskData(
        getTaskData(id!)
      )
    }, [id, categories]
  )


  return (
    <TaskContainer>
      {
        isEditable
          ? <TaskEdit />
          : (<TaskData
            taskName={taskData?.title}
            status={taskData?.status}
            date={taskData?.date}
            desc={taskData?.desc}
          />)
      }
    </TaskContainer>
  )
}
