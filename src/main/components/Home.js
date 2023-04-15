import React from "react";

export default function Home(){
    return (
        <>
        <div className="flex-column" style={{height: "calc(100% - 100px)",overflowY: "scroll"}}>
        <div className="post container">
                    <div className="row post-head">
                            <div className="col col-2 post-profile-icon"><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"/></div>
                            <div className="col post-title-header col-10"><a href="#">Sandeep Kushwaha</a>
                                <p className="title-description">At GNUT</p>
                            </div>
                        </div>
                        <div className="col">
                            <p>Deep Q-Learning uses Experience Replay to learn in small batches in order to avoid skewing the dataset distribution of different states, actions, rewards, and next_states that the neural network will see. Importantly, the agent doesn't need to train after each step.<br/><br/></p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 post-bottom-items btn" style={{textAlign: "center",fontSize: "24px"}}><i className="far fa-comments"></i><span>0</span></div>
                                <div className="col-md-6 btn" style={{textAlign: "center",fontSize: "24px"}}><i className="far fa-thumbs-up"></i><span>0</span></div>
                            </div>
                        </div>
                    </div>
        </div>
        </>
    )
}