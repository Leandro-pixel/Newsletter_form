import Forms from "./components/Forms"


function App() {

  return (
   <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center" >
    <h1 className="font-bold text-[2rem] text-white">Subscribe</h1>
    <p className="text-white">Asign to our Newsletter and stay informed</p>
    <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
    <Forms/>
    </div>
    <p className="text-slate-100 text-xs w-96 mt-2 text-center">
      Once you've subscribed, you'll receive our e-mails 
      with the best tips, news and offers
      </p>
   </div>
  )
}

export default App
