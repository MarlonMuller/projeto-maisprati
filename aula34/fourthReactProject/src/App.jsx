import Header from "./components/header.jsx"
import TextArea from "./components/TextArea.jsx"
function App () {

  const links = [
    {name: 'home', url: '#'},
    {name: 'about', url: '#'},
    {name: 'services', url: '#'},
    {name: 'contact', url: '#'},
  ]

  return (
    <>
      <Header title='Meu site' links={links} />
      <h1>Oi</h1>
      <TextArea />
    </>
  )
}

export default App