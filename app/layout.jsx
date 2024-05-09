import React from 'react'

export const metadata = {
    title: "My estate",
    description: " Discover accomodations of your tastes "
}

const RootLayout = ({children}) => {
  return (
    <html lang= "en">
        <body>
            <div className="main">

                <main className="app">
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout