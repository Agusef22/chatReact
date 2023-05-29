import { useState } from 'react'
import { UserAuth } from '../context/AuthContext.jsx'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.jsx'

const SendMessage = () => {
  const [value, setValue] = useState('')
  const { currentUser } = UserAuth()

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (value.trim() === '') {
      alert('Enter valid message!')
      return
    }

    try {
      const { uid, displayName, photoURL } = currentUser
      await addDoc(collection(db, 'messages'), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error)
    }

    console.log(value)
    setValue('')
  }

  return (
    <div
      className={
        'container auto-mx bg-base-300 fixed bottom-0 w-full py-5 shadow-lg'
      }
    >
      <form
        onSubmit={handleSendMessage}
        className={'flex justify-between items-center gap-28 px-5'}
      >
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
        <button className='btn'>Send</button>
      </form>
    </div>
  )
}

export default SendMessage
