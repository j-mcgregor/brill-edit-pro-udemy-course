import React from 'react'
import RichText from '../../utils/RichText'
import PriceListCard from './PriceListCard'
import createKey from '../../utils/createKey'

export interface RichTextItemProps {
    type: string
    text: string
    spans: Array<any>
}
export interface PriceItemProps {
    price_type?: string
    price_per_month: string
    price_list_title: Array<RichTextItemProps>
    price_list_description: Array<RichTextItemProps>
}

interface PriceListGrid {
    title: any
    options: Array<PriceItemProps>
}

const PriceListGrid = ({ title, options }) => {
    return (
        <div className="container my3">
            <div className="row text-center">
                <div className="col">
                    <RichText render={title} />
                </div>
            </div>
            <div className="row space-around">
                {options.map((c: PriceItemProps, i: number) => {
                    const priceType = c.price_type ? c.price_type : ''
                    return (
                        <PriceListCard
                            key={createKey(c.price_per_month.toString(), i)}
                            title={c.price_list_title}
                            description={c.price_list_description}
                            price_per_month={c.price_per_month}
                            price_type={priceType}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PriceListGrid
