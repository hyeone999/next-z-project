interface Props {
    children : React.ReactNode
    modal: React.ReactNode
}

export default function Layout({children, modal} :Props) {
  return (
    <div>
        before layout
        {children}
        {modal}
    </div>
  )
}
