import { useAlertContext } from "../contexts/alertContext";

export default function Alert() {

  const { alertData, setAlertData } = useAlertContext();
  const { type, message } = alertData;

  function closeAlert() {
    setAlertData({
      type: '',
      message: ''
    });
  }

  if (!message) return null;

  return (
    <>
      <div className="alert-container">
        <div className={`alert ${type || 'error'}`}>
          {message}
          <i className="fas fa-times" onClick={closeAlert}></i>
        </div>
      </div>
    </>
  );
}