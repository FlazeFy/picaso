export const storeLocal = async (name,val) => {
    try {
        if (Array.isArray(val)) {
            val = JSON.stringify(val)
        } else {
            val = val.trim()
        }
        localStorage.setItem(name, val)
    } catch (error) {
        throw error
    }
}

export const getLocal = async (name) => {
    try {
        return localStorage.getItem(name)
    } catch (error) {
        throw error
    }
}