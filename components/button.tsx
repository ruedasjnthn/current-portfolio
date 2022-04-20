import tw from "tailwind-styled-components";

interface Props {
    children: React.ReactNode
    type: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

const Button: React.FC<Props> = ({ children, type, onClick }) => {

  return (
    <ButtonWrapper onClick={onClick} type={type}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = tw.button`
bg-theme
text-white
font-bold
px-6
py-2
`

export default Button;