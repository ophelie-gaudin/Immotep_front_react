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
      position: 'top-center',
      autoClose: 1500,
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
      position: 'top-center',
      autoClose: false,
      closeOnClick: true,
      draggable: true,
      rtl: false,
      className: 'notify-info',
    });
  },
};

export default Notifications;
