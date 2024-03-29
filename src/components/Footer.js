import React from "react"
//import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
//import WinBox from "winbox/src/js/winbox"
//import Contact from "./old_Contact"
import { Link } from "gatsby"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (

  <a
    href="mailto:odyssey@woflydev.com?subject=Hi%20Project%20Odyssey!&body=We're%20reaching%20out%20because...%20%3C._.%3E"
    target="_blank"
    rel="noopener noreferrer"
  >Contact</a>
  /*<button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      const win = new WinBox({
        title: "Contact me",
        width: "80%",
        height: "80%",
        x: "center",
        y: "center",
        onfocus: function () {
          this.removeClass("wb-no-focus")
          this.addClass("wb-focus")
        },
        onblur: function () {
          this.removeClass("wb-focus")
          this.addClass("wb-no-focus")
        },
      })

      ReactDOM.render(
        React.createElement(Contact, {
          close: () => win.close(),
        }),
        win.body
      )
    }}
  >
    Contact
  </button>*/
)

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link> {" | "}
        {checkScreenWidthMobile() ? (
          <a
          href="mailto:odyssey@woflydev.com?subject=Hi%20Project%20Odyssey!&body=We're%20reaching%20out%20because...%20%3C._.%3E"
          target="_blank"
          rel="noopener noreferrer"
        >Contact</a>
        ) : (
          desktopButton
        )}
        {" | "}
        <a
          href="https://www.github.com/woflydev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © 2020-{new Date().getFullYear()} woflydev and Project Odyssey {" | "} All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
