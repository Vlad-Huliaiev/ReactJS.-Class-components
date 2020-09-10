import React, {Component} from "react";
import Story from "./story.js";
import {CreateStory} from "./createStory";
import "./stories.css";

/* <Stories /> */

const storiesMock = [{
    id: 1,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
}, {
    id: 2,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
},{
    id: 3,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
},{
    id: 4,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
},{
    id: 5,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
},{
    id: 6,
    cover: 'https://cdnb.artstation.com/p/assets/images/images/029/271/547/large/rezkaadhitya-maxwelzy-durandal-tour-hi3-contest.jpg?1597013998',
    avatar: 'https://i.redd.it/y5lhk47j4g231.jpg',
    name: 'Bianka Ataegina'
}];

const user = {
    avatar: 'https://static.zerochan.net/Durandal.%28Houkai.3rd%29.full.2808658.jpg'
}


export default class Stories extends Component{
    state = {
        stories: [...storiesMock], //TODO: remove MOCK
        name: 'Default Name',
        cover: 'https://external-preview.redd.it/mcZBcDxxpwDfK4ut6aJjperb1ocugSH1vx9J7CN0rUA.jpg?auto=webp&s=6e99ad15b1c237a631eb280cb196ba50362427a9',
        avatar: 'https://static.zerochan.net/Durandal.%28Houkai.3rd%29.full.2921232.jpg'
    }

    addStory = () => {
        this.setState((prevState) => {
            return {
                stories:[{
                    name: prevState.name,
                    cover: prevState.cover,
                    avatar: prevState.avatar
                }, ...prevState.stories].slice(0, 6)
            };
        })
    }

    changeValue = (field, e) => {
        this.setState({
            [field]: e?.target?.value
        })
    }

render() {
    return(
        <>
            <div className="stories-wrapper">
                <CreateStory avatar={user.avatar} addStory={this.addStory}/>
                {this.state.stories.map((story) => {
                    return (
                        <Story avatar={story.avatar} time={10} key={story.id} name={story.name} cover={story.cover}/>
                    )
                })}
            </div>
            <p>
                <input value={this.state.name} onChange={this.changeValue.bind(this, "name")}/>
            </p>
            <p>
                <input value={this.state.avatar} onChange={this.changeValue.bind(this, "avatar")}/>
            </p>
            <p>
                <input value={this.state.cover} onChange={this.changeValue.bind(this, "cover")}/>
            </p>
        </>
        )
    }
}