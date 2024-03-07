import { useState } from 'react'
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

const Like = () => {
    const [like, setLike] = useState('unliked')

    const liked = () => {
        if (like === 'unliked') {
            setLike('like')
        } else {
            setLike('unliked')
        }
        console.log(like)
    }

  return (
    <>
        <button onClick={() => liked()}>
            {like === 'like' && <BsHandThumbsUp />}
            {like === 'unliked' && <BsHandThumbsUpFill />}
        </button>

    </>
  )
}

export default Like