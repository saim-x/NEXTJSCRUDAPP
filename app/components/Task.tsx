"use client";

import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';
interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = React.useState<boolean>(false);
    const [openModalDelete, setOpenModalDeleted] = React.useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit,
        })
        setOpenModalEdit(false);
        router.refresh();
    }

    const handleDeleteTask = async( id: string) => {
        await deleteTodo(id);
        setOpenModalDeleted(false);
        router.refresh();
    }

    return (
        <tr key={task.id}>
            <td className='w-full' >{task.text}</td>
            <td className='flex gap-5'>
            <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={22} />
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                <form onSubmit={handleSubmitEditTodo}>
                    <h3 className="font-bold text-lg">
                        Update your task
                    </h3>
                    <div className="modal-action">
                        <input value={taskToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <button className="btn" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
            <FaRegTrashAlt onClick={() => setOpenModalDeleted(true)} cursor="pointer" className='text-red-500' size={22}  />
            <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDeleted}>
                <h3 className='text-lg'>
                    Are you sure you want to delete this task?
                </h3>
                <div className='modal-action'>
                    <button onClick={() => handleDeleteTask(task.id)} className='btn'>
                        Yes
                    </button>
                </div>

            </Modal>
            </td>
        </tr>
    )
}

export default Task
