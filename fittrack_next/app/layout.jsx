import "@styles/globals.css";

export const metadata = {
    title: "Fittrack",
    description: "Stay fit and healthy with out lifestyle tips"

}

const RootLayout = () => {
  return (
    <html lang= "en">
     <body>
     <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
     </body>
    </html>
  )
}

export default RootLayout