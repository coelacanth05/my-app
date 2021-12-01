import {ColoredMessage} from "./components/ColoredMessage"

export const App = () => {
  const onClickButton = () => {
    alert();
  }
  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">Hello!!</ColoredMessage>
      <ColoredMessage color="pink">World!</ColoredMessage>
      <button onClick={onClickButton}>おせ！</button>
    </>
  );
};
