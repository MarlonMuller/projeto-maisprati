import Header from './components/header.jsx'

function App () {

  const links = [
    {url: '#', name:'Home'},
    {url: '#', name:'About'},
    {url: '#', name:'Services'},
    {url: '#', name:'Contact'},
  ]

  return (
    <>
      <Header title='Olaaa' links={links} />
      <h1>Olá mundo!!!</h1>
    </>
  )
}

export default App