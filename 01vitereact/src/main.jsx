import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <p>
            Hello People !
        </p>
    )
}

const linkText = 'Click Here'

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Open Google ',
    linkText // Final arguement of React.createElement() is the JS variable whose value will be displayed. 
)

createRoot(document.getElementById('root')).render(
    // <MyApp /> //We can render the MyApp component in this way.
    // MyApp() //We can also render the MyApp component in this way.

    reactElement //Since reactElement is a React element & not a function, we can render it directly without wrapping it in a component.
    //<App />
)
