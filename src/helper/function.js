import product1_1 from "../media/product1_1.webp"
import product1_2 from "../media/product1_2.webp"

import product2_1 from "../media/product2_1.webp"
import product2_2 from "../media/product2_2.webp"

import product3_1 from "../media/product3_1.webp"
import product3_2 from "../media/product3_2.webp"

import product4_1 from "../media/product4_1.webp"
import product4_2 from "../media/product4_2.webp"

import product5_1 from "../media/product5_1.webp"
import product5_2 from "../media/product5_2.webp"

import product6_1 from "../media/product6_1.webp"
import product6_2 from "../media/product6_2.webp"

const products=[
    {
        id:1,
        name:"کیف اسپرت زنانه کد 001",
        price:300000,
        image1:`${product1_1}`,
        image2:`${product1_2}`
    },
    {
        id:2,
        name:"کیف اسپرت زنانه کد 002",
        price:330000,
        image1:`${product2_1}`,
        image2:`${product2_2}`
    },
    {
        id:3,
        name:"کیف اسپرت زنانه کد 003",
        price:400000,
        image1:`${product3_1}`,
        image2:`${product3_2}`
    },
    {
        id:4,
        name:"کیف اسپرت زنانه کد 004",
        price:250000,
        image1:`${product4_1}`,
        image2:`${product4_2}`
    },
    {
        id:5,
        name:"کیف اسپرت زنانه کد 005",
        price:280000,
        image1:`${product5_1}`,
        image2:`${product5_2}`
    },
    {
        id:6,
        name:"کیف اسپرت زنانه کد 006",
        price:390000,
        image1:`${product6_1}`,
        image2:`${product6_2}`
    }
]

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);

    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {products, isInCart, quantityCount};