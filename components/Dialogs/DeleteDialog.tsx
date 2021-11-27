import React from "react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
}

const DeleteDialog = (props: Props) => {
  const { open, onClose } = props;
  if (!open) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 z-50 flex overflow-auto bg-smoke-light">
      <div className="relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg">
        <div>{props.children}</div>
        <span className="absolute top-0 right-0 p-4">
          <IconButton onClick={() => onClose()}>
            <ExitIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default DeleteDialog;
