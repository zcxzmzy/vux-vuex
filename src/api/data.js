import axios from '@/libs/api.request'

/**
 *
 * 还款模块
 */
export const getRepayStatistics= (arg) => {
    return this.request({
        url: 'repay/statistics',
        data: arg,
        isToken: 'noToken'
    })
}

/**
 *
 * 个人中心模块
 */

export const getOrderStatistics = () => {
    return this.request({
        url: 'order/statistics',
        data: arg,
        isJson:true
    })
}

export const getOrderList = () => {
    return this.request({
        url: 'order/list',
        data: arg,
    })
}