import { auth } from "@/cofig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"

const useAuth =()=>{

    const [user,setUser] = useState<{}|null|undefined>(undefined);
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            console.log("got user: ",user)
            const newUser = user !== undefined ? user: undefined
            setUser(newUser);
        })
        return unsub;
    },[])
}
export {useAuth}