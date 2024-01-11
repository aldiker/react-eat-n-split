import { useState } from 'react'
import Button from './Button'

export default function FormSplitBill({ selectedFriend }) {
    const [bill, setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const [whoIsPaying, setWhoIsPaying] = useState('user')

    const paidByFriend = bill - paidByUser

    return (
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type='text'
                value={bill}
                onChange={(e) => {
                    if (Number(e.target.value) >= paidByUser)
                        setBill(Number(e.target.value))
                }}></input>

            <label>👦 Your expense</label>
            <input
                type='text'
                value={paidByUser}
                onChange={(e) => {
                    if (Number(e.target.value) <= bill)
                        setPaidByUser(Number(e.target.value))
                }}></input>

            <label>👽 {selectedFriend.name}'s expense</label>
            <input type='text' disabled value={paidByFriend}></input>

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value='user'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}
