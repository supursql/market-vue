import { getCategoryAPI } from "@/apis/category"
import { ref, onMounted } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router";

function useCategory() {
    const cateporyInfo = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        cateporyInfo.value = res.result
    }

    onMounted(() => getCategory())
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    })

    return {cateporyInfo}
}