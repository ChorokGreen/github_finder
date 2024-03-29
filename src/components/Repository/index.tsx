import React from 'react'

import {ContainerStats, GenericInfo, GenericStats, Link, RepoContainer, ReposText,} from './styles'

export interface RepoInterface {
    name: string
    language: string
    html_url: string
    stargazers_count: number
    forks: number
}

export default function Repository({
                                       name,
                                       language,
                                       html_url: url,
                                       stargazers_count: stars,
                                       forks,
                                   }: RepoInterface) {
    return (
        <RepoContainer>
            <GenericInfo>
                <ReposText font='name'>{name}</ReposText>
                <ReposText font='language'>{language}</ReposText>
            </GenericInfo>
            <ContainerStats>
                <GenericStats>
                    <ReposText font='stars'>Stars: {stars}</ReposText>
                    <ReposText font='stars'>Forks: {forks}</ReposText>
                </GenericStats>

                <Link href={url} target='_blank' rel='external'>
                    <ReposText font='link'>Link</ReposText>
                </Link>
            </ContainerStats>
        </RepoContainer>
    )
}
