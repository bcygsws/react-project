import Counter from "@/components/Counter.tsx";
import '@/styles/home.scss';

function Home() {
    return (
        <div className={'home-container'}>
            <img src="../../public/vite.svg" width="200" alt="" className={'app-logo'}/>
            <Counter/>

        </div>
    )
}

export default Home;