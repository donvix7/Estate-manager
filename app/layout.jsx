import React from 'react'
import Provider from '@/components/provider'

export const metadata = {
    title: "My estate",
    description: " Discover accomodations of your tastes "
}

const RootLayout = ({children}) => {
  return (
    <html lang= "en">
        <body>
            <Provider>
            <div className="main">

                <main className="app">
                    {children}
                </main>
            </div>

            </Provider>
            
        </body>
    </html>
  )
}

export default RootLayout