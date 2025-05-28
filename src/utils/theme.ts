export const getSystemTheme =() => {
    return matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
}
export const getSavedTheme =() => {
    return localStorage.getItem('theme')
}

export const applyTheme = (theme: string) => {
    if (theme === 'system') {
        theme = getSystemTheme()
    }
    document.documentElement.classList.add((theme))
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light')
}
