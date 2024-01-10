import Button from './Button'

export default function FormSplitBill() {
    return (
        <form className='form-split-bill'>
            <h2>Split a bill with NAME</h2>

            <label>💰 Bill value</label>
            <input type='text'></input>

            <label>👦 Your expense</label>
            <input type='text'></input>

            <label>👽 NAME's expense</label>
            <input type='text' disabled></input>

            <label>🤑 Who is paying the bill</label>
            <select>
                <option value='user'>You</option>
                <option value='friend'>NAME</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}
