import { toast } from "react-toastify";

export  const notifySuccess = ({title}) =>   toast.success(title,
{
 position: toast.POSITION.TOP_CENTER,
});

export  const notifyError = () =>   toast.warning("Product Remove To Cart!",
{
 position: toast.POSITION.TOP_CENTER,
});