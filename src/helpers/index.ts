export const isGuestSessionExpired = (expiresAt: Date) => {
    const now = new Date();
    return now > expiresAt;
}