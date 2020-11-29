import {useEffect, useRef} from "react";
import {mount} from 'kassandra/KassandraApp';

const KassandraApp = () => {

    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref}/>;

}

export default KassandraApp;
