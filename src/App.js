import { useState } from 'react'
import Button from './components/Button'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'
import FriendList from './components/FriendList'

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
]

export default function App() {
    const [showAddFriend, setShowAddFriend] = useState(false)
    const [selectedFriend, setSelectedFriend] = useState(null)

    const [friends, setFriends] = useState(initialFriends)

    const handleShowAddFriend = () => {
        setShowAddFriend((show) => !show)
        setSelectedFriend(null)
    }

    const handleSelection = (friend) => {
        setSelectedFriend((currentFriend) =>
            currentFriend?.id === friend.id ? null : friend
        )
        setShowAddFriend(false)
    }

    const handleAddFriend = (newFriend) => {
        const newFriends = [...friends, newFriend]
        setFriends(newFriends)
        setShowAddFriend(false)
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill selectedFriend={selectedFriend} />
            )}
        </div>
    )
}
