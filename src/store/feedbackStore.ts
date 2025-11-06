import { persist } from "zustand/middleware";
import { create } from "zustand";



type User = {
    id: number;
    title: string,
    author: string,
    proffession: string
}

type StoreState = {
    users: User[];
    addUsers: (users:User[])=>void;
}

export const userStore = create<StoreState>()(
    persist(
        (set)=>({
            id: 1,
            users: [],
            addUsers: (users)=> set({users}),
        }),
        {name: "user-storage"}
    )
)