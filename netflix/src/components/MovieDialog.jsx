import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";

export default function MovieDialog() {
  const dispatch = useDispatch();
  const { isOpen, id } = useSelector((store) => store.movies);

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <DialogContentText component="div">
            {id ? (
              <VideoBackground movie_id={id} bool={true} />
            ) : (
              <div className="p-4 text-center text-gray-500">
                No trailer available for this movie.
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
