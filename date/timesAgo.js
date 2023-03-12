// 距离现在多久之前
const timesAgo = (timestamp) => {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;
    const diffValue = new Date().getTime() - timestamp;

    if (diffValue <= 0) {
        return '现在'
    }

    // 计算差异时间的量级
    const yearC = diffValue / year;
    const monthC = diffValue / month;
    const weekC = diffValue / (7 * day);
    const dayC = diffValue / day;
    const hourC = diffValue / hour;
    const minC = diffValue / minute;

    // 从大到小排序 满足1以上即成立
    const mapper = {
        [yearC]: '年',
        [monthC]: "月",
        [weekC]: "周",
        [dayC]: "天",
        [hourC]: "小时",
        [minC]: "分钟",
    }
    for (let key in mapper) {
        if (key >= 1) {
            return `${parseInt(key)}${mapper[key]}前`
        }
    }
}

export default timesAgo

// const a = timesAgo(new Date().getTime())
// const b = timesAgo(new Date('2021-1-11').getTime())
// const c = timesAgo(+new Date(1616330071538))
// const d = timesAgo(new Date('2021-07-12 19:00').getTime())

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)