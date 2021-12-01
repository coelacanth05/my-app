export const ColoredMessage = (props) => {
  const {color,children}=props
  // css style
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };
  // return <p style={contentStyle}>ヤッホー！</p>
  return <p style={contentStyle}>{children}</p>
}
