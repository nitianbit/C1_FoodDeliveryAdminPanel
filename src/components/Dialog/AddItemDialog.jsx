import React, { useEffect } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import FoodForm from "../FoodForm";
import { GrFormClose } from "react-icons/gr";
const AddItemDialog = ({ open, handleOpen, currentMenuItem, setCurrentMenuItem, onSuccess, editId, setEditId }) => {


    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogBody>
                    <span
                        className="absolute cursor-pointer top-3 right-5 text-gray-900" onClick={handleOpen}>
                        <GrFormClose className="text-xl font-extrabold" />
                    </span>

                    <FoodForm formData={currentMenuItem} open={open} onSuccess={onSuccess} setFormData={setCurrentMenuItem} handleOpen={handleOpen} setEditId={setEditId} editId={editId} />
                </DialogBody>

            </Dialog>
        </>
    );
}

export default AddItemDialog