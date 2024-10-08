import { PrismaClient, Product } from "@prisma/client";
import { IProduct } from "./product.type";

export class ProductsService {
    
    private prisma = new PrismaClient()

    createProduct(product: IProduct): Promise<Product> {
        return this.prisma.product.create({ data: product })
    }

    getProducts(): Promise<Product[]> {
        return this.prisma.product.findMany()
    }

}