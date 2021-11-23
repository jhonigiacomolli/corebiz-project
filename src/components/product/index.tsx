import { ReactComponent as Rated} from 'assets/rate-star.svg'
import { ReactComponent as NoRated} from 'assets/rate.svg'
import { CurrencyFormat } from 'components/global/functions'
import { Type_Product } from 'components/global/types'
import { SimpleButton } from 'components/button'
import styles from './styles.module.css'

type ProductProps = {
    data: Type_Product
}

export const Product = ({ data }:ProductProps) => {
    const { 
        productName,
        stars,
        imageUrl,
        listPrice,
        price,
        installments 
    } = data


    return (
        <div className={styles.container}>
            {
                listPrice && (
                    <span className={styles.off}>OFF</span>
                )
            }
            <img src={imageUrl} alt={productName} width={216} height={200} />
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {productName}
                </h3>
                <div className={styles.ratio}>
                    { stars > 0 ? <Rated /> : <NoRated /> }
                    { stars > 1 ? <Rated /> : <NoRated /> }
                    { stars > 2 ? <Rated /> : <NoRated /> }
                    { stars > 3 ? <Rated /> : <NoRated /> }
                    { stars > 4 ? <Rated /> : <NoRated /> }
                </div>
                <div className={styles.listPrice}>
                    { listPrice ? `de ${CurrencyFormat(listPrice)}` : '' }
                </div>
                <div className={styles.price}>
                    por { CurrencyFormat(price) }
                </div>
                <div className={styles.installments}>
        	        {
                        installments.map((installment, index) => (
                            <p key={index}>
                                {`ou em ${installment.quantity}x de ${CurrencyFormat(installment.value)}`}
                            </p>
                        ))
                    }
                </div>
                <SimpleButton className={styles.button} >
                    Comprar
                </SimpleButton>
            </div>
        </div>
    )
}