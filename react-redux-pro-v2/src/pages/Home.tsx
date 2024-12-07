import Counter from "@/components/Counter.tsx";
import '@/styles/home.scss';

function Home() {
    return (
        <div className={'home-container'}>
            <img src="/vite.svg" alt="" className={'app-logo'}/>
            <Counter/>

        </div>
    )
}

export default Home;