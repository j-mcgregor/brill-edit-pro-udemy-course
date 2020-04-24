import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

export interface BackgroundImageProps {
    dimensions: {
        width: number
        height: number
    }
    alt?: string
    copyright?: string
    url: string
}

export interface HeroProps {
    title: string | undefined
    content?: string
    backgroundImage?: BackgroundImageProps
}

const StyledHero = styled.div`
    background: ${({ bgUrl }: { bgUrl: string }) =>
        bgUrl ? `url(${bgUrl})` : '#123'};
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    [class*='col-'] {
        background: rgba(0, 0, 0, 0.5);
        color: white;
    }
`

const Hero = ({ title, content, backgroundImage }: HeroProps) => {
    const url: string = backgroundImage ? backgroundImage.url : ''
    return (
        <StyledHero className="jumbotron jumbotron-fluid py10" bgUrl={url}>
            <div className="container">
                <div className="row">
                    <div className="col-8 px2 py1">
                        {title ? <RichText render={title} /> : null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 px2 py1">
                        {content ? content : null}
                    </div>
                </div>
            </div>
        </StyledHero>
    )
}

export default Hero
