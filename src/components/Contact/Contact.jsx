/* eslint-disable no-unused-vars */
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { updateContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import css from "./Contact.module.css";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleUpdate = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted");
  };

  const handleUpdate = () => {
    if (updatedName && updatedNumber) {
      // Ensure no empty fields
      dispatch(
        updateContact({
          contactId: id,
          name: updatedName,
          number: updatedNumber,
        })
      );
      toast.success("Contact updated");
      handleCloseUpdate();
    }
  };

  return (
    <div className={css.cardWrap}>
      <p className={css.nameParagraph}>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p className={css.phoneParagraph}>
        <BsFillTelephoneFill className={css.icon} />
        {number}
      </p>
      <button className={css.button} onClick={handleOpen}>
        Delete
      </button>
      <button className={css.buttonUp} onClick={handleOpenUpdate}>
        Update
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete <br />
            {name}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button
              className={css.yButton}
              type="button"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button className={css.nButton} type="button" onClick={handleClose}>
              No
            </button>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleUpdate}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Here you can update your contact
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <label className={css.label}>
              <span className={css.span}>Name:</span>
              <input
                type="text"
                defaultValue={name}
                onChange={(e) => setUpdatedName(e.target.value)}
                className={css.field}
              />
            </label>

            <label className={css.label}>
              <span className={css.span}>Number: </span>
              <input
                type="number"
                defaultValue={number}
                onChange={(e) => setUpdatedNumber(e.target.value)}
                className={css.field}
              />
            </label>

            <button
              className={css.modalButton}
              type="button"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className={css.modalButton}
              type="button"
              onClick={handleCloseUpdate}
            >
              Close
            </button>
          </Typography>
        </Box>
      </Modal>
      <Toaster />
    </div>
  );
}
