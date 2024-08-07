import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddTask = () => {
    return (
        <div>
            <button className="btn btn-primary w-full">
                Add new task
                <FaPlusCircle className="ml-2" size={16} />
            </button>
        </div>
    );
};

export default AddTask;
