import React from 'react'
import RichText from '../../utils/richText'
import { CallToActionProps } from '../sliceZone'
import CallToActionCard from './callToActionCard'
import createKey from '../../utils/createKey'

interface CallToActionGridProps {
    title: string
    callToActions: Array<CallToActionProps>
}

const CallToActionGrid = ({ title, callToActions }: CallToActionGridProps) => {
    return (
        <div className="container my3">
            <div className="row text-center">
                <div className="col">
                    <RichText render={title} />
                </div>
            </div>
            <div className="row space-around">
                {callToActions.map((c: CallToActionProps) => {
                    return (
                        <CallToActionCard
                            key={createKey(c.button_destination._meta.uid, 0)}
                            image_url={c.featured_image.url}
                            title={c.call_to_action_title}
                            content={c.call_to_action_content}
                            buttonLink={c.button_destination._meta.uid}
                            buttonLabel={c.button_label}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CallToActionGrid
