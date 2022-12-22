import axios from "./http"

/**
 * 插件API
 */
export default {

    /**
     * 添加插件
     * @param data
     * @returns {AxiosPromise}
     */
    add: (data) => {
        return axios({
            url: "/device/model/add",
            method: "post",
            data
        })
    },

    /**
     * 修改插件
     * @param data
     * @returns {AxiosPromise}
     */
    edit: (data) => {
        return axios({
            url: "/device/model/edit",
            method: "post",
            data
        })
    },

    /**
     * 删除插件
     * @param data
     * @returns {AxiosPromise}
     */
    del: (data) => {
        return axios({
            url: "/device/model/delete",
            method: "post",
            data
        })
    },

    /**
     * 查询插件分页列表
     * @param data
     * @returns {AxiosPromise}
     */
    page: (data) => {
        return axios({
            url: "/device/model/list",
            method: "post",
            data
        })
    },

    /**
     * 查询插件树
     * @param data
     * @returns {AxiosPromise}
     */
    tree: (data) => {
        return axios({
            url: "/device/model/tree",
            method: "post",
            data
        })
    },

    /**
     * 插件分类列表
     * @param data
     * @returns {AxiosPromise}
     */
    category: (data) => {
        return axios({
            url: "/dict/list/",
            method: "post",
            data
        })
    },

    /**
     * 插件地图数据
     * @param data
     * @returns {AxiosPromise}
     */
    map: (data) => {
        return axios({
            url: "/device/map",
            method: "post",
            data
        })
    }
}