import React from "react"
import PropTypes from "prop-types"
import { countries } from "./constants"


function requestButtons({ buttonHandler }) {
    function createButton() {
        return Object.values(countries).map(country => {
            return (<button className="requestBtn" key={country.id} onClick={buttonHandler.bind(null, `${country.name}`)}>{country.name}</button>)
        })
    }

    return (
        <div className="buttons">
            {createButton()}
        </div>
    )
}

requestButtons.propTypes = {
    buttonHandler: PropTypes.func.isRequired
}

export default requestButtons
