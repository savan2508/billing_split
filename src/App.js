import {FriendsList} from "./component/FriendsList";
import {FormAddFriend} from "./component/FormAddFriend";
import {Button} from "./component/Button";
import {FormSplitBill} from "./component/FormSplitBill";
import {useState} from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={initialFriends}/>
                {showAddFriend && <FormAddFriend/>}
                <Button onClick={}>Add Friend</Button>
            </div>
            <FormSplitBill/>
        </div>
    );
}
