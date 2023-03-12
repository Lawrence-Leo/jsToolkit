const loadImageAsync = (url) => new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('Could not load image at ' + url))
    image.src = url
})

export default loadImageAsync