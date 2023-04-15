import React from "react";

export default function Home(){
    return (
        <>
        <div class="post container" style="box-shadow: 2px 2px 4px lightgray;border-radius: 10px;max-width: 600px;margin: auto;padding-top: 10px;">
                        <div class="row post-head">
                            <div class="col col-2 post-profile-icon" style="/*padding: 10px;*/"><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"/></div>
                            <div class="col post-title-header col-10"><a href="#">Sandeep Kushwaha</a>
                                <p class="title-description">At GNUT</p>
                            </div>
                        </div>
                        <div class="col">
                            <p>Deep Q-Learning uses Experience Replay to learn in small batches in order to avoid skewing the dataset distribution of different states, actions, rewards, and next_states that the neural network will see. Importantly, the agent doesn't need to train after each step.<br/><br/></p>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 post-bottom-items btn" style="text-align: center;font-size: 24px;"><i class="far fa-comments"></i><span>0</span></div>
                                <div class="col-md-6 btn" style="text-align: center;font-size: 24px;"><i class="far fa-thumbs-up"></i><span>0</span></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}