const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;

  return <button className="button-title">{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="button-app-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button text="Like" className="like" />
      <Button text="Comment" className="comment" />
      <Button text="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
