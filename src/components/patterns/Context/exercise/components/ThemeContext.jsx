import React from 'react'
import themes from '../theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

// First you need to create your `ThemeContext` (use React.CreateContext());
// you need to export this also..

class ThemeProvider extends React.Component {

  // You should heep track of some sort of state to toggle the theme from `light` to `dark`
  // (see the themes.js file)
  state = {
    theme: "???"
  }

  handleThemeToggle = () => {
    /*
      Toggle the theme state using `this.setState`.
      remember you can call this function with a funcion as a parameter:
      `this.setState(prevState => {}); // prevState is a reference to the actual previous state.
      remember that `this.setState` is asynchronous
      TODO: link to setState documentation!
    */
  }
  render() {
    const { children } = this.props
    /*
      you should replace the `div` here with your ThemeContext provider and the StyledProvider. you can see an example of this in the next links:
      - https://www.styled-components.com/docs/api#themeprovider
      - https://reactjs.org/docs/context.html#updating-context-from-a-nested-component

      The value of your context should be the current theme, and also your `handleThemeToggle` function.
      this is needed so we can have access to this function in other parts of our code, and effectively toggle the theme.

      => you can do this in `src/components/patterns/Context/exercise/components/App.jsx`
    */
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default ThemeProvider