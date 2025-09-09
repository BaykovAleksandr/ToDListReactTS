type ButtonPropsType = {
	description: string
}

export const Button = ({description}: ButtonPropsType) => {
  return (
	<button>{description}</button>
  )
}
