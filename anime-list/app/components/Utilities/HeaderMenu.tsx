type Props = {
  title:string
}

const HeaderMenu = ({title}: Props) => {
  return (
    <div className="p-8">
      <h3 className="text-center text-2xl text-color-primary">{title}</h3>
    </div>
  )
}

export default HeaderMenu