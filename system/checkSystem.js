const checkSystem = () => {
    const agent = navigator.userAgent
    let isAndroid = /Android/i.test(agent)
    let isIos = /(iPhone|iPad|iPod|iOS)/i.test(agent)
    let isWeChat = /MicroMessenger/i.test(agent)
    return {
        isAndroid,
        isIos,
        isWeChat
    }
}