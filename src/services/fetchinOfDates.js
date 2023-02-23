export const getServices = async (url,key) => {
    try {
        const response = await fetch(`${url}?api_key=${key}&language=es`)
        const {results} = await response.json()
        return results
    }
    catch{
        throw new Error("http request failed")
    }
}
