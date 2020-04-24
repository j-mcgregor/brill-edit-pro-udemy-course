import React from 'react'
import RichText from '../../utils/RichText'
import { RichTextItemProps } from './priceListGrid'
import styled from 'styled-components'

interface PriceListCardProps {
    title: Array<RichTextItemProps>
    description: Array<RichTextItemProps>
    price_per_month: string
    price_type: string
}

const StyledCard = styled.div`
    width: 31%;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #e6d266;
    color: #802f8e;
    ul {
        list-style: none;
        padding: 0;

        li {
            margin: 1rem 0;
            text-transform: capitalize;
        }
    }

    .priceBanner {
        font-size: 3em;
        &::before {
            content: '$';
        }
    }

    .mostPopular {
        width: 200px;
        background: #484c8e;
        position: absolute;
        text-align: center;
        line-height: 40px;
        padding-top: 50px;
        color: #f0f0f0;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        top: -15px;
        right: -65px;
        left: auto;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
`

const PriceListCard = ({
    title,
    description,
    price_per_month,
    price_type,
}: PriceListCardProps) => {
    const mostPopular = price_type ? true : false
    console.log(mostPopular)
    return (
        <StyledCard className="bx-y1 p1">
            {mostPopular && (
                <div className="mostPopular">
                    {' '}
                    <small> Most popular</small>
                </div>
            )}
            <RichText render={title} />
            <h1 className="priceBanner">{price_per_month}</h1>
            <RichText render={description} />
        </StyledCard>
    )
}

export default PriceListCard
