import express, { Request, NextFunction, Response, } from "express"
import cors from 'cors'
import  ProductRouter  from './src/products/products.controller'
import dotenv from 'dotenv'
import { auth } from './src/auth'
import  logger  from "./src/utils/log"

dotenv.config()

const app = express()
app.use(cors())
app.use( auth )


async function main() {

    app.use(express.json())

    app.use('/api/products', ProductRouter )
    
    
    app.all('*', (err: Error, req: Request, res: Response) => {
        logger.error(err)
        res.status(404).json({ message: 'Not found' })
    })
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        logger.error(err.stack)
        res.status(500).json({ message: 'MY_ERROR'})
    })

    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running on port 3000')
    })

}

main()
