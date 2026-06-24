import Header from './components/Header'
import Footer from './components/Footer'
import WhatsappFloatButton from './components/WhatsappFloatButton'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Home />
      </main>
      <Footer />
      <WhatsappFloatButton />
    </div>
  )
}

export default App
