'use server'
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

interface LoginResponse {
    error?: string | undefined;
}

export const login = async (): Promise<void> => {
    const respone: LoginResponse = {
        error: undefined
    }
    try {
        const response = await fetch('https://sanproject.azurewebsites.net/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "access-control-allow-origin": "*",
            },
            body: JSON.stringify({
                username: 'test997',
                password: 'haslo123a'
            }),
            cache: "no-store"
        });
        const result = await response.text();
        cookies().set('token', result, {httpOnly: true, maxAge: 60});
    } catch (error) {
        throw new Error("eeee");
    }

    redirect("/auth/home")

}