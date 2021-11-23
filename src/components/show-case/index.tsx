import { Type_Product } from 'components/global/types'
import { Product } from 'components/product'
import { api } from 'components/services/api'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ReactComponent as ArrowLeft} from 'assets/arrow-left.svg'
import { ReactComponent as ArrowRight} from 'assets/arrow-right.svg'

export const ShowCase = () => {
    const [products, setProducts] = useState<Type_Product[]>([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        const { data } = await api.get<Type_Product[]>('/products')

        setProducts(data ? data : [])
    }
    
    return (
        <section>
            <div className={styles.content}> 
                <h2 className={styles.title}>
                    Mais Vendidos
                </h2>
                <div className={styles.productsContainer}>
                    <ArrowLeft />
                    <div className={styles.products}>
                        {
                            products.map(product => (
                                <Product key={product.productId} data={product} />
                            ))
                        }
                    </div>
                    <ArrowRight />
                </div>
            </div>
        </section>
    )
}