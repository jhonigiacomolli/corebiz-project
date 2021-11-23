export type Type_Product = {
    productId: number
    productName: string
    stars: number
    imageUrl: string,
    listPrice: number | null
    price: number
    installments: [
      {
        quantity: number
        value: number
      }
    ]
}