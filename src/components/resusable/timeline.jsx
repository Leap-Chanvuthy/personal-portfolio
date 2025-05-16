import { Timeline } from "flowbite-react";

const Timelines = ({time , title , body }) =>{

    return (
        <div>
            <h1 className="font-bold text-xl my-10">Timeline</h1>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point/>
                    <Timeline.Content>
                        <Timeline.Time>{time || 'Time' }</Timeline.Time>
                        <Timeline.Title>{title || 'Title'}</Timeline.Title>
                        <Timeline.Body>
                            {body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eget nunc.'}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );

}

export default Timelines;

