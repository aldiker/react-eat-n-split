import Friend from './Friend'

export default function FriendList({ friendList }) {
    const friends = friendList

    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}
