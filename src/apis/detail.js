import request from "@/utils/http"

const getDetail = (id) => {
    return request({
        url: "/good",
        params: {
            id
        }
    })
}