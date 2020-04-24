import React from 'react'
import RichText from '../../utils/richText'
import { Link } from 'gatsby'

interface CallToActionCardProps {
    image_url: string
    title: any
    content: any
    buttonLink: string
    buttonLabel: string
}

const CallToActionCard: React.FC<CallToActionCardProps> = ({
    image_url,
    title,
    content,
    buttonLink,
    buttonLabel,
}) => {
    return (
        <div className="card col-md-4 p0 b0 bx-y5">
            <img src={image_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <RichText render={title} />
                <RichText render={content} />
            </div>
            <div className="card-footer">
                <Link to={`/${buttonLink}`} className="btn btn-primary">
                    {buttonLabel}
                </Link>
            </div>
        </div>
    )
}

export default CallToActionCard
