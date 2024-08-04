import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
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

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
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
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete <br />{name}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {" "}
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
    </div>
  );
}
