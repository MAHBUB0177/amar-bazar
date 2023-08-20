import { toast } from "react-toastify";

export  const notifySuccess = () =>   toast.success("Product ADD To Cart!",
{
 position: toast.POSITION.TOP_CENTER,
});

export  const notifyError = () =>   toast.warning("Product Remove To Cart!",
{
 position: toast.POSITION.TOP_CENTER,
});