const postgre = require('../../database.js')

import { PrismaClient, Product } from "@prisma/client";
import { IProduct } from "./product.type";

export class ProductsService {
    
    private prisma = new PrismaClient()

    // createProduct(product: IProduct): Promise<Product> {
    //     return this.prisma.product.create({ data: product })
    // }

    async getProducts() {

        console.log(postgre);
        
        // try {
        //     const { rows } = await postgre.query("select * from prodbcts")
        //     res.json({msg: "OK", data: rows})
        // } catch (error) {
        //     res.json({msg: error.msg})
        // }
        // return this.prisma.product.findMany()
    }

}