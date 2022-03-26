import { toast } from 'react-toastify';

const Notifications = {
  error(content) {
    toast.error(content, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      rtl: false,
    });
  },
  success(content) {
    toast.success(content, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      rtl: false,
    });
  },
  info(content) {
    toast.info(content, {
      position: 'top-right',
      autoClose: 2500,
      closeOnClick: true,
      draggable: true,
      rtl: false,
      className: 'notify-info',
    });
  },
};

export default Notifications;
