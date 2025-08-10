"use server"

import { strapiUrl } from "./data"

export async function SubscribeHandle(email:string) {
    try {
        await fetch(`${strapiUrl}/subscriptions`,{
            method:"POST",
            body:JSON.stringify({
                data:{
                    email
                }
            }),
            headers: {
              "Content-Type": "application/json",
            }
        }) 
        return true;
               
    } catch (error) {
        console.log(error);
        
    }

}