import React from 'react'
import { RichText } from 'prismic-reactjs'
import { CallToActionProps } from './SliceZone'
import createKey from '../utils/createKey'
import { Link } from 'gatsby'

interface CallToActionGridProps {
    title: string
    callToActions: Array<CallToActionProps>
}

const CallToActionGrid = ({ title, callToActions }: CallToActionGridProps) => {
    console.log(callToActions)
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <RichText render={title} />
                </div>
            </div>
            <div className="row">
                {callToActions.map((c: CallToActionProps) => {
                    return (
                        <div
                            className="card"
                            style={{ width: '18rem' }}
                            key={createKey(c.featured_image.url, 0)}
                        >
                            <img
                                src={c.featured_image.url}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <RichText render={c.call_to_action_title} />
                                <RichText render={c.call_to_action_content} />
                                <Link
                                    to={`/${c.button_destination._meta.uid}`}
                                    className="btn btn-primary"
                                >
                                    {c.button_label}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CallToActionGrid
