
function Button({type,children,variant}) {
  return (
    <button type={type} className={`btn ${variant}`}>{children}</button>
  )
}

export default Button