import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Switch from 'react-switch'
import {AppContext} from '../../context/AppContext'

import {ExampleDiv, Text} from '../../styles/global'
import {HeaderContainer, HomeButton} from './styles'
import {DefaultTheme, ThemeContext} from "styled-components";

export default function Header() {
    const history = useHistory()

    const {state, dispatch} = useContext(AppContext)
    const colorContext = useContext(ThemeContext) as DefaultTheme

    function handleToggleTheme() {
        dispatch({type: 'UPDATE_THEME', payload: null})
    }

    function handleGoHome() {
        history.push('/')
    }

    return (
        <HeaderContainer>
            <HomeButton onClick={handleGoHome}>Back</HomeButton>
            <ExampleDiv>
                <Text font='dark-text'>Dark Mode</Text>
                <Switch
                    onChange={handleToggleTheme}
                    checked={state.theme === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onColor={colorContext?.colors.primary}
                    offColor={colorContext?.colors.primary}
                    offHandleColor={colorContext?.colors.primary}
                />
            </ExampleDiv>
        </HeaderContainer>
    )
}
