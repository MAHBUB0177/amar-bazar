import { toast } from "react-toastify";

export  const notifySuccess = (title) =>   toast.success(title,
{
 position: toast.POSITION.TOP_CENTER,
});

export  const notifyError = (title) =>   toast.warning(title,
{
 position: toast.POSITION.TOP_CENTER,
});