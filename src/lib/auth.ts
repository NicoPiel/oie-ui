// src/lib/auth.ts
export async function loginWithBasic(username: string, password: string) {
    const r = await fetch('/api/users/_login', {
        method: 'POST',
        headers: { Authorization: 'Basic ' + btoa(`${username}:${password}`) },
        credentials: 'include',
    });
    if (!r.ok)
        throw new Error(
            await r.text().catch(() => `Login failed (${r.status})`),
        );
}
