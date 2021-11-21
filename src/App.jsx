export const App = () => {
  const onClickButton = () => {
    alert();
  }
  // css style
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  }
  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red"}}>こんにちわ！</h1>
      <p style={contentStyle}>ヤッホー！</p>
      <button onClick={onClickButton}>おせ！</button>
    </>
  );
};
