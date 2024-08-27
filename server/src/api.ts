import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import {createStripeCheckoutSession} from "./checkout";

export const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.post('/checkouts/', runAsync(async ({body}: Request, res:Response)=> {
    res.send(
        await createStripeCheckoutSession(body.line_items)
    )
}))

function runAsync(callback: Function){
 return (req: Request, res:Response, next: NextFunction)=>{
     callback(req, res, next).catch(next);
 }
}
