import {create} from "zustand/react";
import useChannelStore from "@/components/zustand/store/modules/useChannelStore";
import useCounterStore from "@/components/zustand/store/modules/useCounterStore";

const useStore = create((...a) => {
    return {
        ...useCounterStore(...a), ...useChannelStore(...a)
    }
})
export default useStore;