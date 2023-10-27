import React, {useContext, useState} from 'react'
import Switch from 'react-switch'
import {useHistory} from 'react-router-dom'

import {DefaultTheme, ThemeContext} from 'styled-components'
import {AppContext} from '../../context/AppContext'

import {ButtonSubmit, Container, ExampleDiv, Form, Generic, Text,} from '../../styles/global'
import {BgImg, LandingMain} from './styles'
import Input from '../../components/Input'

import bgDark from '../../assets/bgDark.svg'
import bgLight from '../../assets/bgLight.svg'

import api from '../../services/api'

function Landing() {
    const history = useHistory()
    const [username, setUsername] = useState('')

    const {state, dispatch} = useContext(AppContext)
    const {colors} = useContext(ThemeContext) as DefaultTheme

    const background = state.theme === 'light' ? bgLight : bgDark

    function handleToggleTheme() {
        dispatch({type: 'UPDATE_THEME', payload: null})
    }

    async function searchUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (username !== '') {
            try {
                const {data} = await api.get(`${username}`).then()

                dispatch({type: 'UPDATE_USER', payload: data})
                history.push('/user')
            } catch (error) {
                setUsername('')
                alert('Error in finding user')
            }
        }
        return
    }

    return (
        <Container id='page-landing'>
            <LandingMain>
                <Text font='title'>GitHub Finder</Text>
                <Text font='semi-title'>
                    Enter a username to fetch a user profile and repos </Text>
                <Text font='paragraph'></Text>

                <Form onSubmit={(event) => searchUser(event)}>
                    <Input
                        placeholder='ex: ChorokGreen'
                        value={username}
                        onChange={(event: {
                            target: { value: React.SetStateAction<string> }
                        }) => setUsername(event.target.value)}
                    />

                    <ButtonSubmit>Go</ButtonSubmit>
                </Form>

                <Generic>
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
                            onColor={colors.primary}
                            offColor={colors.primary}
                            offHandleColor={colors.primary}
                            onHandleColor={colors.primary}
                        />
                    </ExampleDiv>
                </Generic>
            </LandingMain>
            <BgImg src={background}/>
        </Container>
    )
}

export default Landing
