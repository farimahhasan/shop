import React , {useEffect} from 'react';
import { products } from '../helper/function';
import Card from './Card'

const Products = () => {

    
    useEffect(() => {

    }, [products]);
    return (
        <main>
        <section className='section-product'>

               {products.map(pr=><Card key={pr.id} p={pr} />)}
        </section>
        </main>
    );
};

export default Products;