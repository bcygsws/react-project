import {create} from "zustand/react";
import useChannelStore from "@/components/zustand/store/modules/createChannelStore";
import useCounterStore from "@/components/zustand/store/modules/createCounterStore";

const useStore = create((...a) => {
    return {
        ...useCounterStore(...a), ...useChannelStore(...a)
    }
})
export default useStore;