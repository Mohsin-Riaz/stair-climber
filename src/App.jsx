import { FaPlus } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';
import './App.css';
import MediaImage from './components/MediaImage';
function App() {
    return (
        <>
            <main>
                <h1>Stair Climber</h1>
                <div className="content">
                    <div className="project">
                        <div>
                            <h2 className="scope">Project Scope</h2>
                        </div>
                        <div>
                            <h3 className="deliverables">Deliverables</h3>
                            <p className="deliverables_text">
                                Design and production team is required to
                                produce an autonomous robot that is capable of
                                climbing stairs. Success of the project is
                                defined by its manufacturability within resource
                                constraints and its ability to perform the
                                critical function of stair climbing. of climbing
                                stairs.
                            </p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p className="timeline_text">
                                5 weeks design phase
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                8 weeks production phase
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                1 week testing phase
                            </p>
                        </div>
                        <div>
                            <h2>Final Design</h2>
                            <p>
                                Final design consists of a 12V battery powering
                                a 14W DC gearmotor that turns a timing pulley.
                                T5 timing pulley runs an 815mm timing belt
                                attached to 2 timing pulleys attached to wheel
                                shafts with tri-wheels attached to each shafts
                                end.
                            </p>
                        </div>
                        <div>
                            <h2>Project Conclusion Notes</h2>
                            <p>
                                Autonmous robot was able to traverse stairs with
                                a maximum payload of 6lbs. Project conclusion
                                well within timeline goals, budget and resource
                                well within constraints or met constraints.
                                Project was a resounding success.
                            </p>
                        </div>
                    </div>
                    <div className="media">
                        <MediaImage
                            image={'./src/assets/images/gantt.png'}
                            label={'Gantt Chart'}
                        />
                        <MediaImage
                            image={'./src/assets/images/Exploded_View.png'}
                            label={'Final Design - Exploded View'}
                        />

                        <ReactPlayer
                            playing={true}
                            loop={true}
                            // width={500}
                            className={'media-wrapper-player'}
                            url="https://www.youtube.com/watch?v=5OuW33RjaV0"
                        />
                        <ReactPlayer
                            playing={true}
                            loop={true}
                            // width={470}
                            // height={300}
                            className={'media-wrapper-player'}
                            url="https://www.youtube.com/watch?v=d1rrCe5qWLE"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
