import "../../styles/_message.scss";

function Message({ mess, className }) {
  return (
    <div className={`${className} box-message`}>
      <span className="message">{mess}</span>
    </div>
  );
}

export default Message;
