import React from 'react'
import Item from './Item.js/Item'
import SectionTitle from '../../../UI/SectionTitle/SectionTitle'

function Category(props) {
    console.log("Props inside Category: ", props);
    const { name, desc, id, img, price } = props

    // Check if items is not undefined before mapping over it
    const itemsDisplay = 
        <Item
            key={id}
            name={name}
            desc={desc}
            price={price}
            img={img}  // Access the img property directly
            id={id}       // Access the id property directly
        />
    ;

    return (
        <div className="my-4">
            <SectionTitle>
                {name}
            </SectionTitle>
            {itemsDisplay}
        </div>
    )
}

export default Category
