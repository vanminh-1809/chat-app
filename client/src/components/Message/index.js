import "../../styles/message.scss";

function Message({ mess, className, username }) {
  return (
    <div className={`${className}`}>
        <span className="username">{username}</span><br />
        <span className="message">{mess}</span><br />
    </div>
  );
}

export default Message;
