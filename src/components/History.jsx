import { Timeline , Button } from "flowbite-react";
import {HiArrowNarrowRight, HiCalendar} from 'react-icons/hi';
import {timeline} from '../components/data/timeline';
import { useEffect, useState } from "react";



const History = () => {

    const [history , setHistory] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        setHistory(timeline);
        setLoading(false);
        console.log(timeline)
    })

    return ( 
            <div>
                <h1 className="m-10 font-bold text-2xl">Education & Career</h1>
                <Timeline className="mx-10">
                    {loading && <h5>Loading....</h5>}
                    {history && history.map((e) => (
                        <Timeline.Item key={e.id}>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content >
                                <Timeline.Time>{e.date}</Timeline.Time>
                                <Timeline.Title>{e.title}</Timeline.Title>
                                <Timeline.Body className="text-justify">
                                    {e.body}
                                </Timeline.Body>
                                {/* <Button outline className="bg-black">
                                    Read More
                                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                                </Button> */}
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>
     );
}
 
export default History;