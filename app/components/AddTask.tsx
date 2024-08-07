"use client";

import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";

const AddTask = () => {


    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <div>
            <button onClick={
                ()=>setModalOpen(true)
            } className="btn btn-primary w-full">
                Add new task
                <FaPlusCircle className="ml-2" size={16} />
            </button>

            <Modal modalOpen={modalOpen} />
        </div>
    );
};

export default AddTask;
