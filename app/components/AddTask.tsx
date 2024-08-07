"use client";

import React, { FormEventHandler, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";

const AddTask = () => {


    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");
    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("new task value", newTaskValue);
        setNewTaskValue("");
        setModalOpen(false);
    }
    return (
        <div>
            <button onClick={
                ()=>setModalOpen(true)
            } className="btn btn-primary w-full">
                Add new task
                <FaPlusCircle className="ml-2" size={16} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">
                        Add new task
                    </h3>
                    <div className="modal-action">
                    <input value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;
