import React from 'react'
import Hero, { BackgroundImageProps } from './Hero'
import createKey from '../utils/createKey'
import CallToActionGrid from './CallToActionGrid'
import PriceListGrid from './PriceListGrid'

export interface CallToActionProps {
    _typename: string
    button_destination: any
    page_title: any
    content?: any
    _meta: {
        uid: string
    }
    button_label: string
    call_to_action_content: any
    call_to_action_title: any
    featured_image: BackgroundImageProps
}

interface PrismicBodyProps {
    primary: {
        [key: string]: any
    }
    fields: Array<CallToActionProps>
    type: string
}

interface SliceZoneProps {
    body: Array<PrismicBodyProps>
}

const SliceZone: React.FC<SliceZoneProps> = ({ body }) => {
    const content = body.map((b: PrismicBodyProps, i: number) => {
        if (b.type === 'hero') {
            return (
                <Hero
                    title={b.primary.hero_title}
                    content={b.primary.hero_content}
                    backgroundImage={b.primary.background_image}
                    key={createKey(b.type, i)}
                />
            )
        } else if (b.type === 'call_to_action_grid') {
            return (
                <CallToActionGrid
                    title={b.primary.section_title}
                    callToActions={b.fields}
                    key={createKey(b.type, i)}
                />
            )
        } else if (b.type === 'price_list') {
            return <PriceListGrid title={b.primary.title} options={b.fields} />
        }
        return <div key={createKey(b.type, i)} />
    })

    return <div>{content}</div>
}

export default SliceZone
