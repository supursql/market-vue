import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue"

export function useBanner() {
    const bannerList = ref([])
    const getBannerList = async () => {
        const res = await getBannerAPI({distributionSite:2})
        bannerList.value = res.result
    }

    onMounted(() => getBannerList())

    return {bannerList}
}