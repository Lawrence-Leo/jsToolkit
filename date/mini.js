// 从Date对象里获取当前时分秒
export const getTimeFromDate = date => date.toTimeString().slice(0, 8);

export default {
    getTimeFromDate
}