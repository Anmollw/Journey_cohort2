import { get } from "mongoose";
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default : 102

})

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0

})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 12

})

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0

}) 

export const totalnotificationSelector = selector({
    key : "totalnotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messsagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messsagingAtomCount 
    }
})