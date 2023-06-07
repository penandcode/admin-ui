import React, { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Fade, Backdrop, Box } from "@mui/material";
import { red } from "@mui/material/colors";

const Tabledata = ({ user, onDelete, selectUser, checked }) => {
  const [userData, setUserData] = useState({
    username: user.name,
    email: user.email,
    role: user.role,
  });

  const handleChange = (event) => {
    setUserData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <tr key={user.id}>
      <td>
        <input type="checkbox" checked={checked} onClick={selectUser} />
      </td>
      <td>{userData.username}</td>
      <td>{userData.email}</td>
      <td>{userData.role}</td>
      <td>
        <EditIcon fontSize={"small"} onClick={handleOpen} />
        <DeleteOutlinedIcon
          sx={{ fontSize: 20, color: red[600] }}
          onClick={onDelete}
        />
      </td>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              p: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              className="editUser"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
            <input
              className="editUser"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              className="editUser"
              name="role"
              value={userData.role}
              onChange={handleChange}
            />

            <div className="editButton" onClick={handleClose}>
              Update
            </div>
          </Box>
        </Fade>
      </Modal>
    </tr>
  );
};

export default Tabledata;
